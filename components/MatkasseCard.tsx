import Link from "next/link";
import StarRating from "./StarRating";
import { Check, X as XIcon } from "lucide-react";

export interface Matkasse {
  slug: string;
  navn: string;
  tagline: string;
  rating: number;
  prisPerPorsjon: number;
  ukentligPris: number;
  leverandor: string;
  badge?: "best" | "billigst" | "fleksibel";
  fordeler: string[];
  ulemper: string[];
  affiliateUrl: string;
  passerFor: string;
}

const badgeConfig = {
  best: { label: "Beste valg", className: "badge-best" },
  billigst: { label: "Billigst", className: "bg-brand-sage text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide inline-flex" },
  fleksibel: { label: "Mest fleksibel", className: "bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide inline-flex" },
};

export default function MatkasseCard({ m, rank }: { m: Matkasse; rank: number }) {
  const badge = m.badge ? badgeConfig[m.badge] : null;

  return (
    <div className={`card p-6 relative ${rank === 1 ? "ring-2 ring-brand-terra" : ""}`}>
      {badge && (
        <div className="absolute -top-3 left-6">
          <span className={badge.className}>{badge.label}</span>
        </div>
      )}

      <div className="flex items-start justify-between gap-4 mt-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-brand-muted text-sm font-medium">#{rank}</span>
            <h3 className="text-xl font-bold text-brand-charcoal">{m.navn}</h3>
          </div>
          <p className="text-brand-muted text-sm mb-2">{m.tagline}</p>
          <StarRating rating={m.rating} />
        </div>
        <div className="text-right shrink-0">
          <div className="text-2xl font-bold text-brand-terra">{m.prisPerPorsjon} kr</div>
          <div className="text-xs text-brand-muted">per porsjon</div>
          <div className="text-sm text-brand-muted mt-0.5">fra {m.ukentligPris} kr/uke</div>
        </div>
      </div>

      <p className="text-sm text-brand-sage font-medium mt-3 mb-3">✓ Passer for: {m.passerFor}</p>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          {m.fordeler.slice(0, 3).map((f) => (
            <div key={f} className="flex items-start gap-1.5 text-sm mb-1">
              <Check size={14} className="text-brand-sage mt-0.5 shrink-0" />
              <span className="text-brand-charcoal">{f}</span>
            </div>
          ))}
        </div>
        <div>
          {m.ulemper.slice(0, 2).map((u) => (
            <div key={u} className="flex items-start gap-1.5 text-sm mb-1">
              <XIcon size={14} className="text-brand-terra mt-0.5 shrink-0" />
              <span className="text-brand-muted">{u}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3 mt-4">
        <a
          href={m.affiliateUrl}
          target="_blank"
          rel="noopener sponsored"
          className="btn-primary flex-1 justify-center"
        >
          Se tilbud hos {m.leverandor}
        </a>
        <Link
          href={`/matkasse/${m.slug}`}
          className="btn-secondary px-4"
        >
          Les test
        </Link>
      </div>
    </div>
  );
}
