'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Projects() {
  const projects = [
    {
      title: "Item7 Food Truck Ordering System",
      description: "A comprehensive full-stack web application for managing a mobile food truck business. Features a customer-facing ordering system with menu browsing, shopping cart, and secure payment processing via Stripe. Includes a robust staff portal for order management, scheduling, shift tracking, and financial reporting. Implements role-based access control (customer, staff, manager, admin), email verification, allergy safety checks, and real-time order status tracking.",
      techStack: ["Flask", "Python", "SQLAlchemy", "SQLite", "Stripe API", "Jinja2", "HTML/CSS", "JavaScript"],
      link: "https://item7-food-truck.onrender.com/",
      github: null,
      role: "Full Stack Developer - Lead Developer",
      impact: "Built complete food truck management system with dual user portals. Customer side handles 50+ menu items with allergy tracking and payment processing. Staff side manages scheduling, shift tracking, inventory, and earnings reporting. System demonstrates expertise in MVC architecture, database design, payment integration, and user authentication.",
      image: "/images/item7-preview.jpg",
      imageAlt: "Item7 Food Truck Ordering System preview"
    },
    {
      title: "Lovely Queen Mart",
      description: "A full-featured e-commerce platform specializing in authentic African groceries and cultural products. The site features product catalogs, secure online payment processing, and a fast delivery system. Built for a small business to reach customers looking for traditional African food items, spices, and personal care products.",
      techStack: ["WordPress", "WooCommerce", "E-commerce", "Payment Gateway"],
      link: "https://lovelyqueenmart.com/",
      github: null,
      role: "Full Stack Developer",
      impact: "Successfully launched online presence for African grocery business, enabling customers to shop authentic products with secure payment and delivery tracking.",
      image: "/images/lovelyqueen-preview.jpg",
      imageAlt: "Lovely Queen Mart e-commerce platform preview"
    }
  ];

  const ProjectImage = ({ src, alt, link }: { src: string; alt: string; link: string }) => {
    const [imageError, setImageError] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative aspect-video rounded-lg border border-[var(--border)] overflow-hidden group-hover:border-[var(--accent)]/50 transition-all duration-300 group-hover:shadow-[0_10px_40px_rgba(100,255,218,0.15)] bg-gradient-to-br from-[var(--background-light)] to-[var(--background-lighter)]"
      >
        {!imageError ? (
          <>
            <Image
              src={src}
              alt={alt}
              fill
              className={`object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onError={() => setImageError(true)}
              onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-[var(--accent)]/30 border-t-[var(--accent)] rounded-full animate-spin"></div>
              </div>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
            <div className="text-center">
              <div className="text-4xl mb-3 opacity-50">🖥️</div>
              <p className="text-sm text-[var(--foreground-dim)] font-mono mb-2">{alt}</p>
              <p className="text-xs text-[var(--foreground-dim)]/70">Click to view live site</p>
            </div>
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-[var(--accent)]/0 group-hover:bg-[var(--accent)]/10 transition-all duration-300 flex items-center justify-center">
          <svg 
            className="w-12 h-12 text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </a>
    );
  };

  return (
    <section id="projects" className="bg-[var(--background)] text-[var(--foreground)] py-20 md:py-32 px-6 md:px-12">
      <motion.div 
        className="md:ml-64 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] whitespace-nowrap">
            <span className="text-[var(--accent)] font-mono text-xl">03.</span> Some Things I've Built
          </h2>
          <div className="h-px bg-[var(--border)] flex-1"></div>
        </div>
        
        {/* Projects List */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-start`}>
                {/* Project Image */}
                <div className="w-full md:w-2/5 relative">
                  <ProjectImage src={project.image} alt={project.imageAlt} link={project.link} />
                </div>

                {/* Project Content */}
                <div className="w-full md:w-3/5 flex flex-col justify-center">
                  <p className="text-[var(--accent)] text-sm font-mono mb-3 font-medium">Featured Project</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-4 group-hover:text-[var(--accent)] transition-colors duration-300">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {project.title}
                    </a>
                  </h3>
                  
                  <div className="bg-[var(--background-light)] rounded-lg p-6 mb-6 border border-[var(--border)] group-hover:border-[var(--accent)]/30 transition-colors duration-300">
                    <p className="text-[var(--foreground-dim)] leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <p className="text-sm text-[var(--accent)]/90 italic border-l-2 border-[var(--accent)] pl-4 py-2">
                      {project.impact}
                    </p>
                  </div>

                  <ul className="flex flex-wrap gap-3 mb-6 font-mono text-xs text-[var(--foreground-dim)]">
                    {project.techStack.map((tech, i) => (
                      <li key={i} className="px-3 py-1.5 bg-[var(--background-light)] rounded border border-[var(--border)] hover:border-[var(--accent)]/50 hover:text-[var(--accent)] transition-all duration-200">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--accent)] hover:text-[var(--accent-dark)] transition-all duration-200 hover:scale-110"
                      aria-label={`View ${project.title}`}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--accent)] hover:text-[var(--accent-dark)] transition-all duration-200 hover:scale-110"
                        aria-label="View code on GitHub"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
