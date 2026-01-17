'use client';

import { motion } from 'framer-motion';

export function ProjectSkeleton() {
  return (
    <div className="space-y-40">
      {[1, 2].map((index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="group relative"
        >
          <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
            {/* Image Skeleton */}
            <div className="w-full lg:w-3/5 relative">
              <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-[var(--background-light)] to-[var(--background-lighter)] border-2 border-[var(--border)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--accent)]/10 to-transparent animate-shimmer"></div>
              </div>
            </div>

            {/* Content Skeleton */}
            <div className="w-full lg:w-2/5 flex flex-col space-y-8">
              <div className="space-y-4">
                <div className="h-12 bg-[var(--background-light)] rounded-lg w-3/4 animate-pulse"></div>
                <div className="h-4 bg-[var(--background-light)] rounded w-1/2 animate-pulse"></div>
              </div>
              
              <div className="space-y-3">
                <div className="h-4 bg-[var(--background-light)] rounded w-full animate-pulse"></div>
                <div className="h-4 bg-[var(--background-light)] rounded w-5/6 animate-pulse"></div>
                <div className="h-4 bg-[var(--background-light)] rounded w-4/6 animate-pulse"></div>
              </div>

              <div className="glass rounded-2xl p-6 border border-[var(--glass-border)]">
                <div className="space-y-3">
                  <div className="h-3 bg-[var(--background-light)] rounded w-1/3 animate-pulse"></div>
                  <div className="h-4 bg-[var(--background-light)] rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-[var(--background-light)] rounded w-5/6 animate-pulse"></div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <div className="h-12 bg-[var(--background-light)] rounded-full w-32 animate-pulse"></div>
                <div className="h-12 bg-[var(--background-light)] rounded-full w-24 animate-pulse"></div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function BlogSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map((index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="glass rounded-2xl overflow-hidden border border-[var(--glass-border)] group"
        >
          {/* Image Skeleton */}
          <div className="relative aspect-video bg-gradient-to-br from-[var(--background-light)] to-[var(--background-lighter)]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--accent)]/10 to-transparent animate-shimmer"></div>
          </div>
          
          {/* Content Skeleton */}
          <div className="p-6 space-y-4">
            <div className="h-3 bg-[var(--background-light)] rounded w-1/4 animate-pulse"></div>
            <div className="h-6 bg-[var(--background-light)] rounded w-full animate-pulse"></div>
            <div className="h-4 bg-[var(--background-light)] rounded w-full animate-pulse"></div>
            <div className="h-4 bg-[var(--background-light)] rounded w-3/4 animate-pulse"></div>
            <div className="flex items-center gap-2 pt-4">
              <div className="h-4 bg-[var(--background-light)] rounded w-20 animate-pulse"></div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
