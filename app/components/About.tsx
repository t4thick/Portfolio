'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="relative bg-[var(--background)] text-[var(--foreground)] py-20 md:py-32 px-6 md:px-12 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent)] rounded-full blur-3xl opacity-5 pointer-events-none"></div>
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
            <span className="text-[var(--accent)] font-mono text-xl md:text-2xl">01.</span> About Me
          </h2>
          <div className="h-px bg-gradient-to-r from-[var(--border)] via-[var(--accent)]/30 to-transparent flex-1"></div>
        </div>
        
        {/* Content */}
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 md:gap-16 items-start">
          <div className="space-y-6 text-[var(--foreground-dim)] text-base md:text-lg leading-relaxed">
            <p>
              Hello! I'm Richard, a software developer based in the US. I build web applications 
              and work on projects from frontend to backend.
            </p>
            <p>
              I'm a Computer Science student at{" "}
              <a 
                href="https://www.gram.edu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--accent)] link-underline font-medium inline-block"
              >
                Grambling State University
              </a>
              {" "}with a 4.0 GPA, currently learning software engineering, data structures, and full-stack development. 
              I'm actively seeking <span className="text-[var(--accent)] font-semibold">Summer 2026 undergraduate research opportunities</span> 
              in quantum information science, algorithms, machine learning, and related fields.
            </p>
            <p>
              I've worked on projects like{" "}
              <a 
                href="https://foodtruckk.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--accent)] link-underline font-medium inline-block"
              >
                full-stack web applications
              </a>
              {" "}and{" "}
              <a 
                href="https://lovelyqueenmart.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--accent)] link-underline font-medium inline-block"
              >
                e-commerce platforms
              </a>
              . I focus on building clean, functional code and learning new technologies.
            </p>
            <div className="mt-8 p-6 glass rounded-xl border-l-4 border-l-[var(--accent)] relative overflow-hidden group/fact">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--accent)]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl group-hover/fact:bg-[var(--accent)]/10 transition-colors duration-300"></div>
              <p className="text-[var(--foreground-dim)] italic text-sm md:text-base relative z-10 leading-relaxed">
                <span className="text-[var(--accent)] font-bold not-italic font-mono uppercase tracking-widest text-xs block mb-2">Fun fact</span> 
                When I'm not coding, I'm usually in the kitchen trying out new recipes. 
                Cooking and coding are similar—both need patience, attention to detail, 
                and fixing things when they don't work out! 🍳
              </p>
            </div>

            {/* Quick Skills List */}
            <div className="mt-10">
              <p className="text-sm font-mono text-[var(--accent)] mb-4 tracking-widest uppercase">Technologies I've been working with:</p>
              <ul className="grid grid-cols-2 gap-2 text-sm font-mono text-[var(--foreground-dim)]">
                {["Next.js", "TypeScript", "Python (Flask)", "PostgreSQL", "Tailwind CSS", "Framer Motion"].map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 group/item">
                    <span className="text-[var(--accent)] group-hover/item:translate-x-1 transition-transform">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="relative group">
            <div className="relative w-full max-w-[280px] mx-auto md:mx-0">
              {/* Decorative border */}
              <div className="absolute inset-0 border-2 border-[var(--accent)] rounded-lg translate-x-4 translate-y-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-5 group-hover:translate-y-5 transition-all duration-300 -z-10"></div>
              {/* Main container */}
              <div className="relative bg-[var(--background-light)] rounded-lg border-2 border-[var(--accent)]/30 overflow-hidden group-hover:border-[var(--accent)]/60 transition-all duration-300 card-hover">
                <div className="relative aspect-square">
                  <Image
                    src="/images/profile-photo.jpeg"
                    alt="Richard Effah Yeboah"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
