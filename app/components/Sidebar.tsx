'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'blog', 'research', 'contact'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(section);
            }
          },
          {
            threshold: 0.3,
            rootMargin: '-20% 0px -35% 0px',
          }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home', number: '00.' },
    { id: 'about', label: 'About', number: '01.' },
    { id: 'experience', label: 'Experience', number: '02.' },
    { id: 'projects', label: 'Projects', number: '03.' },
    { id: 'skills', label: 'Skills', number: '04.' },
    { id: 'education', label: 'Education', number: '05.' },
    { id: 'blog', label: 'Blog', number: '06.' },
    { id: 'research', label: 'Research', number: '07.' },
    { id: 'contact', label: 'Contact', number: '08.' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-6 left-6 z-50 md:hidden bg-[var(--background-light)]/80 backdrop-blur-sm border border-[var(--border)] p-3 rounded hover:bg-[var(--background-lighter)] transition"
        aria-label="Toggle menu"
      >
        <svg
          className="w-5 h-5 text-[var(--foreground)]"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMobileMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-[var(--background)]/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-[var(--background)]/50 backdrop-blur-sm border-r border-[var(--border)] p-8 flex flex-col justify-between z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        
        {/* Top Section */}
        <div>
          {/* Name/Branding */}
          <div className="mb-16">
            <a href="#hero" className="group block">
              <motion.h1 
                className="text-xl font-bold text-[var(--foreground)] mb-1 group-hover:text-[var(--accent)] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                REY
              </motion.h1>
              <p className="text-xs text-[var(--foreground-dim)] font-mono group-hover:text-[var(--accent)]/70 transition-colors duration-300">
                Developer
              </p>
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                onClick={handleNavClick}
                className={`flex items-center gap-3 py-2 px-3 rounded font-mono text-sm transition-all group ${
                  activeSection === item.id
                    ? 'text-[var(--accent)] bg-[var(--background-light)]'
                    : 'text-[var(--foreground-dim)] hover:text-[var(--accent)] hover:bg-[var(--background-light)]/50'
                }`}
              >
                <span className="text-[var(--accent)] text-xs">{item.number}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Mid Section - Resume Quick Link */}
        <div className="hidden md:block">
          <a 
            href="/docs/resume.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[var(--accent)] font-mono text-xs border border-[var(--accent)] py-2 px-4 rounded hover:bg-[var(--accent)]/10 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(100,255,218,0.2)] mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
        </div>

        {/* Bottom Section - Social Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/t4thick"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--foreground-dim)] hover:text-[var(--accent)] transition-all hover:scale-110"
            aria-label="GitHub Profile"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/richard-effah-yeboah-621851254"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--foreground-dim)] hover:text-[var(--accent)] transition-all hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="mailto:kkras5050@gmail.com"
            className="text-[var(--foreground-dim)] hover:text-[var(--accent)] transition-all hover:scale-110"
            aria-label="Email"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </aside>
    </>
  );
}
