'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import HeroBanner from '@/components/layout/heroBanner.png'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const stats = [
  { value: '15+', label: 'Years Advocating for Education' },
  { value: '4,500+', label: 'Students in Our District' },
  { value: '$52M', label: 'Annual Education Investment' },
  { value: '5', label: 'Public Schools to Lead' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen pt-32 pb-0 flex flex-col items-center justify-between bg-primary/10">
      {/* Decorative background elements */}
      <div className="hero-blob-primary" />
      <div className="hero-blob-accent" />

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 w-full relative z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Typography */}
          <div className="flex flex-col justify-center">
            <div className="mb-12">
              <motion.div className="mb-6 flex items-center gap-3" {...fadeUp(0.1)}>
                <span className="campaign-badge">✨ East Brunswick 2026</span>
                {/* Starburst accent near badge */}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="text-accent opacity-70">
                  <path d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z" fill="currentColor" />
                </svg>
              </motion.div>

              <motion.h1
                className="editorial-heading text-5xl md:text-6xl lg:text-7xl leading-tight mb-8"
                {...fadeUp(0.25)}
              >
                Education is a human{' '}
                <span className="relative inline-block">
                  right.
                  {/* Hand-drawn SVG underline accent */}
                  <svg
                    viewBox="0 0 160 12"
                    fill="none"
                    aria-hidden="true"
                    className="absolute -bottom-2 left-0 w-full"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 9 C30 3, 60 11, 90 6 C120 1, 145 9, 158 7"
                      stroke="var(--color-accent)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>
              </motion.h1>

              {/* <motion.p
                className="text-xl md:text-2xl leading-relaxed font-light"
                {...fadeUp(0.4)}
              >
                Ensuring a healthy future for all means investing in an education system that benefits everyone equitably.
              </motion.p> */}

              <motion.h2
                className="text-xl md:text-3xl leading-tight font-black"
                {...fadeUp(0.4)}
              >
                Hena Mughal <span className='font-normal!'>is running for the East Brunswick Board of Education</span>
              </motion.h2>

              <motion.h3 className="text-lg md:text-2xl font-bold mt-2 text-accent" {...fadeUp(0.5)}>
                Local, Listening, Leading
              </motion.h3>

              <span className='text-xl px-4 py-2 mt-4 rounded-full w-max block bg-white text-accent font-black uppercase border-2 border-primary'>Column 5</span>
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
            className="hero-image-placeholder rounded-xl relative aspect-square lg:aspect-auto lg:h-[62vh] flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={HeroBanner.src} alt="Candidate Photo" className="absolute inset-0 w-full h-full object-cover" />
            {/* <div className="text-white h-max w-max rounded text-center inset-0 absolute bg-primary font-black text-2xl md:text-3xl lg:text-4xl">
              <p className="text-xl px-5 py-3 text-left">
                Vote<br/>
                <span>Column </span>
                <span className='text-3xl'>5</span>
              </p>
            </div> */}
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      {/* <motion.div
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
      </motion.div> */}
    </section>
  );
}
