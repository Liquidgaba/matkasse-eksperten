import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🥘</span>
            <span className="font-bold text-lg">Matkasse<span className="text-brand-terra-light">Eksperten</span></span>
          </div>
          <p className="text-sm text-gray-400">
            Uavhengige tester av norske matkasser siden 2024.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-400">Tester</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/matkasse/hellofresh" className="hover:text-white transition-colors">HelloFresh test</Link></li>
            <li><Link href="/matkasse/godtlevert" className="hover:text-white transition-colors">Godtlevert test</Link></li>
            <li><Link href="/matkasse/adams-matkasse" className="hover:text-white transition-colors">Adams Matkasse test</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-400">Guider</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/guide/velg-matkasse" className="hover:text-white transition-colors">Velg riktig matkasse</Link></li>
            <li><Link href="/guide/pris-per-porsjon" className="hover:text-white transition-colors">Forstå pris per porsjon</Link></li>
            <li><Link href="/sammenlign" className="hover:text-white transition-colors">Sammenlign alle</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-400">Om oss</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/om-oss" className="hover:text-white transition-colors">Om Matkasse-Eksperten</Link></li>
            <li><Link href="/personvern" className="hover:text-white transition-colors">Personvern</Link></li>
            <li><Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 max-w-5xl mx-auto px-4 py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} Matkasse-Eksperten · Inneholder affiliatelenker
      </div>
    </footer>
  );
}
