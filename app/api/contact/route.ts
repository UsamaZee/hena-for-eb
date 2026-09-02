import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getResend } from '@/lib/resend';

const MAX_BODY_SIZE = 10_000;

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(30).optional().default(''),
  message: z.string().trim().min(4),
  interested: z.boolean().optional().default(false),
  website: z.string().max(200).optional().default(''),
}).strict();

function isSameOrigin(request: NextRequest) {
  const origin = request.headers.get('origin');
  const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host');
  const protocol = request.headers.get('x-forwarded-proto') ?? request.nextUrl.protocol.slice(0, -1);

  return Boolean(origin && host && origin === `${protocol}://${host}`);
}

export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: 'Invalid request origin.' }, { status: 403 });
  }

  if (!request.headers.get('content-type')?.startsWith('application/json')) {
    return NextResponse.json({ error: 'Content-Type must be application/json.' }, { status: 415 });
  }

  const declaredSize = Number(request.headers.get('content-length') ?? 0);
  if (declaredSize > MAX_BODY_SIZE) {
    return NextResponse.json({ error: 'Request is too large.' }, { status: 413 });
  }

  try {
    const rawBody = await request.text();
    if (rawBody.length > MAX_BODY_SIZE) {
      return NextResponse.json({ error: 'Request is too large.' }, { status: 413 });
    }

    let body: unknown;
    try {
      body = JSON.parse(rawBody);
    } catch {
      return NextResponse.json({ error: 'Invalid JSON payload.' }, { status: 400 });
    }

    const parsedBody = contactSchema.safeParse(body);
    if (!parsedBody.success) {
      const fieldErrors = parsedBody.error.flatten().fieldErrors;
      const errorMap: { [key: string]: string } = {
        name: 'Name must be between 2-100 characters.',
        email: 'Please provide a valid email address.',
        phone: 'Phone number is invalid.',
        message: 'Message must be at least 4 characters.',
        interested: 'Invalid value for campaign updates.',
        website: 'Website URL is too long.',
      };
      const firstField = Object.keys(fieldErrors)[0];
      const errorMessage = firstField ? errorMap[firstField] || 'Invalid form data.' : 'Invalid form data.';
      return NextResponse.json({ error: errorMessage }, { status: 400 });
    }

    const { name, email, phone, message, interested, website } = parsedBody.data;

    // Silently accept bot submissions caught by the honeypot.
    if (website) {
      return NextResponse.json({ success: true });
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    const resend = getResend();

    if (!resend || !to || !from) {
      console.error('Contact email environment variables are not configured.');
      return NextResponse.json({ error: 'Email service is unavailable.' }, { status: 503 });
    }

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: 'New campaign website message',
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || 'Not provided'}`,
        `Campaign updates: ${interested ? 'Yes' : 'No'}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    });

    if (error) {
      console.error('Resend contact delivery failed:', {
        name: error.name,
        message: error.message,
        statusCode: error.statusCode,
      });
      return NextResponse.json({ error: 'Unable to send your message right now.' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Unexpected contact delivery failure:', error);
    return NextResponse.json(
      { error: 'Unable to send your message right now.' },
      { status: 500 }
    );
  }
}
