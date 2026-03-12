import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Users, Wallet, Leaf, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Slik velger du riktig matkasse – guide",
  description: "Ikke sikker på hvilken matkasse du skal velge? Vi hjelper deg med å finne riktig valg basert på husholdningsstørrelse, budsjett og matpreferanser.",
  alternates: { canonical: "https://matkasse-eksperten.no/guide/velg-matkasse" },
};

export default function VelgMatkassePage() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-1 text-xs text-brand-muted">
        <Link href="/" className="hover:text-brand-terra">Hjem</Link>
        <ChevronRight size={12}/>
        <Link href="/guide" className="hover:text-brand-terra">Guide</Link>
        <ChevronRight size={12}/>
        <span>Velg matkasse</span>
      </div>

      <article className="max-w-3xl mx-auto px-4 pb-16">
        <header className="mb-10">
          <span className="text-sm font-semibold text-brand-terra uppercase tracking-wide mb-2 block">Guide</span>
          <h1 className="text-4xl font-extrabold text-brand-charcoal mb-4 leading-tight">
            Slik velger du riktig matkasse
          </h1>
          <p className="text-lg text-brand-muted">
            Fire spørsmål du bør svare på – så finner vi riktig matkasse for deg.
          </p>
        </header>

        <div className="flex flex-col gap-8 prose-custom max-w-none">

          {/* Steg 1 */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-terra text-white flex items-center justify-center font-bold shrink-0">1</div>
              <div className="flex items-center gap-2">
                <Users size={18} className="text-brand-terra" />
                <h2 className="text-xl font-bold text-brand-charcoal m-0">Hvor mange er dere hjemme?</h2>
              </div>
            </div>
            <p>Husholdningsstørrelse er det første du bør avklare. Ikke alle leverandører tilbyr kasser til enslige.</p>
            <ul>
              <li><strong>Enslige:</strong> Godtlevert er det beste valget – de tilbyr 1-personskasse</li>
              <li><strong>Par:</strong> Alle tre passer godt. HelloFresh for størst variasjon</li>
              <li><strong>Familie (3–4):</strong> HelloFresh og Godtlevert – begge tilbyr 4-personskasse</li>
              <li><strong>Stor familie (5–6):</strong> Kun Godtlevert tilbyr kasser til 6 personer</li>
            </ul>
          </div>

          {/* Steg 2 */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-terra text-white flex items-center justify-center font-bold shrink-0">2</div>
              <div className="flex items-center gap-2">
                <Wallet size={18} className="text-brand-terra" />
                <h2 className="text-xl font-bold text-brand-charcoal m-0">Hva er budsjettet ditt?</h2>
              </div>
            </div>
            <p>Prisen varierer fra 84 til 91 kr per porsjon. Over et år med 2 porsjoner 3 ganger i uken utgjør det:</p>
            <div className="grid grid-cols-3 gap-3 my-4">
              {[["Godtlevert","84 kr","8 736 kr/år"],["HelloFresh","89 kr","9 256 kr/år"],["Adams","91 kr","9 464 kr/år"]].map(([navn,pp,år])=>(
                <div key={navn} className="bg-brand-beige rounded-xl p-3 text-center text-sm">
                  <div className="font-bold text-brand-charcoal">{navn}</div>
                  <div className="text-brand-terra font-extrabold text-lg">{pp}</div>
                  <div className="text-brand-muted text-xs">{år}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-muted">💡 Tip: Alle tilbyr stor rabatt til nye kunder. Start med det billigste tilbudet og se om du liker det.</p>
          </div>

          {/* Steg 3 */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-terra text-white flex items-center justify-center font-bold shrink-0">3</div>
              <div className="flex items-center gap-2">
                <Leaf size={18} className="text-brand-terra" />
                <h2 className="text-xl font-bold text-brand-charcoal m-0">Norsk mat eller internasjonalt?</h2>
              </div>
            </div>
            <p>Er du opptatt av kortreiste, norske råvarer – eller vil du ha inspirasjon fra hele verden?</p>
            <ul>
              <li><strong>Norsk fokus:</strong> Adams og Godtlevert – begge satser på norsk kjøtt og fisk</li>
              <li><strong>Internasjonal variasjon:</strong> HelloFresh – retter fra Asia, Italia, Mexico og mer</li>
            </ul>
          </div>

          {/* Steg 4 */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-terra text-white flex items-center justify-center font-bold shrink-0">4</div>
              <div className="flex items-center gap-2">
                <AlertCircle size={18} className="text-brand-terra" />
                <h2 className="text-xl font-bold text-brand-charcoal m-0">Har du allergier eller spesialkost?</h2>
              </div>
            </div>
            <p>Adams Matkasse er den klare vinneren for allergikere og de med spesielle kostbehov. De tilbyr glutenfri, laktosefri og vegetarisk kasse.</p>
          </div>

          {/* Konklusjon */}
          <div className="bg-brand-terra text-white rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-3 text-white">Vår anbefaling</h2>
            <p className="text-orange-100 mb-4">Usikker? Start med <strong className="text-white">HelloFresh</strong> – de har størst utvalg, enkel app og gode intro-tilbud. Ingen bindingstid betyr du kan avslutte når som helst.</p>
            <Link href="/matkasse/hellofresh" className="bg-white text-brand-terra font-bold px-5 py-2.5 rounded-lg inline-flex items-center gap-2 hover:bg-orange-50 transition-colors">
              Se HelloFresh-testen vår <ChevronRight size={15}/>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
