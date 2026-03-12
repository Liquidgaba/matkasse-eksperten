import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Check, X, ExternalLink, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "HelloFresh test – vår gjennomgang",
  description: "Vi testet HelloFresh i 8 uker. Les vår gjennomgang av pris, utvalg, smak og levering – og hvem det passer for.",
  alternates: { canonical: "https://matkasse-eksperten.no/matkasse/hellofresh" },
};

const fordeler = ["25+ retter per uke", "Ingen bindingstid", "Enkel app og god brukeropplevelse", "Leveranse i hele landet", "Kalorismarte og glutenfrie valg"];
const ulemper = ["Mye plastemballasje", "Standardpris litt over snittet etter introperioden"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: { "@type": "Product", name: "HelloFresh matkasse", brand: { "@type": "Brand", name: "HelloFresh" } },
  reviewRating: { "@type": "Rating", ratingValue: "4.6", bestRating: "5" },
  author: { "@type": "Organization", name: "Matkasse-Eksperten" },
  reviewBody: "HelloFresh er vår testvinner takket være størst utvalg, enkel app og god fleksibilitet.",
};

export default function HelloFreshPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-1 text-xs text-brand-muted">
        <Link href="/" className="hover:text-brand-terra">Hjem</Link>
        <ChevronRight size={12}/>
        <Link href="/beste-matkasse" className="hover:text-brand-terra">Beste matkasse</Link>
        <ChevronRight size={12}/>
        <span>HelloFresh</span>
      </div>

      <article className="max-w-3xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-brand-terra text-white text-xs font-bold px-3 py-1 rounded-full">🏆 Testvinner</span>
            <span className="text-xs text-brand-muted">Testet over 8 uker</span>
          </div>
          <h1 className="text-4xl font-extrabold text-brand-charcoal mb-4">HelloFresh – vår test</h1>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex">{[1,2,3,4,5].map(i=><Star key={i} size={20} className={i<=4?"fill-brand-terra text-brand-terra":"fill-gray-200 text-gray-200"}/>)}</div>
            <span className="font-bold text-brand-charcoal">4,6 / 5</span>
          </div>
          <p className="text-lg text-brand-muted">HelloFresh er Norges største matkasse-leverandør – og vår testvinner. Her er alt du trenger å vite.</p>
        </header>

        {/* Hurtigoversikt */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {[["Fra 89 kr","per porsjon"],["25+","retter/uke"],["Ingen","bindingstid"],["Hele landet","levering"]].map(([v,l])=>(
            <div key={l} className="bg-white rounded-xl border border-gray-100 shadow-sm p-3 text-center">
              <div className="text-lg font-extrabold text-brand-terra">{v}</div>
              <div className="text-xs text-brand-muted mt-0.5">{l}</div>
            </div>
          ))}
        </div>

        {/* Fordeler/ulemper */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <h3 className="font-bold text-brand-sage mb-3 flex items-center gap-2"><Check size={16}/> Fordeler</h3>
            <ul className="space-y-2">{fordeler.map(f=><li key={f} className="text-sm flex items-start gap-2"><Check size={13} className="text-brand-sage mt-0.5 shrink-0"/>{f}</li>)}</ul>
          </div>
          <div className="bg-red-50 border border-red-100 rounded-xl p-5">
            <h3 className="font-bold text-red-600 mb-3 flex items-center gap-2"><X size={16}/> Ulemper</h3>
            <ul className="space-y-2">{ulemper.map(u=><li key={u} className="text-sm flex items-start gap-2"><X size={13} className="text-red-400 mt-0.5 shrink-0"/>{u}</li>)}</ul>
          </div>
        </div>

        <div className="prose-custom mb-10">
          <h2>Hva er HelloFresh?</h2>
          <p>HelloFresh er en av verdens største matkasse-leverandører, tilgjengelig i over 18 land. I Norge leverer de ferske råvarer og oppskriftskort direkte til døren din – du bestemmer selv hvilke retter du vil ha og for hvor mange.</p>

          <h2>Pris og pakker</h2>
          <p>Prisen starter på rundt 89 kr per porsjon, men varierer etter antall porsjoner og retter du velger per uke. Nye kunder får normalt 40–60 % rabatt de første 4 ukene. Etter introperioden er standardprisen noe over snittet – men mange synes det er verdt det for utvalget og kvaliteten.</p>

          <h2>Utvalg og retter</h2>
          <p>Det er her HelloFresh virkelig skiller seg ut. Med 25+ retter å velge mellom ukentlig – inkludert internasjonale retter, kalorismarte alternativer og glutenfrie valg – er det noe for enhver smak. Oppskriftene er tydelige og passer godt for de fleste ferdighetsnivåer på kjøkkenet.</p>

          <h2>Levering og praktisk informasjon</h2>
          <p>HelloFresh leverer i hele landet. Du kan enkelt justere, pause eller avslutte abonnementet direkte i appen. Maten leveres i isolert emballasje som holder kald i flere timer.</p>

          <h2>Vår konklusjon</h2>
          <p>HelloFresh er det beste valget for de fleste nordmenn. Størst utvalg, enklest app og god logistikk gjør dem til en klar vinner. Eneste minus er plastemballasjen og at standardprisen er litt i overkant. Men med de gode introrabattene er det lett å anbefale å prøve.</p>
        </div>

        <div className="bg-brand-beige rounded-2xl p-6 text-center">
          <p className="font-bold text-brand-charcoal text-lg mb-2">Klar til å prøve HelloFresh?</p>
          <p className="text-brand-muted text-sm mb-4">Ingen bindingstid. Avslutt når som helst.</p>
          <a href="https://track.adtraction.com/t/t?a=1234567&as=CHANNEL&t=2&tk=" target="_blank" rel="noopener sponsored"
            className="btn-primary text-base">
            Prøv HelloFresh gratis <ExternalLink size={15}/>
          </a>
          <p className="text-xs text-brand-muted mt-3">* Affiliatelenke</p>
        </div>
      </article>
    </>
  );
}
