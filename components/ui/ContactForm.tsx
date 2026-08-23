'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import FormField from '@/components/ui/FormField';

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
  interested: false,
  website: '',
};

export default function ContactForm() {
  const formId = useId();
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => () => {
    if (resetTimer.current) {
      clearTimeout(resetTimer.current);
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = event.target;
    setFormData(previous => ({
      ...previous,
      [name]: type === 'checkbox' ? (event.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
      resetTimer.current = setTimeout(() => {
        setSubmitted(false);
        setFormData(initialFormData);
      }, 4000);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to send your message right now.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="form-card text-left text-text">
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
            <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
              id={`${formId}-name`}
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormField
                id={`${formId}-email`}
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <FormField
                id={`${formId}-phone`}
                label="Phone (optional)"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <FormField
              id={`${formId}-message`}
              label="Your Message"
              name="message"
              type="textarea"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
            />

            <div className="hidden" aria-hidden="true">
              <label htmlFor={`${formId}-website`}>Website</label>
              <input
                id={`${formId}-website`}
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

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
                  <svg
                    className={`w-3 h-3 text-white transition-opacity ${formData.interested ? 'opacity-100' : 'opacity-0'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
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
  );
}