'use client';

import { motion } from 'framer-motion';

export default function Research() {
  return (
    <section id="research" className="relative bg-[var(--background)] text-[var(--foreground)] py-20 md:py-32 px-6 md:px-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent)] rounded-full blur-3xl opacity-5 pointer-events-none"></div>
      
      <motion.div 
        className="md:ml-64 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] whitespace-nowrap">
            <span className="text-[var(--accent)] font-mono text-xl md:text-2xl">08.</span> Research Opportunities
          </h2>
          <div className="h-px bg-gradient-to-r from-[var(--border)] via-[var(--accent)]/30 to-transparent flex-1"></div>
        </div>

        {/* Availability Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 p-6 md:p-8 glass rounded-2xl border-2 border-[var(--accent)]/40 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-[var(--accent)]/20 transition-colors duration-300"></div>
          <div className="relative z-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-3 h-3 bg-[var(--accent)] rounded-full mt-2 animate-pulse"></div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-2">
                  Available for Summer 2026 Research
                </h3>
                <p className="text-[var(--foreground-dim)] text-base md:text-lg leading-relaxed">
                  I'm actively seeking undergraduate research opportunities for Summer 2026. As an international student, 
                  I'm available for full-time research positions and can relocate if needed. I'm particularly interested 
                  in contributing to cutting-edge research in computer science, quantum information science, algorithms, 
                  and related fields.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Research Interests */}
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-6 flex items-center gap-3">
            <span className="text-[var(--accent)] font-mono">Research Interests</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Quantum Information Science & Quantum Computing",
              "Algorithms & Data Structures",
              "Machine Learning & Data Science",
              "Cryptography & Cybersecurity",
              "Distributed Systems & Cloud Computing",
              "Software Engineering & System Architecture"
            ].map((interest, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 p-4 glass rounded-lg border border-[var(--border)] hover:border-[var(--accent)]/50 transition-all duration-300 group"
              >
                <span className="text-[var(--accent)] mt-1 font-bold group-hover:scale-110 transition-transform">▹</span>
                <span className="text-[var(--foreground-dim)] text-sm md:text-base">{interest}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why I'm a Good Fit */}
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-6 flex items-center gap-3">
            <span className="text-[var(--accent)] font-mono">Why I'm a Strong Research Candidate</span>
          </h3>
          <div className="space-y-4">
            {[
              {
                title: "Strong Academic Foundation",
                description: "4.0 GPA Computer Science student with coursework in Algorithms, Data Structures, Software Engineering, and Cybersecurity. Completed IBM Data Science Bootcamp with hands-on experience in data analysis and statistical modeling."
              },
              {
                title: "Practical Research Skills",
                description: "Built production-ready full-stack systems demonstrating ability to work with complex architectures, implement secure systems, and solve challenging technical problems—skills directly transferable to research environments."
              },
              {
                title: "Self-Motivated & Independent",
                description: "Solo-architected and deployed multiple projects from conception to production, showing strong initiative, problem-solving abilities, and ability to work independently—essential for research contributions."
              },
              {
                title: "Available & Committed",
                description: "Available full-time for Summer 2026 research. As an international student, I'm flexible with location and can dedicate 100% of my time to research projects. I'm eager to learn, contribute, and grow as a researcher."
              }
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 glass rounded-xl border-l-4 border-l-[var(--accent)] hover:bg-[var(--background-light)] transition-all duration-300"
              >
                <h4 className="text-[var(--accent)] font-bold mb-2 text-lg">{point.title}</h4>
                <p className="text-[var(--foreground-dim)] text-sm md:text-base leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-8 glass rounded-2xl border-2 border-[var(--accent)]/30"
        >
          <p className="text-[var(--foreground-dim)] text-lg mb-6 leading-relaxed">
            If you're a researcher or faculty member looking for a dedicated undergraduate research assistant, 
            I'd love to discuss how I can contribute to your work.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="mailto:kkras5050@gmail.com?subject=Summer 2026 Research Opportunity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-[var(--accent)] text-[var(--background)] rounded-lg font-mono text-sm font-bold hover:bg-[var(--accent-dark)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(100,255,218,0.4)]"
            >
              Contact Me About Research
            </motion.a>
            <motion.a
              href="/docs/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 text-[var(--accent)] border-2 border-[var(--accent)] rounded-lg font-mono text-sm font-medium hover:bg-[var(--accent)]/10 transition-all duration-300"
            >
              View My Resume
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
