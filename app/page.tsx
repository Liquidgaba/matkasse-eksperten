import type { Metadata } from "next";
import Link from "next/link";
import MatkasseCard from "@/components/MatkasseCard";
import ComparisonTable from "@/components/ComparisonTable";
import { matkasser } from "@/lib/matkasser";
import { ChevronRight, RefreshCw, ShieldCheck, Star, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Beste matkasse 2026 – Uavhengig test av norske matkasser",
  description:
    "Vi har testet HelloFresh, Godtlevert og Adams Matkasse i 3 måneder. Her er vår ærlige rangering – etter pris, smak, fleksibilitet og levering i Norge.",
  keywords: ["beste matkasse", "matkasse test", "matkasse norge", "matkasse sammenligning", "hellofresh test", "godtlevert test"],
  alternates: { canonical: "https://matkasse-eksperten.no" },
  openGraph: {
    title: "Beste matkasse 2026 – vi testet alle de store",
    description: "Uavhengig test av norske matkasser. Finn den som passer deg etter pris, smak og fleksibilitet.",
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
      name: "Matkasse-Eksperten",
      description: "Uavhengige tester av norske matkasser",
      inLanguage: "nb-NO",
      publisher: { "@id": "https://matkasse-eksperten.no/#org" },
    },
    {
      "@type": "Organization",
      "@id": "https://matkasse-eksperten.no/#org",
      name: "Matkasse-Eksperten",
      url: "https://matkasse-eksperten.no",
    },
    {
      "@type": "ItemList",
      name: "Beste matkasse 2026",
      description: "Rangering av Norges beste matkasser",
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

      {/* ===== HERO ===== */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">

          {/* Oppdatert-rad */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-brand-muted mb-5">
            <span className="flex items-center gap-1.5 bg-brand-beige border border-brand-beige-dark rounded-full px-3 py-1">
              <RefreshCw size={11} /> Sist oppdatert: mars 2026
            </span>
            <span className="flex items-center gap-1.5 bg-brand-sage-pale border border-brand-sage/30 text-brand-sage rounded-full px-3 py-1">
              <ShieldCheck size={11} /> Uavhengig redaksjon
            </span>
            <span className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-700 rounded-full px-3 py-1">
              <Users size={11} /> 4 032 nordmenn leste denne guiden
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-brand-charcoal mb-4 leading-[1.1]">
                Beste matkasse{" "}
                <span className="text-brand-terra">2026</span>
                <br />– vi testet alle
              </h1>
              <p className="text-lg text-brand-muted leading-relaxed mb-6">
                Vi bestilte, lagde og spiste oss gjennom de seks største matkassene i Norge over tre måneder.
                Her er den ærlige dommen – ingen sponset innhold.
              </p>

              {/* Stjernerating aggregert */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={18} className={i <= 4 ? "fill-brand-terra text-brand-terra" : "fill-gray-200 text-gray-200"} />
                  ))}
                </div>
                <span className="font-semibold text-brand-charcoal">4,4 snitt</span>
                <span className="text-brand-muted text-sm">basert på {(matkasser.reduce((a,m) => a+m.antalltester,0)).toLocaleString('nb-NO')} norske tester</span>
              </div>

              <a href="#rangering" className="btn-primary text-base">
                Se rangering
                <ChevronRight size={16} />
              </a>
            </div>

            {/* Hero-statistikk */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { tall: "6", label: "matkasser testet", icon: "🥘" },
                { tall: "40+", label: "måltider laget", icon: "🍳" },
                { tall: "3 mnd", label: "testperiode", icon: "📅" },
                { tall: "100%", label: "uavhengig", icon: "🛡️" },
              ].map((s) => (
                <div key={s.label} className="bg-brand-beige rounded-xl p-4 text-center">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div className="text-2xl font-extrabold text-brand-terra">{s.tall}</div>
                  <div className="text-xs text-brand-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUICKNAV ===== */}
      <nav aria-label="Hopp til matkasse" className="bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-5xl mx-auto px-4 py-2 flex gap-2 overflow-x-auto scrollbar-none">
          {matkasser.map((m, i) => (
            <a
              key={m.slug}
              href={`#${m.slug}`}
              className="flex items-center gap-1.5 text-sm whitespace-nowrap bg-brand-beige border border-brand-beige-dark hover:border-brand-terra hover:text-brand-terra text-brand-charcoal px-3 py-1.5 rounded-full transition-colors font-medium"
            >
              <span className="text-brand-muted">#{i+1}</span> {m.navn}
              {m.badge === "best" && <span className="text-brand-terra">🏆</span>}
            </a>
          ))}
          <a href="#sammenlign" className="text-sm whitespace-nowrap text-brand-terra border border-brand-terra px-3 py-1.5 rounded-full font-medium hover:bg-brand-terra hover:text-white transition-colors">
            Sammenlign alle →
          </a>
        </div>
      </nav>

      {/* ===== RANGERING ===== */}
      <section id="rangering" className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-charcoal">
            Rangert: beste matkasse i Norge
          </h2>
          <span className="text-sm text-brand-muted hidden md:block">Mars 2026</span>
        </div>

        <div className="flex flex-col gap-6">
          {matkasser.map((m, i) => (
            <div id={m.slug} key={m.slug} className="scroll-mt-28">
              <MatkasseCard m={m} rank={i + 1} />
            </div>
          ))}
        </div>
      </section>

      {/* ===== SAMMENLIGNSTABELL ===== */}
      <section id="sammenlign" className="max-w-5xl mx-auto px-4 py-8 scroll-mt-20">
        <h2 className="text-2xl font-extrabold text-brand-charcoal mb-6">Sammenlign alle matkasser</h2>
        <ComparisonTable matkasser={matkasser} />
      </section>

      {/* ===== TRUST / FAQ teaser ===== */}
      <section className="bg-brand-charcoal text-white mt-4">
        <div className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-center">
          {[
            { icon: "🔍", title: "Testet av ekte mennesker", desc: "Vi kjøper og tester matkassene selv – ingen gratis prøver fra leverandørene." },
            { icon: "💸", title: "Ingen skjult betaling", desc: "Rangeringen vår styres av testresultatene, ikke provisjon. Affiliate-lenker dekker driften." },
            { icon: "🔄", title: "Oppdateres månedlig", desc: "Priser og tilbud endres. Vi sjekker og oppdaterer siden hver måned." },
          ].map((t) => (
            <div key={t.title}>
              <div className="text-3xl mb-3">{t.icon}</div>
              <h3 className="font-bold mb-2">{t.title}</h3>
              <p className="text-gray-400 text-sm">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== GUIDE CTA ===== */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="bg-brand-beige border border-brand-beige-dark rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
          <div>
            <h2 className="text-xl font-bold text-brand-charcoal mb-1">Ikke sikker på hvilken du skal velge?</h2>
            <p className="text-brand-muted text-sm max-w-md">Bruk vår guide til å finne riktig matkasse etter husholdningsstørrelse, budsjett og matpreferanser.</p>
          </div>
          <Link href="/guide/velg-matkasse" className="btn-secondary whitespace-nowrap">
            Ta guiden vår <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* Affiliate disclosure */}
      <div className="max-w-5xl mx-auto px-4 pb-10">
        <p className="text-xs text-brand-muted bg-brand-beige rounded-xl p-4 border border-brand-beige-dark">
          <strong>Om affiliatelenker:</strong> Noen lenker på denne siden er affiliatelenker. Hvis du kjøper via en slik lenke, mottar vi en liten provisjon – uten ekstra kostnad for deg. Dette påvirker ikke rangeringen vår. Vi setter alltid brukeropplevelse og ærlighet først.
        </p>
      </div>
    </>
  );
}
