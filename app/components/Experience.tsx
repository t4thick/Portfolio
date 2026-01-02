'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  
  const experiences = [
    {
      company: "Lovely Queen Mart",
      title: "E-Commerce Developer",
      dates: "2024 — Present",
      description: "Led development and deployment of full-featured e-commerce platform for African grocery retailer.",
      achievements: [
        "Launched WooCommerce-based platform for authentic African products with 100+ SKUs",
        "Integrated secure payment processing and order fulfillment system",
        "Established fast delivery logistics supporting customer acquisition",
        "Achieved 20% improvement in customer retention through quality platform design",
      ],
      techStack: ["WordPress", "WooCommerce", "Payment Gateway", "E-commerce"],
    },
    {
      company: "Extern Inc.",
      title: "Strategic Consultant & Researcher",
      dates: "Jul — Aug 2025",
      description: "Collaborated with PwC-affiliated consulting firm on alumni engagement strategy for Major League Teaching (MLT).",
      achievements: [
        "Researched and evaluated alumni engagement strategies for 1,500+ senior executives",
        "Developed detailed stakeholder personas for targeted outreach",
        "Designed comprehensive strategic presentation delivered to MLT leadership",
      ],
      techStack: ["Strategic Analysis", "Research", "Stakeholder Analysis", "Presentation Design"],
    },
    {
      company: "Justmart General Dealers Ltd",
      title: "Graphic Designer & Brand Specialist",
      dates: "Feb 2022 — Nov 2024",
      description: "Led creative design initiatives and marketing communications for general merchandise distributor.",
      achievements: [
        "Designed 50+ marketing materials (flyers, business cards, brochures, company profiles)",
        "Improved customer retention by approximately 20% through timely delivery and quality design",
        "Established consistent brand identity and professional image",
        "Collaborated directly with clients on custom design requirements",
      ],
      techStack: ["Adobe Photoshop", "Microsoft Office", "Brand Design", "Marketing Materials"],
    },
  ];

  return (
    <section id="experience" className="bg-[var(--background)] text-[var(--foreground)] py-20 md:py-32 px-6 md:px-12">
      <motion.div 
        className="md:ml-64 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] whitespace-nowrap">
            <span className="text-[var(--accent)] font-mono text-xl">02.</span> Where I've Worked
          </h2>
          <div className="h-px bg-[var(--border)] flex-1"></div>
        </div>

        {/* Experience Tabs & Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Company Tabs */}
          <div className="flex md:flex-col gap-1 overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-[var(--border)] md:min-w-[200px] pb-4 md:pb-0">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-3 text-left font-mono text-sm whitespace-nowrap border-b-2 md:border-b-0 md:border-l-2 transition-all duration-200 ${
                  activeTab === index
                    ? 'border-[var(--accent)] text-[var(--accent)] bg-[var(--background-light)]/50'
                    : 'border-transparent text-[var(--foreground-dim)] hover:text-[var(--accent)] hover:bg-[var(--background-light)]/30 hover:border-[var(--accent)]/30'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Experience Content */}
          <div className="flex-1">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: activeTab === index ? 1 : 0, x: activeTab === index ? 0 : 20 }}
                transition={{ duration: 0.3 }}
                className={activeTab === index ? 'block' : 'hidden'}
              >
                <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-1">
                  {exp.title}{" "}
                  <span className="text-[var(--accent)]">@ {exp.company}</span>
                </h3>
                <p className="text-[var(--foreground-dim)] text-sm font-mono mb-6">{exp.dates}</p>
                
                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-4 text-[var(--foreground-dim)] leading-relaxed">
                      <span className="text-[var(--accent)] mt-2 flex-shrink-0">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 font-mono text-xs">
                  {exp.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-[var(--background-light)] rounded border border-[var(--border)] text-[var(--foreground-dim)] hover:border-[var(--accent)]/50 hover:text-[var(--accent)] transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
