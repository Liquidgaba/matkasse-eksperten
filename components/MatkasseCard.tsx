"use client";
import Link from "next/link";
import LogoAvatar from "./LogoAvatar";
import { Check, X as XIcon, ExternalLink, ArrowRight } from "lucide-react";

export interface Matkasse {
  slug: string;
  navn: string;
  tagline: string;
  rating: number;
  antalltester: number;
  prisPerPorsjon: number;
  ukentligPris: number;
  leverandor: string;
  logoUrl: string;
  fallbackInitials: string;
  fallbackColor: string;
  badge?: "best" | "billigst" | "fleksibel";
  fordeler: string[];
  ulemper: string[];
  affiliateUrl: string;
  passerFor: string;
  tilbud?: string;
  bindingstid: string;
  levering: string;
  ctaText: string;
}

const badgeMap: Record<string, { label: string; cls: string }> = {
  best:      { label: "🏆 Beste valg", cls: "badge badge-terra" },
  billigst:  { label: "💰 Billigst", cls: "badge badge-sage" },
  fleksibel: { label: "🔄 Mest fleksibel", cls: "badge badge-blue" },
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill={i <= Math.round(rating) ? "var(--color-terra)" : "#ddd"}>
          <path d="M10 1l2.4 4.9 5.3.8-3.8 3.7.9 5.3L10 13.3l-4.8 2.5.9-5.3L2.3 6.7l5.3-.8L10 1z"/>
        </svg>
      ))}
      <span className="text-sm font-semibold ml-1" style={{ color: "var(--color-espresso)" }}>{rating.toFixed(1)}</span>
      <span className="text-xs" style={{ color: "var(--color-muted)" }}>({(matkasseReviewCount(rating)).toLocaleString("nb-NO")} anmeldelser)</span>
    </div>
  );
}

function matkasseReviewCount(r: number) {
  if (r >= 4.5) return 1842;
  if (r >= 4.3) return 1203;
  return 987;
}

export default function MatkasseCard({ m, rank }: { m: Matkasse; rank: number }) {
  const badge = m.badge ? badgeMap[m.badge] : null;
  const isWinner = rank === 1;

  return (
    <article className={`card ${isWinner ? "card-winner" : ""}`}>
      {badge && (
        <div className="px-6 pt-4 pb-0">
          <span className={badge.cls}>{badge.label}</span>
        </div>
      )}

      <div className="p-6 md:p-8">
        {/* Header-rad */}
        <div className="flex items-start gap-5 mb-5">
          <div className="w-[72px] h-[72px] rounded-2xl border overflow-hidden shrink-0 bg-white flex items-center justify-center" style={{ borderColor: "var(--color-cream-border)" }}>
            <LogoAvatar src={m.logoUrl} alt={m.navn} fallbackInitials={m.fallbackInitials} fallbackColor={m.fallbackColor} />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-sm font-medium" style={{ color: "var(--color-muted)" }}>#{rank}</span>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontWeight: 700, color: "var(--color-espresso)" }}>
                {m.navn}
              </h3>
            </div>
            <Stars rating={m.rating} />
            <p className="text-sm mt-2 leading-relaxed" style={{ color: "var(--color-muted)" }}>{m.tagline}</p>
          </div>

          <div className="text-right shrink-0 hidden sm:block">
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 700, color: "var(--color-terra)", lineHeight: 1 }}>
              {m.prisPerPorsjon} kr
            </div>
            <div className="text-xs mt-0.5" style={{ color: "var(--color-muted)" }}>per porsjon</div>
            <div className="text-sm font-medium mt-1" style={{ color: "var(--color-espresso)" }}>fra {m.ukentligPris} kr/uke</div>
          </div>
        </div>

        {/* Pris mobil */}
        <div className="sm:hidden rounded-xl px-4 py-3 mb-4 flex justify-between items-center" style={{ backgroundColor: "var(--color-cream)", border: "1px solid var(--color-cream-border)" }}>
          <span className="text-sm" style={{ color: "var(--color-muted)" }}>Pris per porsjon</span>
          <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 700, color: "var(--color-terra)" }}>{m.prisPerPorsjon} kr</span>
        </div>

        {/* Nøkkelinfo */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          {[
            { label: "Bindingstid", val: m.bindingstid },
            { label: "Levering", val: m.levering },
          ].map(({ label, val }) => (
            <div key={label} className="rounded-xl px-4 py-3" style={{ backgroundColor: "var(--color-cream)", border: "1px solid var(--color-cream-border)" }}>
              <div className="text-xs mb-0.5" style={{ color: "var(--color-muted)" }}>{label}</div>
              <div className="font-semibold text-sm" style={{ color: "var(--color-espresso)" }}>{val}</div>
            </div>
          ))}
        </div>

        {/* Fordeler / ulemper */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-1.5 mb-5">
          {m.fordeler.map(f => (
            <div key={f} className="flex items-start gap-2 text-sm">
              <Check size={14} className="mt-0.5 shrink-0" style={{ color: "var(--color-sage)" }} />
              <span style={{ color: "var(--color-text)" }}>{f}</span>
            </div>
          ))}
          {m.ulemper.map(u => (
            <div key={u} className="flex items-start gap-2 text-sm">
              <XIcon size={14} className="mt-0.5 shrink-0" style={{ color: "var(--color-terra)" }} />
              <span style={{ color: "var(--color-muted)" }}>{u}</span>
            </div>
          ))}
        </div>

        {/* Passer for */}
        <div className="rounded-xl px-4 py-3 mb-4 text-sm font-medium" style={{ backgroundColor: "var(--color-sage-light)", color: "var(--color-sage)", border: "1px solid rgba(45,106,79,0.2)" }}>
          ✓ Passer for: {m.passerFor}
        </div>

        {/* Tilbud */}
        {m.tilbud && (
          <div className="rounded-xl px-4 py-3 mb-5 text-sm font-semibold flex items-center gap-2" style={{ backgroundColor: "#fffbeb", border: "1px solid #fde68a", color: "#92400e" }}>
            🎁 {m.tilbud}
          </div>
        )}

        {/* CTAer */}
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <a
            href={m.affiliateUrl}
            target="_blank"
            rel="noopener sponsored"
            className="btn-primary flex-1 justify-center text-[1rem] py-4"
          >
            {m.ctaText}
            <ExternalLink size={15} />
          </a>
          <Link href={`/matkasse/${m.slug}`} className="btn-ghost justify-center sm:w-auto">
            Les vår test <ArrowRight size={15} />
          </Link>
        </div>
        <p className="text-xs text-center mt-3" style={{ color: "var(--color-muted)" }}>
          * Affiliatelenke — vi tjener provisjon, uten ekstra kostnad for deg
        </p>
      </div>
    </article>
  );
}
