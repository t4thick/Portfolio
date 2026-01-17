'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import { ProjectSkeleton } from './Skeleton';

export default function Projects() {
  const [isLoading, setIsLoading] = useState(false); // Set to false for now, can be used for async loading
  const projects: Array<{
    title: string;
    description: string;
    techStack: string[];
    link: string;
    github: string | null;
    role?: string;
    impact?: string;
    image: string;
    imageAlt: string;
  }> = [
    {
      title: "Item7 Food Truck Management System",
      description: "A production-ready full-stack web application managing an entire food truck business from customer orders to staff operations. Features dual portals for customer ordering with secure checkout and comprehensive staff management for orders, scheduling, and analytics.",
      techStack: ["Python", "Flask", "PostgreSQL", "SQLAlchemy ORM", "Jinja2 Templates", "RESTful API", "JavaScript", "HTML5/CSS3", "Session Management", "CSRF Protection", "Rate Limiting", "Vercel Serverless", "Redis Caching"],
      link: "https://foodtruckk.vercel.app",
      github: "https://github.com/t4thick/project-foodtruck",
      role: "Full Stack Developer - Solo Architect & Builder",
      impact: "Solo-built production system demonstrating enterprise-ready skills: designed normalized database schema for 50+ menu items, implemented RBAC with 4 user roles (customer/staff/admin/manager), integrated Stripe payments with PCI-compliant security, and deployed serverless on Vercel with Redis caching achieving <2s cold starts. Handles concurrent sessions, real-time order tracking, and automated reporting—proving ability to architect scalable systems, write secure production code, and deploy cloud-native applications ready for enterprise teams.",
      image: "/images/item7-foodtruck-preview.jpg",
      imageAlt: "Item7 Food Truck Management System - Checkout and Dashboard Interface"
    }
  ];

  const ProjectImage = ({ src, alt, link }: { src: string; alt: string; link: string }) => {
    const [imageError, setImageError] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const containerRef = useRef<HTMLAnchorElement>(null);

    // Magnetic effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 150, damping: 20 });
    const springY = useSpring(y, { stiffness: 150, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      x.set(distanceX * 0.1);
      y.set(distanceY * 0.1);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.a
        ref={containerRef}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: springX, y: springY }}
        className="block relative aspect-video rounded-2xl border-2 border-[var(--border)] overflow-hidden group-hover:border-[var(--accent)]/60 transition-colors duration-500 shadow-pro bg-gradient-to-br from-[var(--background-light)] to-[var(--background-lighter)]"
      >
        {!imageError ? (
          <>
            <Image
              src={src}
              alt={alt}
              fill
              className={`object-cover transition-all duration-700 ${imageLoaded ? 'opacity-80 group-hover:opacity-100 scale-100 group-hover:scale-105' : 'opacity-0 scale-110'}`}
              onError={() => setImageError(true)}
              onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-[var(--background-light)]">
                <div className="w-10 h-10 border-2 border-[var(--accent)]/30 border-t-[var(--accent)] rounded-full animate-spin"></div>
              </div>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[var(--background-light)] to-[var(--background-lighter)]">
            <div className="text-center">
              <div className="text-6xl mb-4 opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500">🖥️</div>
              <p className="text-sm text-[var(--foreground-dim)] font-mono mb-2">{alt}</p>
              <p className="text-xs text-[var(--foreground-dim)]/70 font-mono">Click to view live site</p>
            </div>
          </div>
        )}
        
        {/* Luxury Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-60"></div>
        
        {/* Interactive View Badge */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="bg-[var(--accent)] text-[var(--background)] px-4 py-2 rounded-full text-xs font-bold font-mono shadow-glow flex items-center gap-2">
            <span>LIVE DEMO</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </div>
        </div>
      </motion.a>
    );
  };

  return (
    <section id="projects" className="relative bg-[var(--background)] text-[var(--foreground)] py-24 md:py-40 px-6 md:px-12 overflow-hidden spotlight-area">
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent)]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div 
        className="md:ml-64 max-w-6xl relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-24">
          <div className="flex flex-col">
            <span className="text-[var(--accent)] font-mono text-sm mb-2 tracking-[0.2em] uppercase">Showcase</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--foreground)] whitespace-nowrap tracking-tight">
              Selected <span className="gradient-text">Works</span>
            </h2>
          </div>
          <div className="h-px bg-gradient-to-r from-[var(--border)] via-[var(--accent)]/40 to-transparent flex-1 mt-8"></div>
        </div>
        
        {/* Projects List */}
        <div className="space-y-40">
          {isLoading ? (
            <ProjectSkeleton />
          ) : projects.length === 0 ? (
            <div className="text-center py-20 glass rounded-3xl">
              <p className="text-[var(--foreground-dim)] text-xl font-mono">Exploring new ideas...</p>
            </div>
          ) : (
            projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
                  
                  {/* Project Image Container */}
                  <div className="w-full lg:w-3/5 relative">
                    <ProjectImage src={project.image} alt={project.imageAlt} link={project.link} />
                    
                    {/* Floating Tech Stack - Designer Touch */}
                    <div className={`absolute -bottom-6 ${index % 2 === 1 ? '-left-6' : '-right-6'} hidden xl:flex flex-col gap-2 z-20`}>
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: index % 2 === 1 ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + (i * 0.1) }}
                          className="glass px-4 py-2 rounded-lg text-[var(--accent)] text-xs font-mono font-bold shadow-xl border-l-2 border-l-[var(--accent)]"
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="w-full lg:w-2/5 flex flex-col space-y-8">
                    <div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-4 group-hover:text-[var(--accent)] transition-colors duration-500 tracking-tight">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          {project.title}
                        </a>
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-[var(--accent)]"></span>
                        <p className="text-xs text-[var(--accent)] font-mono uppercase tracking-[0.2em]">{project.role}</p>
                      </div>
                    </div>
                    
                    <div className="glass rounded-2xl p-6 md:p-8 border border-[var(--glass-border)] shadow-pro space-y-6">
                      <div>
                        <span className="text-[var(--accent)] font-bold mb-3 block uppercase text-xs tracking-widest font-mono">Project Overview</span>
                        <p className="text-[var(--foreground-dim)] leading-relaxed text-base">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="pt-4 border-t border-[var(--border)]">
                        <span className="text-[var(--accent)] font-bold mb-3 block uppercase text-xs tracking-widest font-mono">Technical Impact & Skills Demonstrated</span>
                        <p className="text-[var(--foreground-dim)] leading-relaxed text-base">
                          {project.impact}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-[var(--accent)] text-[var(--background)] px-8 py-4 rounded-full text-sm font-bold font-mono shadow-glow flex items-center gap-3 group/btn"
                      >
                        <span>Launch App</span>
                        <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </motion.a>
                      
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -4 }}
                          whileTap={{ scale: 0.98 }}
                          className="glass text-[var(--foreground)] px-8 py-4 rounded-full text-sm font-bold font-mono flex items-center gap-3 hover:bg-[var(--accent)]/10 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                          <span>Code</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>
    </section>
  );
}
