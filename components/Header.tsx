"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-brand-beige-dark sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl">🥘</span>
          <span className="font-bold text-brand-charcoal text-lg">
            Matkasse<span className="text-brand-terra">Eksperten</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-brand-muted">
          <Link href="/beste-matkasse" className="hover:text-brand-terra transition-colors">Beste matkasse</Link>
          <Link href="/matkasse-test" className="hover:text-brand-terra transition-colors">Tester</Link>
          <Link href="/sammenlign" className="hover:text-brand-terra transition-colors">Sammenlign</Link>
          <Link href="/guide" className="hover:text-brand-terra transition-colors">Guide</Link>
        </nav>

        <button
          className="md:hidden p-2 text-brand-charcoal"
          onClick={() => setOpen(!open)}
          aria-label="Meny"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-brand-beige-dark px-4 py-4 flex flex-col gap-4 text-sm font-medium">
          <Link href="/beste-matkasse" onClick={() => setOpen(false)} className="text-brand-charcoal">Beste matkasse</Link>
          <Link href="/matkasse-test" onClick={() => setOpen(false)} className="text-brand-charcoal">Tester</Link>
          <Link href="/sammenlign" onClick={() => setOpen(false)} className="text-brand-charcoal">Sammenlign</Link>
          <Link href="/guide" onClick={() => setOpen(false)} className="text-brand-charcoal">Guide</Link>
        </div>
      )}
    </header>
  );
}
