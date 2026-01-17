'use client';

import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education" className="bg-[var(--background)] text-[var(--foreground)] py-20 md:py-32 px-6 md:px-12">
      <motion.div 
        className="md:ml-64 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] whitespace-nowrap">
            <span className="text-[var(--accent)] font-mono text-xl md:text-2xl">05.</span> Education & Certifications
          </h2>
          <div className="h-px bg-gradient-to-r from-[var(--border)] via-[var(--accent)]/30 to-transparent flex-1"></div>
        </div>
        
        {/* Education Content */}
        <div className="space-y-12">
          
          {/* Grambling State */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-b border-[var(--border)] pb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-2">
              Grambling State University
            </h3>
            <p className="text-lg text-[var(--accent)] font-semibold mb-1">
              Bachelor of Science in Computer Science
            </p>
            <p className="text-sm text-[var(--foreground-dim)] font-mono mb-4">
              Sophomore | Expected Graduation: May 2028
            </p>
            <p className="text-[var(--foreground-dim)] leading-relaxed mb-6">
              Studying software engineering, data structures, algorithms, and full-stack web development. 
              Working on practical projects to apply what I'm learning.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Data Structures", "Algorithms", "Web Development", "Software Engineering"].map((topic, i) => (
                <span 
                  key={i}
                  className="px-3 py-1.5 bg-[var(--background-light)] text-[var(--accent)] text-xs font-mono rounded border border-[var(--border)] hover:border-[var(--accent)]/50 transition-all duration-200"
                >
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-8">
              Professional Certifications & Programs
            </h4>
            
            <div className="space-y-6">
              
              {/* CodePath */}
              <div className="border-l-4 border-[var(--accent)] pl-6 py-2 hover:bg-[var(--background-light)]/30 transition-colors duration-200 rounded-r">
                <p className="font-semibold text-[var(--foreground)] mb-1">CodePath - Web Development Scholar</p>
                <p className="text-sm text-[var(--foreground-dim)] font-mono mb-2">Feb — Apr 2025</p>
                <p className="text-[var(--foreground-dim)] mt-2">Built responsive single-page websites with HTML, CSS, and JavaScript</p>
              </div>

              {/* IBM SkillsBuild */}
              <div className="border-l-4 border-[var(--accent)] pl-6 py-2 hover:bg-[var(--background-light)]/30 transition-colors duration-200 rounded-r">
                <p className="font-semibold text-[var(--foreground)] mb-1">IBM SkillsBuild - Data Science Scholar</p>
                <p className="text-sm text-[var(--foreground-dim)] font-mono mb-2">May — Jun 2025</p>
                <p className="text-[var(--foreground-dim)] mt-2">Explored data wrangling, cleaning, visualization with Python and Jupyter Notebook</p>
              </div>

              {/* Moonshot Pirates */}
              <div className="border-l-4 border-[var(--accent)] pl-6 py-2 hover:bg-[var(--background-light)]/30 transition-colors duration-200 rounded-r">
                <p className="font-semibold text-[var(--foreground)] mb-1">EcoCircle - Moonshot Pirates</p>
                <p className="text-sm text-[var(--foreground-dim)] font-mono mb-2">Jul — Aug 2025</p>
                <p className="text-[var(--foreground-dim)] mt-2">UX/UI Designer for sustainable habits mobile app, designed with Figma</p>
              </div>

            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
