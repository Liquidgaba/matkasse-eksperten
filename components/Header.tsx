"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/beste-matkasse", label: "Beste matkasse" },
  { href: "/matkasse-test", label: "Tester" },
  { href: "/sammenlign", label: "Sammenlign" },
  { href: "/guide", label: "Guider" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white border-b sticky top-0 z-50" style={{ borderColor: "var(--color-cream-border)" }}>
      <div className="max-w-5xl mx-auto px-5 h-[68px] flex items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <span className="text-xl">🥘</span>
          <span style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "1.2rem", color: "var(--color-espresso)" }}>
            Matkasse<span style={{ color: "var(--color-terra)" }}>eksperten</span>
          </span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium transition-colors"
              style={{ color: "var(--color-muted)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-terra)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--color-muted)")}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <Link href="/beste-matkasse" className="btn-primary hidden md:inline-flex text-sm py-2.5 px-5">
          Se topplistene
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "var(--color-espresso)" }}
          onClick={() => setOpen(!open)}
          aria-label="Meny"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobil meny */}
      {open && (
        <div className="md:hidden bg-white border-t px-5 py-5 flex flex-col gap-4" style={{ borderColor: "var(--color-cream-border)" }}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-base font-medium"
              style={{ color: "var(--color-text)" }}
            >
              {label}
            </Link>
          ))}
          <Link href="/beste-matkasse" onClick={() => setOpen(false)} className="btn-primary justify-center mt-2">
            Se topplistene
          </Link>
        </div>
      )}
    </header>
  );
}
