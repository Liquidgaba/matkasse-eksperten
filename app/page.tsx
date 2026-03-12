import type { Metadata } from "next";
import Link from "next/link";
import MatkasseCard from "@/components/MatkasseCard";
import ComparisonTable from "@/components/ComparisonTable";
import { matkasser } from "@/lib/matkasser";
import { ChevronRight, RefreshCw, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Beste matkasse – Uavhengig test og sammenligning",
  description: "Vi har testet HelloFresh, Godtlevert og Adams over tre måneder. Her er vår ærlige rangering av de beste matkassene – etter pris, smak og fleksibilitet.",
  keywords: ["beste matkasse", "matkasse test", "matkasse sammenligning", "hellofresh test", "godtlevert test"],
  alternates: { canonical: "https://matkasse-eksperten.no" },
  openGraph: {
    title: "Beste matkasse – uavhengig test",
    description: "Vi testet alle de store matkassene. Her er dommen.",
    locale: "nb_NO",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://matkasse-eksperten.no/#website",
      url: "https://matkasse-eksperten.no",
      name: "Matkasseeksperten",
      inLanguage: "nb-NO",
      description: "Uavhengige tester av matkasser",
    },
    {
      "@type": "ItemList",
      name: "Beste matkasse",
      itemListElement: matkasser.map((m, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: m.navn,
        url: `https://matkasse-eksperten.no/matkasse/${m.slug}`,
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="bg-white" style={{ borderBottom: "1px solid var(--color-cream-border)" }}>
        <div className="max-w-5xl mx-auto px-5 py-14 md:py-20">

          {/* Trust-piller */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="trust-pill"><RefreshCw size={11} /> Oppdatert mars 2026</span>
            <span className="trust-pill" style={{ borderColor: "rgba(45,106,79,0.3)", color: "var(--color-sage)" }}>
              <ShieldCheck size={11} /> Uavhengig redaksjon
            </span>
            <span className="trust-pill" style={{ borderColor: "rgba(192,86,33,0.3)", color: "var(--color-terra)" }}>
              🔥 4 032 nordmenn leste dette
            </span>
          </div>

          {/* Todelt grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-5">
                Beste matkasse –<br />
                <em style={{ fontStyle: "italic", color: "var(--color-terra)" }}>vi testet alle</em>
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--color-muted)" }}>
                Vi bestilte, lagde og smakte oss gjennom seks av de største matkassene over tre måneder. Her er den ærlige dommen – etter pris, utvalg, fleksibilitet og faktisk smak på maten.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <a href="#rangering" className="btn-primary">
                  Se rangering <ArrowRight size={16} />
                </a>
                <Link href="/guide/velg-matkasse" className="btn-outline">
                  Finn din matkasse
                </Link>
              </div>

              {/* Ministatistikk */}
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[
                  { n: "6", l: "matkasser testet" },
                  { n: "40+", l: "måltider laget" },
                  { n: "3 mnd", l: "testperiode" },
                ].map(({ n, l }) => (
                  <div key={l}>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.75rem", fontWeight: 700, color: "var(--color-terra)", lineHeight: 1 }}>{n}</div>
                    <div className="text-sm mt-0.5" style={{ color: "var(--color-muted)" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero-bilde — Fjordkraft-stil: rundkortet container */}
            <div className="rounded-3xl overflow-hidden shadow-xl relative aspect-[4/3]" style={{ backgroundColor: "var(--color-cream-dark)" }}>
              <img
                src="https://images.unsplash.com/photo-1543353071-087092ec393a?w=900&q=85&fit=crop"
                alt="Ferske ingredienser klar til matlaging"
                className="w-full h-full object-cover"
              />
              {/* Floating kort — Byggstart-stil */}
              <div className="absolute bottom-5 left-5 bg-white rounded-2xl shadow-lg px-4 py-3 text-sm" style={{ border: "1px solid var(--color-cream-border)" }}>
                <div className="font-semibold" style={{ fontFamily: "var(--font-serif)", color: "var(--color-espresso)" }}>HelloFresh</div>
                <div className="flex items-center gap-1 mt-0.5">
                  {[1,2,3,4,5].map(i => <svg key={i} width="12" height="12" viewBox="0 0 20 20" fill="var(--color-terra)"><path d="M10 1l2.4 4.9 5.3.8-3.8 3.7.9 5.3L10 13.3l-4.8 2.5.9-5.3L2.3 6.7l5.3-.8L10 1z"/></svg>)}
                  <span className="text-xs ml-1" style={{ color: "var(--color-muted)" }}>4,6 · Testvinner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ QUICKNAV ═══════════════ */}
      <nav className="bg-white sticky top-[68px] z-40" style={{ borderBottom: "1px solid var(--color-cream-border)" }}>
        <div className="max-w-5xl mx-auto px-5 py-2.5 flex gap-2 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {matkasser.map((m, i) => (
            <a
              key={m.slug}
              href={`#${m.slug}`}
              className="text-sm whitespace-nowrap font-medium transition-colors px-4 py-1.5 rounded-full"
              style={{ border: "1px solid var(--color-cream-border)", color: "var(--color-text)", backgroundColor: "var(--color-cream)" }}
            >
              #{i + 1} {m.navn}
              {m.badge === "best" && " 🏆"}
            </a>
          ))}
        </div>
      </nav>

      {/* ═══════════════ RANGERING ═══════════════ */}
      <section id="rangering" className="max-w-5xl mx-auto px-5 py-14">
        <div className="mb-8">
          <h2 className="mb-2">Rangert: beste matkasse</h2>
          <p style={{ color: "var(--color-muted)" }}>Rangert etter pris, utvalg, fleksibilitet og råvarekvalitet. Oppdatert månedlig.</p>
        </div>

        <div className="flex flex-col gap-6">
          {matkasser.map((m, i) => (
            <div id={m.slug} key={m.slug} className="scroll-mt-32">
              <MatkasseCard m={m} rank={i + 1} />
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ SAMMENLIGNSTABELL ═══════════════ */}
      <section id="sammenlign" className="max-w-5xl mx-auto px-5 pb-14 scroll-mt-24">
        <h2 className="mb-6">Sammenlign alle</h2>
        <ComparisonTable matkasser={matkasser} />
      </section>

      {/* ═══════════════ TRUST-SEKSJON ═══════════════ */}
      <section style={{ backgroundColor: "var(--color-espresso)", color: "white" }}>
        <div className="max-w-5xl mx-auto px-5 py-14 grid md:grid-cols-3 gap-8 text-center">
          {[
            { icon: "🔍", t: "Testet av ekte mennesker", d: "Vi kjøper og bruker kassene selv. Ingen gratis prøver fra leverandørene." },
            { icon: "🚫", t: "Ingen betalt plassering", d: "Rangeringen styres av testresultater, ikke provisjon." },
            { icon: "📅", t: "Oppdateres månedlig", d: "Priser og tilbud endres. Vi sjekker og oppdaterer siden jevnlig." },
          ].map(({ icon, t, d }) => (
            <div key={t}>
              <div className="text-3xl mb-3">{icon}</div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "1.1rem", color: "white", marginBottom: "0.5rem" }}>{t}</h3>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ GUIDE CTA ═══════════════ */}
      <section className="max-w-5xl mx-auto px-5 py-14">
        <div className="rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between" style={{ backgroundColor: "var(--color-cream-dark)", border: "1px solid var(--color-cream-border)" }}>
          <div>
            <h2 className="text-2xl mb-2">Ikke sikker på hvilken du skal velge?</h2>
            <p style={{ color: "var(--color-muted)" }} className="max-w-md text-sm">Bruk vår guide – svar på fire spørsmål og finn matkassen som passer deg best.</p>
          </div>
          <Link href="/guide/velg-matkasse" className="btn-outline whitespace-nowrap">
            Ta guiden <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* Disclosure */}
      <div className="max-w-5xl mx-auto px-5 pb-10">
        <p className="text-xs rounded-2xl p-5" style={{ color: "var(--color-muted)", backgroundColor: "var(--color-cream)", border: "1px solid var(--color-cream-border)" }}>
          <strong style={{ color: "var(--color-espresso)" }}>Om affiliatelenker:</strong> Noen lenker på denne siden er affiliatelenker. Hvis du kjøper via en slik lenke mottar vi en liten provisjon – uten ekstra kostnad for deg. Dette påvirker ikke rangeringen vår.
        </p>
      </div>
    </>
  );
}
