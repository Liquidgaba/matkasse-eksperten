import type { Metadata } from "next";
import Link from "next/link";
import MatkasseCard from "@/components/MatkasseCard";
import { matkasser } from "@/lib/matkasser";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Beste matkasse – Sammenligning og rangering",
  description:
    "Hvilken matkasse er best? Vi har testet HelloFresh, Godtlevert og Adams og rangert dem etter pris, smak, fleksibilitet og levering.",
  alternates: { canonical: "https://matkasse-eksperten.no/beste-matkasse" },
};

const faq = [
  { q: "Hvilken matkasse er best totalt?", a: "HelloFresh rangeres høyest i vår test takket være størst utvalg, enkel app og god fleksibilitet. Godtlevert er et tett nummer to, spesielt for de som vil ha norske råvarer." },
  { q: "Hva er den billigste matkassen?", a: "Godtlevert er billigst per porsjon med 84 kr. HelloFresh og Adams ligger noe høyere, men tilbyr ofte rabatter til nye kunder." },
  { q: "Kan jeg avslutte uten bindingstid?", a: "Ja – alle de tre matkassene vi tester har ingen bindingstid. Du kan pause eller avslutte abonnementet fra uke til uke." },
  { q: "Leverer alle matkasser i hele landet?", a: "HelloFresh og Adams leverer i hele landet. Godtlevert leverer primært på Sør- og Østlandet." },
  { q: "Er det trygt å bestille matkasse på nett?", a: "Ja. Alle leverandørene vi anbefaler bruker sikker betaling og sender ferske varer med kjølt emballasje." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function BesteMatkasse() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-1 text-xs text-brand-muted">
        <Link href="/" className="hover:text-brand-terra">Hjem</Link>
        <ChevronRight size={12} />
        <span>Beste matkasse</span>
      </div>

      <article className="max-w-5xl mx-auto px-4 pb-16">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-charcoal mb-4 leading-tight">
            Beste matkasse – vår rangering
          </h1>
          <p className="text-xl text-brand-muted max-w-2xl">
            Vi har testet de største matkassene i Norge over tre måneder, laget 40+ måltider og rangert dem etter det som faktisk betyr noe: pris, smak, utvalg og hvor enkelt det er å bruke dem.
          </p>
        </header>

        {/* Rangering */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Vår rangering</h2>
          <div className="flex flex-col gap-6">
            {matkasser.map((m, i) => (
              <div key={m.slug} id={m.slug} className="scroll-mt-24">
                <MatkasseCard m={m} rank={i + 1} />
              </div>
            ))}
          </div>
        </section>

        {/* Pillar innhold */}
        <section className="mb-14 prose-custom max-w-none">
          <h2>Slik valgte vi den beste matkassen</h2>
          <p>
            Det finnes ingen perfekt matkasse for alle. Det avhenger av hvor du bor, hvor mange dere er hjemme, hva slags mat du liker, og hvor mye du vil bruke. Vi har testet de tre største aktørene grundig og ser på fem kriterier: <strong>pris per porsjon, utvalg av retter, fleksibilitet, leveringspålitelighet</strong> og <strong>råvarekvalitet</strong>.
          </p>

          <h3>Pris per porsjon</h3>
          <p>
            Godtlevert er billigst med 84 kr per porsjon. HelloFresh ligger på 89 kr og Adams på 91 kr. Det høres lite ut, men over et år med to porsjoner tre ganger i uka utgjør det over 1 500 kr i forskjell mellom billigst og dyrest. Husk også at alle tilbyr gode rabatter til nye kunder – ofte 40–60 % de første ukene.
          </p>

          <h3>Utvalg og variasjon</h3>
          <p>
            Her er HelloFresh den klare vinneren med 25+ retter å velge mellom hver uke. Godtlevert følger med opp mot 80 retter totalt i rotasjon. Adams har færre valgmuligheter, men kompenserer med høyere råvarekvalitet.
          </p>

          <h3>Fleksibilitet – hvor enkelt er det å pause?</h3>
          <p>
            Alle tre har ingen bindingstid, men det er forskjell i hvor enkelt det er i praksis. HelloFresh og Godtlevert har begge brukervennlige apper der du kan pause eller endre bestilling med noen tastetrykk. Adams er noe mer tungvint via nettside.
          </p>

          <h3>Hvem bør velge hva?</h3>
          <ul>
            <li><strong>Størst utvalg og enklest app:</strong> HelloFresh</li>
            <li><strong>Norske råvarer og flest størrelser:</strong> Godtlevert</li>
            <li><strong>Allergier og spesialkost:</strong> Adams Matkasse</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Vanlige spørsmål</h2>
          <div className="flex flex-col gap-4">
            {faq.map(({ q, a }) => (
              <details key={q} className="bg-white rounded-xl border border-gray-100 shadow-sm group">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-brand-charcoal list-none">
                  {q}
                  <ChevronRight size={16} className="text-brand-muted group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-5 pb-4 text-brand-muted text-sm leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
