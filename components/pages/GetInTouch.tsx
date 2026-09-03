'use client';

import { motion } from 'motion/react';
import { FaInstagram } from 'react-icons/fa';
import ContactForm from '@/components/ui/ContactForm';

const contactDetails = [{ label: 'Email', value: 'info@henaforeb.com', href: 'mailto:info@henaforeb.com' }];
const socialLinks = [{ label: 'Instagram', href: 'https://www.instagram.com/henaforeb/', icon: FaInstagram }];

export default function GetInTouch() {
  return (
    <div className="min-h-screen bg-background pt-20 lg:pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div className="mb-16" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
          <h1 className="editorial-heading text-5xl md:text-6xl leading-tight">Get In <span className="accent-underline">Touch</span></h1>
          <p className="text-text-muted text-xl mt-6 max-w-xl">I&apos;m here to listen!</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <motion.div className="lg:col-span-2 space-y-6" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
            <div className="bg-primary rounded-2xl p-6 space-y-6" style={{ boxShadow: '0 2px 20px rgba(9,79,11,0.06)' }}>
              {contactDetails.map(({ label, value, href }) => (
                <div key={label}>
                  <p className="section-number mb-1 text-gray-100!">{label}</p>
                  <a href={href} className="text-base font-bold text-white! hover:text-accent! transition-colors">{value}</a>
                </div>
              ))}
              <div>
                <p className="section-number text-gray-100! mb-3">Follow Along</p>
                <div className="flex gap-3">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a key={label} href={href} aria-label={label} title={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white text-primary! transition-colors hover:border-accent hover:text-accent!">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className="lg:col-span-3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
