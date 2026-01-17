'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Responsive Design"]
    },
    {
      category: "Backend Development",
      skills: ["Python", "Flask", "Node.js", "Express", "RESTful APIs", "Server Architecture"]
    },
    {
      category: "Database & ORM",
      skills: ["PostgreSQL", "SQLite", "SQLAlchemy", "Database Design", "SQL", "Data Modeling"]
    },
    {
      category: "Design & UX",
      skills: ["Figma", "Adobe Photoshop", "UX/UI Design", "Wireframing", "Prototyping", "Brand Design"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "Visual Studio Code", "WordPress", "WooCommerce", "Vercel", "Redis"]
    },
    {
      category: "Data & Analysis",
      skills: ["Python", "Jupyter Notebook", "IBM Watson Studio", "Data Wrangling", "Data Visualization"]
    },
    {
      category: "Integration & APIs",
      skills: ["Stripe Payment API", "Email Integration", "Third-party APIs", "Payment Processing"]
    },
    {
      category: "Soft Skills",
      skills: ["Strategic Analysis", "Research", "Stakeholder Management", "Team Collaboration", "Problem Solving", "Presentation Design"]
    }
  ];

  return (
    <section id="skills" className="bg-[var(--background)] text-[var(--foreground)] py-20 md:py-32 px-6 md:px-12">
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
            <span className="text-[var(--accent)] font-mono text-xl md:text-2xl">04.</span> Skills & Technologies
          </h2>
          <div className="h-px bg-gradient-to-r from-[var(--border)] via-[var(--accent)]/30 to-transparent flex-1"></div>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {skillCategories.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="pb-8 border-b border-[var(--border)] last:border-b-0 group"
            >
              {/* Category Title */}
              <h3 className="text-lg md:text-xl font-bold text-[var(--foreground)] mb-5 group-hover:text-[var(--accent)] transition-colors duration-300">
                {section.category}
              </h3>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2.5">
                {section.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (i * 0.03) }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 bg-[var(--background-light)] text-[var(--foreground-dim)] text-xs font-mono rounded-md border border-[var(--border)] hover:bg-[var(--background-lighter)] hover:border-[var(--accent)]/60 hover:text-[var(--accent)] transition-all duration-200 cursor-default shadow-sm hover:shadow-[0_0_10px_rgba(100,255,218,0.2)]"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
