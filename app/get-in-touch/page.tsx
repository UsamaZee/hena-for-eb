'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import FormField from '@/components/ui/FormField';
import Link from 'next/link';

const contactDetails = [
  {
    label: 'Email',
    value: 'hello@henaforeb.com',
    href: 'mailto:hello@henaforeb.com',
  },
  {
    label: 'Phone',
    value: '(732) 555-1234',
    href: 'tel:+17325551234',
  },
  {
    label: 'Location',
    value: 'East Brunswick, NJ',
    href: null,
  },
];

const socialLinks = [
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
];

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interested: false,
    website: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json().catch(() => ({})) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? 'Unable to send your message right now.');
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '', interested: false, website: '' });
      }, 4000);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to send your message right now.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-12 pb-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Page header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-number mb-4">Connect</p>
          <h1 className="editorial-heading text-5xl md:text-6xl leading-tight">
            Get In <span className="accent-underline">Touch</span>
          </h1>
          <p className="text-text-muted text-xl mt-6 max-w-xl">
            Have questions or want to get involved? Send a message and I&apos;ll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* Left — Contact sidebar */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Brand card */}
            <div className="contact-brand-card">
              <span className="campaign-badge bg-white/15 text-white border-white/20 mb-4 inline-flex">
                ✨ East Brunswick 2026
              </span>
              <h2 className="text-2xl font-serif font-bold mb-2">HENA for EB Schools</h2>
              <p className="text-white/75 text-sm leading-relaxed">
                Education is a human right. Running for the East Brunswick Board of Education to ensure every student thrives.
              </p>
            </div>

            {/* Contact details */}
            <div className="bg-surface rounded-2xl p-6 space-y-6" style={{ boxShadow: '0 2px 20px rgba(9,79,11,0.06)' }}>
              {contactDetails.map(({ label, value, href }) => (
                <div key={label}>
                  <p className="section-number mb-1">{label}</p>
                  {href ? (
                    <a href={href} className="text-base font-medium hover:text-primary transition-colors">{value}</a>
                  ) : (
                    <p className="text-base font-medium">{value}</p>
                  )}
                </div>
              ))}

              <div className="section-divider" />

              <div>
                <p className="section-number mb-3">Follow Along</p>
                <div className="flex gap-3">
                  {socialLinks.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="px-4 py-2 rounded-full border-2 border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Form card */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="form-card">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    className="py-16 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Checkmark circle */}
                    <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="editorial-heading text-3xl mb-3">Message Sent!</h3>
                    <p className="text-text-muted">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl font-serif font-bold mb-6">Send a Message</h2>

                    <FormField
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <FormField
                        label="Phone (optional)"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <FormField
                      label="Your Message"
                      name="message"
                      type="textarea"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                    />

                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    {/* Styled checkbox */}
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative mt-0.5">
                        <input
                          type="checkbox"
                          name="interested"
                          checked={formData.interested}
                          onChange={handleChange}
                          className="sr-only peer"
                        />
                        <div className="w-5 h-5 rounded border-2 border-border bg-surface peer-checked:bg-primary peer-checked:border-primary transition-all flex items-center justify-center">
                          <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-sm text-text-muted group-hover:text-text transition-colors leading-snug">
                        I&apos;d like to receive campaign updates and info on how to get involved.
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="w-full btn btn-primary mt-2 py-4 text-base"
                      disabled={submitting}
                    >
                      {submitting ? 'Sending...' : 'Send Message'}
                    </button>
                    {submitError && <p role="alert" className="text-danger text-sm">{submitError}</p>}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Back link */}
        <motion.div
          className="mt-16 pt-12 border-t border-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="/" className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors">
            ← Back to Home
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
