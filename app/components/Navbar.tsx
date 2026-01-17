import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white text-[var(--foreground)] p-4 shadow-sm border-b border-gray-200">
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        
        {/* LEFT SIDE - Your Name */}
        <Link href="#home" className="font-bold text-lg text-[var(--accent)]">
          Richard Effah Yeboah
        </Link>

        {/* RIGHT SIDE - Navigation Links */}
        <div className="flex gap-8">
          <Link href="#about" className="hover:text-[var(--accent)] transition">
            About
          </Link>
          <Link href="#projects" className="hover:text-[var(--accent)] transition">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-[var(--accent)] transition">
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
}
