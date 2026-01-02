'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-[var(--background)] text-[var(--foreground)] md:ml-64 px-6 md:px-12 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent)] rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-4xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Greeting */}
          <motion.p 
            className="text-[var(--accent)] font-mono text-sm md:text-base mb-6 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-[var(--foreground)] leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="block">Richard Effah</span>
            <span className="block text-[var(--accent)]">Yeboah.</span>
          </motion.h1>

          {/* Tagline */}
          <motion.h2 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-[var(--foreground-dim)] leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I build things for the web.
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-[var(--foreground-dim)] mb-12 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            I'm a software developer specializing in building (and occasionally designing)
            exceptional digital experiences. Currently, I'm focused on building accessible,
            human-centered products.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a
              href="#contact"
              className="inline-block px-8 py-4 text-[var(--accent)] border border-[var(--accent)] rounded font-mono text-sm hover:bg-[var(--accent)]/10 transition-all duration-300 hover:shadow-[0_0_25px_rgba(100,255,218,0.4)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
