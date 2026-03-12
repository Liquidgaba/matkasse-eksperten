
"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-cream-dark)", borderTop: "1px solid var(--color-cream-border)" }}>
      <div className="max-w-5xl mx-auto px-5 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">🥘</span>
            <span style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "1.1rem", color: "var(--color-espresso)" }}>
              Matkasse<span style={{ color: "var(--color-terra)" }}>eksperten</span>
            </span>
          </div>
          <p className="text-sm" style={{ color: "var(--color-muted)" }}>
            Uavhengige tester og sammenligninger av matkasser.
          </p>
        </div>

        {[
          { title: "Tester", links: [
            { href: "/matkasse/hellofresh", label: "HelloFresh test" },
            { href: "/matkasse/godtlevert", label: "Godtlevert test" },
            { href: "/matkasse/adams-matkasse", label: "Adams Matkasse test" },
          ]},
          { title: "Guider", links: [
            { href: "/beste-matkasse", label: "Beste matkasse" },
            { href: "/guide/velg-matkasse", label: "Velg riktig matkasse" },
            { href: "/sammenlign", label: "Sammenlign alle" },
          ]},
          { title: "Om oss", links: [
            { href: "/om-oss", label: "Om oss" },
            { href: "/personvern", label: "Personvern" },
            { href: "/kontakt", label: "Kontakt" },
          ]},
        ].map(({ title, links }) => (
          <div key={title}>
            <h4 className="font-semibold mb-3 text-xs uppercase tracking-wide" style={{ color: "var(--color-muted)" }}>{title}</h4>
            <ul className="space-y-2">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm transition-colors" style={{ color: "var(--color-text)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--color-terra)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text)")}
                  >{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between text-xs" style={{ borderTop: "1px solid var(--color-cream-border)", color: "var(--color-muted)" }}>
        <span>© {new Date().getFullYear()} Matkasseeksperten</span>
        <span>Inneholder affiliatelenker</span>
      </div>
    </footer>
  );
}
