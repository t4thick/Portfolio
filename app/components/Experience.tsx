'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  
  const experiences: Array<{
    company: string;
    companyUrl?: string;
    title: string;
    dates: string;
    location: string;
    description: string;
    achievements: string[];
    techStack: string[];
  }> = [
    {
      company: "Lovely Queen Mart",
      companyUrl: "https://lovelyqueenmart.com",
      title: "E-Commerce Developer",
      dates: "Jan 2025 - Present",
      location: "Remote",
      description: "Building and maintaining a WooCommerce-based e-commerce platform for authentic African products.",
      achievements: [
        "Architected WooCommerce platform managing 100+ SKUs for African products, integrating secure payment processing and automated fulfillment systems",
        "Optimized user experience and delivery workflows, improving customer retention by 20% and boosting platform engagement metrics",
        "Implemented responsive design and SEO best practices to increase organic traffic and conversions"
      ],
      techStack: ["WooCommerce", "WordPress", "PHP", "JavaScript", "CSS", "Stripe API", "SEO"]
    },
    {
      company: "New Life International School",
      title: "ICT Instructor & Data Administrator",
      dates: "Jan 2024 - Dec 2024",
      location: "Kronum, Kumasi, Ghana",
      description: "Taught ICT fundamentals and managed school data systems.",
      achievements: [
        "Taught fundamental ICT concepts to students across multiple grade levels, fostering digital literacy and practical computer skills",
        "Managed and maintained student records database using Excel, ensuring data accuracy and efficient organization",
        "Developed teaching materials and hands-on exercises to improve student engagement and learning outcomes"
      ],
      techStack: ["Microsoft Excel", "Microsoft Office", "Data Management", "Teaching", "Curriculum Development"]
    },
    {
      company: "God First Printing Press",
      title: "Graphic Designer",
      dates: "May 2024 - Nov 2024",
      location: "Kumasi, Ghana (Part-Time)",
      description: "Created marketing materials and brand designs for various clients.",
      achievements: [
        "Designed diverse marketing materials including flyers, banners, business cards, and logos using Adobe Photoshop",
        "Collaborated with clients to translate their visions into compelling visual designs, enhancing brand presence",
        "Delivered projects on tight deadlines while maintaining high quality standards"
      ],
      techStack: ["Adobe Photoshop", "Graphic Design", "Brand Identity", "Print Design", "Client Communication"]
    }
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
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] whitespace-nowrap">
            <span className="text-[var(--accent)] font-mono text-xl md:text-2xl">02.</span> Where I've Worked
          </h2>
          <div className="h-px bg-gradient-to-r from-[var(--border)] via-[var(--accent)]/30 to-transparent flex-1"></div>
        </div>

        {/* Experience Tabs & Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {experiences.length === 0 ? (
            <div className="text-center py-12 w-full">
              <p className="text-[var(--foreground-dim)] text-lg">Work experience coming soon...</p>
            </div>
          ) : (
            <>
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
                  <span className="text-[var(--accent)]">@ {exp.companyUrl ? (
                    <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {exp.company}
                    </a>
                  ) : exp.company}</span>
                </h3>
                <p className="text-[var(--foreground-dim)] text-sm font-mono mb-1">{exp.dates}</p>
                <p className="text-[var(--foreground-dim)] text-xs font-mono mb-6 opacity-70">{exp.location}</p>
                
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
            </>
          )}
        </div>
      </motion.div>
    </section>
  );
}
