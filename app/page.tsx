import type { Metadata } from "next";
import Link from "next/link";
import MatkasseCard from "@/components/MatkasseCard";
import { matkasser } from "@/lib/matkasser";
import { ChevronRight, Clock, RefreshCw, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Beste matkasse 2026 – Vi testet alle de store",
  description:
    "Vi har testet HelloFresh, Godtlevert, Adams og flere. Her er vår ærlige rangering av Norges beste matkasser – etter pris, smak og fleksibilitet.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Matkasse-Eksperten",
  url: "https://matkasse-eksperten.no",
  description: "Uavhengige tester og sammenligninger av norske matkasser",
  publisher: {
    "@type": "Organization",
    name: "Matkasse-Eksperten",
    url: "https://matkasse-eksperten.no",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-white border-b border-brand-beige-dark">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-2 text-sm text-brand-muted mb-4">
            <RefreshCw size={13} />
            <span>Sist oppdatert: mars 2026</span>
            <span className="text-brand-beige-dark">·</span>
            <ShieldCheck size={13} className="text-brand-sage" />
            <span>Uavhengig redaksjon</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-charcoal mb-4 leading-tight">
            Beste matkasse 2026<br />
            <span className="text-brand-terra">– vi testet alle de store</span>
          </h1>
          <p className="text-xl text-brand-muted max-w-2xl mb-8">
            Vi har bestilt, laget og smakt oss gjennom seks av de største matkassene i Norge. Her er den ærlige dommen – etter pris, utvalg, fleksibilitet og faktisk smak på maten.
          </p>

          {/* Trust bar */}
          <div className="flex flex-wrap gap-6 text-sm text-brand-charcoal">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-brand-terra">6</span>
              <span className="text-brand-muted">matkasser testet</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-brand-terra">40+</span>
              <span className="text-brand-muted">måltider laget</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-brand-terra">3 mnd</span>
              <span className="text-brand-muted">testperiode</span>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-1 text-xs text-brand-muted">
        <Link href="/" className="hover:text-brand-terra">Hjem</Link>
        <ChevronRight size={12} />
        <span className="text-brand-charcoal">Beste matkasse</span>
      </div>

      {/* Quickjump */}
      <section className="max-w-5xl mx-auto px-4 mb-8">
        <div className="bg-brand-beige-dark/50 rounded-xl p-4">
          <p className="text-sm font-semibold text-brand-charcoal mb-3">Hopp direkte til:</p>
          <div className="flex flex-wrap gap-2">
            {matkasser.map((m) => (
              <a
                key={m.slug}
                href={`#${m.slug}`}
                className="text-sm bg-white border border-brand-beige-dark text-brand-charcoal px-3 py-1.5 rounded-lg hover:border-brand-terra hover:text-brand-terra transition-colors"
              >
                {m.navn}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Matkasse cards */}
      <section className="max-w-5xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-brand-charcoal mb-6">
          Rangert: de beste matkassene i Norge
        </h2>
        <div className="flex flex-col gap-6">
          {matkasser.map((m, i) => (
            <div id={m.slug} key={m.slug}>
              <MatkasseCard m={m} rank={i + 1} />
            </div>
          ))}
        </div>
      </section>

      {/* Guide teaser */}
      <section className="bg-white border-t border-brand-beige-dark">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-3">Ikke sikker på hvilken du skal velge?</h2>
          <p className="text-brand-muted mb-6 max-w-xl">
            Vi har laget en enkel guide som hjelper deg å finne riktig matkasse basert på husholdningsstørrelse, budsjett og matpreferanser.
          </p>
          <Link href="/guide/velg-matkasse" className="btn-secondary">
            Gå til guiden <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* Affiliate disclosure */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        <p className="text-xs text-brand-muted bg-brand-beige-dark/40 rounded-lg p-4">
          <strong>Redaksjonell uavhengighet:</strong> Matkasse-Eksperten tester matkasser uavhengig. Noen lenker på siden er affiliatelenker – om du kjøper gjennom en slik lenke, mottar vi en liten provisjon uten ekstra kostnad for deg. Dette påvirker ikke rangeringen vår.
        </p>
      </div>
    </>
  );
}
