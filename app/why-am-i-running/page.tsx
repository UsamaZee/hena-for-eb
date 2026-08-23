import Image from 'next/image';
import Link from 'next/link';
import HeroBanner from '@/components/layout/why-Im-running.jpg';

export default function WhyAmIRunning() {
  return (
    <div style={{ backgroundColor: 'var(--color-background)' }} className="pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-10 md:mb-12">
          <p className="section-number mb-4">My Story</p>
          <h1 className="editorial-heading text-4xl md:text-6xl leading-tight">
            Why I&apos;m Running
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
          <div className="relative aspect-4/3 overflow-hidden rounded-lg border border-border bg-surface">
            <Image
              src={HeroBanner}
              alt="Candidate Photo"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover object-[50%_30%]"
            />
          </div>

          <div
            style={{ color: 'var(--color-text)' }}
            className="max-w-xl space-y-7 lg:border-l-2 border-accent text-lg leading-relaxed lg:pl-8 md:text-xl"
          >
            <p>
              I am running for East Brunswick Board of Education because I sincerely believe in public education. Education is a human right, and ensuring a healthy future for all means investing in an education system that benefits everyone equitably.
            </p>

            <p>
              I am here to help all children feel seen and heard so they can grow into their fullest potential.
            </p>

            <div className="pt-2">
              <Link
                href="/get-in-touch"
                className="btn btn-primary"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
