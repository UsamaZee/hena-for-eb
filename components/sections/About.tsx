'use client';

import { motion } from 'motion/react';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
};

export default function About() {
  return (
    <>
      <section className="py-24 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">

          {/* Section Header */}
          <motion.div className="mb-16" {...fadeInUp}>
            <p className="section-number mb-4">About Me</p>
            <h2 className="editorial-heading text-5xl md:text-6xl leading-tight">
              A Life Rooted in <span className="accent-underline">Community</span>
            </h2>
          </motion.div>

          {/* Editorial Biography */}
          <div className="space-y-8 max-w-162.5">

            <motion.blockquote
              className="p-4 my-4 border-s-4 italic font-sans text-xl text-white border-primary bg-primary/70"
              {...fadeInUp}
            >
              For the past 33 years, I have called East Brunswick my home.
            </motion.blockquote>

            <div className="section-divider" />

            <motion.div className="space-y-6" {...fadeInUp} transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
              <h3 className="section-number mb-4">Education &amp; Training</h3>
              <p className="text-lg leading-relaxed">
                I graduated from East Brunswick High School in 2008, after which I went to Rutgers University to study English with a minor in Art History and Religion. I then pursued my Masters in Education and graduated Magna Cum Laude while also obtaining my teaching degree for K-12.
              </p>
            </motion.div>

            <div className="section-divider" />

            <motion.div className="space-y-6" {...fadeInUp} transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
              <h3 className="section-number mb-4">Community &amp; Family</h3>
              <p className="text-lg leading-relaxed">
                Today, I run my small family business in East Brunswick and am engaged in various local efforts in our community. I also have five nieces and nephews who are the world to me and in whose education and future I have a vested interest.
              </p>
            </motion.div>

            <div className="section-divider" />

            {/* <motion.div
              className="quote-card"
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="quote-mark" aria-hidden="true">&ldquo;</span>
              <p className="text-2xl md:text-3xl font-light leading-relaxed relative z-10">
                My commitment to East Brunswick&apos;s children drives everything I do. With deep roots in this community and a personal stake in its educational future, I&apos;m ready to serve on the Board of Education and ensure every student has access to the world-class education they deserve.
              </p>
            </motion.div> */}

          </div>
        </div>
      </section>

      {/* Wavy SVG divider between About and Priorities */}
      {/* <div aria-hidden="true" className="bg-background -mb-px overflow-hidden w-full">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-32 block"
        >
          <path
            d="M0 24 C120 8, 240 40, 360 24 C480 8, 600 40, 720 24 C840 8, 960 40, 1080 24 C1200 8, 1320 40, 1440 24 L1440 48 L0 48 Z"
            fill="var(--color-border)"
            opacity="0.25"
          />
        </svg>
      </div> */}
    </>
  );
}
