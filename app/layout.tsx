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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
