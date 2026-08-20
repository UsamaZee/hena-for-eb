'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const stats = [
  { value: '15+', label: 'Years Advocating for Education' },
  { value: '4,500+', label: 'Students in Our District' },
  { value: '$52M', label: 'Annual Education Investment' },
  { value: '5', label: 'Public Schools to Lead' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen pt-12 pb-0 flex flex-col items-center justify-between bg-background">
      {/* Floating organic blob decorations */}
      <motion.div
        className="hero-blob-primary"
        animate={{
          borderRadius: [
            '60% 40% 55% 45% / 45% 55% 45% 55%',
            '45% 55% 40% 60% / 55% 45% 55% 45%',
            '55% 45% 60% 40% / 40% 60% 50% 50%',
            '60% 40% 55% 45% / 45% 55% 45% 55%',
          ],
          y: [0, -18, 8, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hero-blob-accent"
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 w-full relative z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Typography */}
          <div className="flex flex-col justify-center">
            <div className="mb-12">
              <motion.div className="mb-6" {...fadeUp(0.1)}>
                <span className="campaign-badge">✨ East Brunswick 2026</span>
              </motion.div>

              <motion.h1
                className="editorial-heading text-5xl md:text-6xl lg:text-7xl leading-tight mb-8"
                {...fadeUp(0.25)}
              >
                Education is a human right.
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl leading-relaxed font-light"
                {...fadeUp(0.4)}
              >
                Ensuring a healthy future for all means investing in an education system that benefits everyone equitably.
              </motion.p>
            </div>

            <motion.div className="flex flex-col sm:flex-row gap-4 pt-8" {...fadeUp(0.55)}>
              <Link href="/why-am-i-running" className="btn btn-primary">
                Why I'm Running
              </Link>
              <Link href="/get-in-touch" className="btn btn-ghost-primary">
                Get In Touch
              </Link>
            </motion.div>
          </div>

          {/* Right — Candidate image */}
          <motion.div
            className="hero-image-placeholder relative aspect-square lg:aspect-auto lg:h-[55vh] flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-text-muted text-center">
              <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm">Candidate Photo</p>
              <p className="text-xs mt-1">Professional portrait — 600×600px</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        className="stats-bar w-full relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="text-4xl md:text-5xl font-sans font-extrabold mb-2 text-white">{stat.value}</p>
                <p className="text-accent font-extrabold text-xs uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
