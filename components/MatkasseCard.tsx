"use client";
import Link from "next/link";
import StarRating from "./StarRating";
import LogoAvatar from "./LogoAvatar";
import { Check, X as XIcon, ExternalLink, ChevronRight } from "lucide-react";

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

const badgeMap: Record<string, { label: string; className: string }> = {
  best:      { label: "🏆 Beste valg", className: "bg-brand-terra text-white" },
  billigst:  { label: "💰 Billigst", className: "bg-brand-sage text-white" },
  fleksibel: { label: "🔄 Mest fleksibel", className: "bg-blue-600 text-white" },
};

export default function MatkasseCard({ m, rank }: { m: Matkasse; rank: number }) {
  const badge = m.badge ? badgeMap[m.badge] : null;

  return (
    <div className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
      rank === 1 ? "ring-2 ring-brand-terra shadow-lg" : "shadow-md border border-gray-100"
    }`}>
      {badge && (
        <div className={`${badge.className} px-5 py-2.5 text-sm font-bold flex items-center gap-2`}>
          {badge.label}
        </div>
      )}

      <div className="p-5 md:p-7">
        {/* Header */}
        <div className="flex items-start gap-4 mb-5">
          <div className="w-16 h-16 rounded-xl border border-gray-100 bg-gray-50 overflow-hidden shrink-0 shadow-sm">
            <LogoAvatar
              src={m.logoUrl}
              alt={m.navn}
              fallbackInitials={m.fallbackInitials}
              fallbackColor={m.fallbackColor}
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-sm text-gray-400 font-medium">#{rank}</span>
              <h3 className="text-xl font-extrabold text-brand-charcoal">{m.navn}</h3>
            </div>
            <StarRating rating={m.rating} />
            <p className="text-sm text-brand-muted mt-1.5">{m.tagline}</p>
          </div>
          <div className="text-right shrink-0 hidden sm:block">
            <div className="text-3xl font-black text-brand-terra leading-none">{m.prisPerPorsjon}kr</div>
            <div className="text-xs text-gray-400 mt-0.5">per porsjon</div>
            <div className="text-sm font-semibold text-gray-600 mt-1">fra {m.ukentligPris}kr/uke</div>
          </div>
        </div>

        {/* Pris — mobil */}
        <div className="sm:hidden flex justify-between items-center bg-gray-50 rounded-xl px-4 py-3 mb-4">
          <span className="text-sm text-gray-500">Pris per porsjon</span>
          <span className="text-2xl font-black text-brand-terra">{m.prisPerPorsjon} kr</span>
        </div>

        {/* Meta-info */}
        <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
          <div className="bg-gray-50 rounded-xl px-3 py-2.5">
            <span className="text-xs text-gray-400 block mb-0.5">Bindingstid</span>
            <span className="font-semibold text-gray-700">{m.bindingstid}</span>
          </div>
          <div className="bg-gray-50 rounded-xl px-3 py-2.5">
            <span className="text-xs text-gray-400 block mb-0.5">Levering</span>
            <span className="font-semibold text-gray-700">{m.levering}</span>
          </div>
        </div>

        {/* Fordeler/ulemper */}
        <div className="grid md:grid-cols-2 gap-x-6 gap-y-1.5 mb-4">
          {m.fordeler.map((f) => (
            <div key={f} className="flex items-start gap-2 text-sm">
              <Check size={14} className="text-brand-sage mt-0.5 shrink-0" />
              <span className="text-gray-700">{f}</span>
            </div>
          ))}
          {m.ulemper.map((u) => (
            <div key={u} className="flex items-start gap-2 text-sm">
              <XIcon size={14} className="text-brand-terra mt-0.5 shrink-0" />
              <span className="text-gray-400">{u}</span>
            </div>
          ))}
        </div>

        {/* Passer for */}
        <div className="text-sm bg-brand-sage-pale border border-brand-sage/20 rounded-xl px-4 py-2.5 mb-4 text-brand-sage font-medium">
          ✓ Passer for: {m.passerFor}
        </div>

        {/* Tilbud */}
        {m.tilbud && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5 mb-5 text-sm text-amber-800 font-semibold flex items-center gap-2">
            🎁 {m.tilbud}
          </div>
        )}

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={m.affiliateUrl}
            target="_blank"
            rel="noopener sponsored"
            className="btn-primary flex-1 justify-center text-base py-3.5"
          >
            {m.ctaText}
            <ExternalLink size={15} />
          </a>
          <Link href={`/matkasse/${m.slug}`} className="btn-secondary justify-center">
            Les test <ChevronRight size={15} />
          </Link>
        </div>
        <p className="text-xs text-center text-gray-400 mt-2">
          Affiliatelenke – ingen ekstra kostnad for deg
        </p>
      </div>
    </div>
  );
}
