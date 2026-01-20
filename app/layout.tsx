import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Richard Effah Yeboah | Computer Science Student & Software Developer | Seeking Summer 2026 Research",
  description: "Richard Effah Yeboah - Computer Science student (4.0 GPA) at Grambling State University seeking Summer 2026 undergraduate research opportunities in quantum information science, algorithms, machine learning, and computer science. Full-stack developer with experience in React, Next.js, Python, Flask, and PostgreSQL. Available for research positions.",
  keywords: "undergraduate research, summer research 2026, quantum computing research, computer science student, research assistant, algorithms research, machine learning research, quantum information science, computer science research opportunities, international student research",
  authors: [{ name: "Richard Effah Yeboah" }],
  creator: "Richard Effah Yeboah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://richardeffahyeboah.vercel.app",
    siteName: "Richard Effah Yeboah Portfolio",
    title: "Richard Effah Yeboah | CS Student Seeking Summer 2026 Research",
    description: "Computer Science student (4.0 GPA) at Grambling State University seeking Summer 2026 undergraduate research opportunities. Full-stack developer with production experience.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Richard Effah Yeboah | CS Student Seeking Summer 2026 Research",
    description: "Computer Science student (4.0 GPA) seeking Summer 2026 undergraduate research opportunities in quantum computing, algorithms, and ML.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Richard Effah Yeboah",
  url: "https://richardeffahyeboah.vercel.app",
  email: "kkras5050@gmail.com",
  telephone: "+1-614-290-4260",
  jobTitle: "Computer Science Student & Software Developer",
  description: "Computer Science student (4.0 GPA) at Grambling State University seeking Summer 2026 undergraduate research opportunities in quantum information science, algorithms, and machine learning.",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Grambling State University",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Grambling",
      addressRegion: "LA",
      addressCountry: "USA"
    }
  },
  knowsAbout: [
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Flask",
    "PostgreSQL",
    "Full-Stack Development",
    "Quantum Computing",
    "Machine Learning",
    "Algorithms",
    "Data Structures"
  ],
  sameAs: [
    "https://github.com/t4thick",
    "https://linkedin.com/in/richard-effah-yeboah-621851254"
  ],
  seeks: {
    "@type": "Demand",
    description: "Summer 2026 Undergraduate Research Opportunity in Computer Science, Quantum Information Science, Algorithms, or Machine Learning"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
