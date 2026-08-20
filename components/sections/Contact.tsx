'use client';

import { motion } from 'motion/react';

const priorities = [
  {
    number: '01',
    title: 'Equitable Education Access',
    description: 'Every student deserves access to quality education regardless of background or circumstance.',
  },
  {
    number: '02',
    title: 'Student & Teacher Support',
    description: 'Investing in our educators and supporting student mental health, wellness, and development.',
  },
  {
    number: '03',
    title: 'Community Partnership',
    description: 'Working collaboratively with families, teachers, and community members to strengthen our schools.',
  },
  {
    number: '04',
    title: 'Fiscal Responsibility',
    description: 'Ensuring taxpayer dollars are used wisely to maximize educational outcomes for all students.',
  },
];

export default function Contact() {
  return (
    <>
      {/* Priorities Section */}
      <section className="py-24 bg-background border-t border-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-number mb-4">02</p>
            <h2 className="editorial-heading text-5xl md:text-6xl leading-tight">
              Campaign <span className="accent-underline">Priorities</span>
            </h2>
            <p className="text-text-muted text-xl mt-6">
              These core principles guide my commitment to East Brunswick&apos;s educational future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {priorities.map((priority, i) => (
              <motion.div
                key={priority.number}
                className="priority-card"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-5xl font-serif font-extrabold mb-4 leading-none text-primary opacity-25">
                  {priority.number}
                </p>
                <h3 className="text-xl font-serif font-bold mb-3">
                  {priority.title}
                </h3>
                <p className="text-text-muted text-base leading-relaxed">
                  {priority.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            <p className="text-sm uppercase tracking-widest opacity-70 mb-4">Join the Movement</p>
            <h2 className="editorial-heading text-5xl md:text-6xl leading-tight mb-6 text-white!">
              Let&apos;s Build a Better Future for Our Schools
            </h2>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed font-light">
              Your voice matters. Get involved in our campaign, volunteer, or stay updated on the latest news.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="/get-in-touch"
              className="bg-white text-primary px-8 py-4 font-medium text-sm uppercase tracking-wide hover:opacity-80 transition-opacity inline-flex items-center justify-center"
            >
              Get In Touch
            </a>
            <a
              href="#donate"
              className="px-8 py-4 border border-white text-white! font-medium text-sm uppercase tracking-wide hover:bg-white/10 transition-colors inline-flex items-center justify-center"
            >
              Donate to the Campaign
            </a>
          </motion.div>

          <div className="mt-16 pt-16 border-t border-white/20">
            <div className="grid grid-cols-3 gap-8">
              {[
                { value: '33+', label: 'Years in Community' },
                { value: '100%', label: 'Committed to EB' },
                { value: '∞', label: 'Love for Students' },
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
