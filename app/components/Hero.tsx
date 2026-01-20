'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-[var(--background)] text-[var(--foreground)] md:ml-64 px-6 md:px-12 overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent)] rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent)] rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)] rounded-full blur-3xl opacity-5"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#64ffda08_1px,transparent_1px),linear-gradient(to_bottom,#64ffda08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="relative max-w-5xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Greeting */}
          <motion.p 
            className="text-[var(--accent)] font-mono text-sm md:text-base mb-4 font-medium tracking-wide"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="inline-block mr-2">Hi, my name is</span>
          </motion.p>

          {/* Name */}
          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 text-[var(--foreground)] leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <span className="block mb-2">Richard Effah</span>
            <span className="block text-[var(--accent)] gradient-text">Yeboah.</span>
          </motion.h1>

          {/* Tagline */}
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 text-[var(--foreground-dim)] leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            I build things for the web.
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-[var(--foreground-dim)] mb-12 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            I'm a <span className="text-[var(--accent)] font-semibold">Computer Science student</span> and software developer 
            building full-stack applications. <span className="text-[var(--accent)] font-semibold">Seeking Summer 2026 research opportunities</span> 
            in quantum computing, algorithms, and related fields.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 text-[var(--accent)] border-2 border-[var(--accent)] rounded font-mono text-sm font-medium hover:bg-[var(--accent)]/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(100,255,218,0.5)] relative overflow-hidden group"
            >
              <span className="relative z-10">Get In Touch</span>
              <span className="absolute inset-0 bg-[var(--accent)]/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </motion.a>
            <motion.a
              href="/docs/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-[var(--accent)] text-[var(--background)] rounded font-mono text-sm font-bold hover:bg-[var(--accent-dark)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(100,255,218,0.4)]"
            >
              Resume
            </motion.a>
            <motion.a
              href="#research"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-[var(--accent)]/10 text-[var(--foreground)] border-2 border-[var(--accent)]/40 rounded font-mono text-sm font-medium hover:bg-[var(--accent)]/20 hover:border-[var(--accent)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(100,255,218,0.3)]"
            >
              Research Opportunities
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-[var(--foreground-dim)]"
            >
              <span className="text-xs font-mono">Scroll</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
