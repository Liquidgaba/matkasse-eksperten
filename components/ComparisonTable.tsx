import { Matkasse } from "./MatkasseCard";
import { Check, X as XIcon, ExternalLink } from "lucide-react";

export default function ComparisonTable({ matkasser }: { matkasser: Matkasse[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-card">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-brand-charcoal text-white">
            <th className="text-left px-4 py-3 font-semibold w-40">Matkasse</th>
            <th className="px-3 py-3 font-semibold text-center">Pris/porsjon</th>
            <th className="px-3 py-3 font-semibold text-center">Karakter</th>
            <th className="px-3 py-3 font-semibold text-center">Bindingstid</th>
            <th className="px-3 py-3 font-semibold text-center">Levering</th>
            <th className="px-3 py-3 font-semibold text-center">Vår anbefaling</th>
            <th className="px-3 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {matkasser.map((m, i) => (
            <tr key={m.slug} className={`border-t border-gray-100 ${i === 0 ? "bg-amber-50" : i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
              <td className="px-4 py-4">
                <div className="font-bold text-brand-charcoal flex items-center gap-1.5">
                  {i === 0 && <span title="Beste valg">🏆</span>}
                  {m.navn}
                </div>
                {m.badge && (
                  <span className="text-xs text-brand-terra font-medium">
                    {m.badge === "best" ? "Beste valg" : m.badge === "billigst" ? "Billigst" : "Mest fleksibel"}
                  </span>
                )}
              </td>
              <td className="px-3 py-4 text-center">
                <span className="font-bold text-brand-terra text-base">{m.prisPerPorsjon} kr</span>
              </td>
              <td className="px-3 py-4 text-center">
                <span className="font-bold text-brand-charcoal">{m.rating.toFixed(1)}</span>
                <span className="text-brand-muted">/5</span>
              </td>
              <td className="px-3 py-4 text-center">
                {m.bindingstid === "Ingen" ? (
                  <Check size={16} className="text-brand-sage mx-auto" />
                ) : (
                  <span className="text-brand-muted">{m.bindingstid}</span>
                )}
              </td>
              <td className="px-3 py-4 text-center text-brand-muted text-xs">{m.levering}</td>
              <td className="px-3 py-4 text-center text-xs text-brand-muted">{m.passerFor.split(" ").slice(0, 4).join(" ")}...</td>
              <td className="px-3 py-4 pr-4 text-right">
                <a
                  href={m.affiliateUrl}
                  target="_blank"
                  rel="noopener sponsored"
                  className="inline-flex items-center gap-1 bg-brand-terra text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-brand-terra-dark transition-colors whitespace-nowrap"
                >
                  Se tilbud <ExternalLink size={11} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
