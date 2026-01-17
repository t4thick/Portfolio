'use client';

import { motion } from 'framer-motion';

export default function Blog() {

  return (
    <section id="blog" className="relative bg-[var(--background)] text-[var(--foreground)] py-24 md:py-40 px-6 md:px-12 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--accent)]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div 
        className="md:ml-64 max-w-6xl relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-16">
          <div className="flex flex-col">
            <span className="text-[var(--accent)] font-mono text-sm mb-2 tracking-[0.2em] uppercase">Blog</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--foreground)] whitespace-nowrap tracking-tight">
              Articles & <span className="gradient-text">Insights</span>
            </h2>
          </div>
          <div className="h-px bg-gradient-to-r from-[var(--border)] via-[var(--accent)]/40 to-transparent flex-1 mt-8"></div>
        </div>

        {/* Coming Soon State */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 md:p-16 text-center border border-[var(--glass-border)]"
        >
          <div className="text-8xl mb-6 opacity-50">✍️</div>
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-4">
            Articles Coming Soon
          </h3>
          <p className="text-[var(--foreground-dim)] max-w-lg mx-auto leading-relaxed mb-8">
            Working on articles about full-stack development, databases, and cloud deployment. 
            Coming soon.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 glass rounded-full text-sm font-mono border border-[var(--accent)]/30 text-[var(--accent)]">Backend Development</span>
            <span className="px-4 py-2 glass rounded-full text-sm font-mono border border-[var(--accent)]/30 text-[var(--accent)]">Database Design</span>
            <span className="px-4 py-2 glass rounded-full text-sm font-mono border border-[var(--accent)]/30 text-[var(--accent)]">Cloud Deployment</span>
            <span className="px-4 py-2 glass rounded-full text-sm font-mono border border-[var(--accent)]/30 text-[var(--accent)]">Security Best Practices</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-[var(--foreground-dim)] mb-6 font-mono text-sm">
            More articles coming soon. Connect with me on{' '}
            <a href="https://github.com/t4thick" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">
              GitHub
            </a>
            {' '}or{' '}
            <a href="https://www.linkedin.com/in/richard-effah-yeboah-621851254" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">
              LinkedIn
            </a>
            .
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
