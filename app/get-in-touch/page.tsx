'use client';

import { useState } from 'react';

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interested: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement form submission to API
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '', interested: false });
    }, 3000);
  };

  return (
    <div style={{ backgroundColor: 'var(--color-background)' }} className="min-h-screen pt-12 pb-24">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="section-number mb-4">Connect</p>
          <h1 className="editorial-heading text-5xl md:text-6xl leading-tight">
            Get In Touch
          </h1>
          <p style={{ color: 'var(--color-text-muted)' }} className="text-xl mt-6">
            Have questions or want to get involved? I&apos;d love to hear from you. Send me a message and I&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div>
                <p className="section-number mb-2">Email</p>
                <a href="mailto:hello@henaforeb.com" style={{ color: 'var(--color-text)' }} className="text-lg hover:text-gray-600 transition-colors">
                  hello@henaforeb.com
                </a>
              </div>

              <div>
                <p className="section-number mb-2">Phone</p>
                <a href="tel:+17325551234" style={{ color: 'var(--color-text)' }} className="text-lg hover:text-gray-600 transition-colors">
                  (732) 555-1234
                </a>
              </div>

              <div>
                <p className="section-number mb-2">Location</p>
                <p style={{ color: 'var(--color-text)' }} className="text-lg">
                  East Brunswick, NJ
                </p>
              </div>

              <div className="section-divider"></div>

              <div>
                <p className="section-number mb-4">Connect Online</p>
                <div className="space-y-3">
                  <a href="#" style={{ color: 'var(--color-text)' }} className="block hover:text-gray-600 transition-colors">
                    Facebook
                  </a>
                  <a href="#" style={{ color: 'var(--color-text)' }} className="block hover:text-gray-600 transition-colors">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
            <div>
              <label htmlFor="name" style={{ color: 'var(--color-text)' }} className="block text-sm font-medium mb-2 uppercase tracking-wide">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" style={{ color: 'var(--color-text)' }} className="block text-sm font-medium mb-2 uppercase tracking-wide">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" style={{ color: 'var(--color-text)' }} className="block text-sm font-medium mb-2 uppercase tracking-wide">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" style={{ color: 'var(--color-text)' }} className="block text-sm font-medium mb-2 uppercase tracking-wide">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="resize-none"
              ></textarea>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="interested"
                name="interested"
                checked={formData.interested}
                onChange={handleChange}
                className="w-5 h-5 mt-1 cursor-pointer"
              />
              <label htmlFor="interested" style={{ color: 'var(--color-text)' }} className="text-sm cursor-pointer">
                I&apos;d like to receive updates about the campaign and get involved in local efforts.
              </label>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full btn btn-primary"
              >
                {submitted ? 'Message Sent! Thank You' : 'Send Message'}
              </button>
            </div>

            {submitted && (
              <div style={{ backgroundColor: 'var(--color-primary-light)', color: 'var(--color-text)' }} className="p-4 border border-green-200 text-sm">
                Thank you for reaching out! I&apos;ll get back to you soon.
              </div>
            )}
          </form>
        </div>

        <div style={{ borderTop: '1px solid var(--color-border)' }} className="mt-16 pt-12">
          <a
            href="/"
            style={{ color: 'var(--color-text)' }}
            className="text-sm font-medium uppercase tracking-wide hover:text-gray-600 transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
