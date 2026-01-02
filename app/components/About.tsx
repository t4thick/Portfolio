'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="bg-[var(--background)] text-[var(--foreground)] py-20 md:py-32 px-6 md:px-12">
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
            <span className="text-[var(--accent)] font-mono text-xl">01.</span> About Me
          </h2>
          <div className="h-px bg-[var(--border)] flex-1"></div>
        </div>
        
        {/* Content */}
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-start">
          <div className="space-y-5 text-[var(--foreground-dim)] text-base md:text-lg leading-relaxed">
            <p>
              Hello! I'm Richard, a software developer based in the US, passionate about creating
              exceptional digital experiences for the web.
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
              , where I'm developing a strong foundation in software engineering and problem-solving.
            </p>
            <p>
              I've had the privilege of working on projects ranging from{" "}
              <a 
                href="https://item7-food-truck.onrender.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--accent)] link-underline font-medium inline-block"
              >
                full-stack web applications
              </a>
              {" "}to{" "}
              <a 
                href="https://lovelyqueenmart.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--accent)] link-underline font-medium inline-block"
              >
                e-commerce platforms
              </a>
              . My goal is to always build products that are both functional and beautifully designed.
            </p>
            <p>
              I'm eager to take on new challenges, collaborate with others, and continue growing as a developer.
            </p>
          </div>

          {/* Image placeholder or skills highlight */}
          <div className="relative group">
            <div className="relative w-full max-w-[280px] mx-auto md:mx-0">
              {/* Decorative border */}
              <div className="absolute inset-0 border-2 border-[var(--accent)] rounded-lg translate-x-4 translate-y-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-5 group-hover:translate-y-5 transition-all duration-300 -z-10"></div>
              {/* Main container */}
              <div className="relative bg-[var(--background-light)] rounded-lg border-2 border-[var(--accent)]/30 p-8 aspect-square flex items-center justify-center group-hover:border-[var(--accent)]/60 transition-all duration-300 card-hover">
                <div className="text-center">
                  <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">👨‍💻</div>
                  <p className="text-sm text-[var(--foreground-dim)] font-mono">Profile Photo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
