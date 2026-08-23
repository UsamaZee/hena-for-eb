'use client';

import { motion } from 'motion/react';
import ContactForm from '@/components/ui/ContactForm';

export default function Contact() {
  return (
    <>
      {/* Spacer */}
      <div className="bg-background pb-24" />

      {/* Call to Action Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-lg uppercase tracking-widest opacity-70 mb-4">Get in touch</p>
            <h2 className="editorial-heading text-2xl md:text-5xl leading-tight mb-6 text-white!">
              My thoughts and ideas are nothing without input from you - I would love to hear from you!
            </h2>
          </motion.div>

           

          <motion.div
            className="max-w-3xl mx-auto pt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <ContactForm />
          </motion.div>

          <div className="mt-16 pt-16 border-t border-white/20">
            <div className="grid grid-cols-3 gap-8">
              {[
                { value: '33', label: 'Years in Community' },
                { value: '100%', label: 'Committed to EB' },
                { value: '∞', label: 'Invested in Students' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.value}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <p className="text-4xl font-serif font-bold mb-2">{stat.value}</p>
                  <p className="text-sm opacity-70">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
