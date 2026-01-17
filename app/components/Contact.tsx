'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="bg-[var(--background)] text-[var(--foreground)] py-20 md:py-32 px-6 md:px-12">
      <motion.div 
        className="md:ml-64 max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        
        {/* Section Number */}
          <p className="text-[var(--accent)] font-mono text-sm md:text-base mb-4">
          08. What's Next?
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--foreground)] mb-6">
          Get In Touch
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-[var(--foreground-dim)] mb-12 max-w-xl mx-auto leading-relaxed">
          I'm open to new opportunities and collaborations. Feel free to reach out if you'd like to connect.
        </p>

        {/* CTA Button */}
        <motion.a
          href="mailto:kkras5050@gmail.com"
          className="inline-block px-10 py-5 text-[var(--accent)] border-2 border-[var(--accent)] rounded-lg font-mono text-sm font-medium hover:bg-[var(--accent)]/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(100,255,218,0.5)] relative overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Say Hello</span>
          <span className="absolute inset-0 bg-[var(--accent)]/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </motion.a>

        {/* Additional Contact Info */}
        <div className="mt-20 pt-8 border-t border-[var(--border)]">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-[var(--foreground-dim)]">
            <a
              href="mailto:kkras5050@gmail.com"
              className="flex items-center gap-3 hover:text-[var(--accent)] transition-all duration-200 group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-mono text-sm">kkras5050@gmail.com</span>
            </a>
            <a
              href="tel:+16142904260"
              className="flex items-center gap-3 hover:text-[var(--accent)] transition-all duration-200 group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-mono text-sm">(614) 290-4260</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
