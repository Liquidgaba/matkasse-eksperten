"use client";
import Link from "next/link";
import Image from "next/image";
import StarRating from "./StarRating";
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
  badge?: "best" | "billigst" | "fleksibel";
  fordeler: string[];
  ulemper: string[];
  affiliateUrl: string;
  passerFor: string;
  tilbud?: string;
  bindingstid: string;
  levering: string;
}

const badgeMap: Record<string, { label: string; color: string }> = {
  best:      { label: "🏆 Beste valg 2026", color: "bg-brand-terra text-white" },
  billigst:  { label: "💰 Billigst", color: "bg-brand-sage text-white" },
  fleksibel: { label: "🔄 Mest fleksibel", color: "bg-blue-600 text-white" },
};

export default function MatkasseCard({ m, rank }: { m: Matkasse; rank: number }) {
  const badge = m.badge ? badgeMap[m.badge] : null;
  const isBest = rank === 1;

  return (
    <div className={`bg-white rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-xl ${
      isBest ? "ring-2 ring-brand-terra shadow-lg" : "shadow-card border border-gray-100"
    }`}>
      {/* Top bar med badge */}
      {badge && (
        <div className={`${badge.color} text-sm font-bold px-5 py-2 flex items-center gap-2`}>
          <span>{badge.label}</span>
        </div>
      )}

      <div className="p-5 md:p-6">
        {/* Header: logo + navn + rating */}
        <div className="flex items-start gap-4 mb-4">
          {/* Logo */}
          <div className="w-16 h-16 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
            <Image
              src={m.logoUrl}
              alt={`${m.navn} logo`}
              width={56}
              height={56}
              className="object-contain p-1"
              unoptimized
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-brand-muted text-sm font-medium">#{rank}</span>
              <h3 className="text-xl font-extrabold text-brand-charcoal">{m.navn}</h3>
            </div>
            <div className="flex items-center gap-3 mt-1 flex-wrap">
              <StarRating rating={m.rating} />
              <span className="text-xs text-brand-muted">({m.antalltester} tester)</span>
            </div>
            <p className="text-sm text-brand-muted mt-1 line-clamp-2">{m.tagline}</p>
          </div>

          {/* Pris */}
          <div className="text-right shrink-0 hidden sm:block">
            <div className="text-2xl font-black text-brand-terra leading-none">{m.prisPerPorsjon} kr</div>
            <div className="text-xs text-brand-muted mt-0.5">per porsjon</div>
            <div className="text-sm font-medium text-brand-charcoal mt-1">fra {m.ukentligPris} kr/uke</div>
          </div>
        </div>

        {/* Pris mobil */}
        <div className="sm:hidden flex justify-between items-center bg-brand-beige rounded-lg px-4 py-2 mb-4">
          <span className="text-sm text-brand-muted">Pris per porsjon</span>
          <div>
            <span className="text-xl font-black text-brand-terra">{m.prisPerPorsjon} kr</span>
            <span className="text-xs text-brand-muted ml-1">/ fra {m.ukentligPris} kr/uke</span>
          </div>
        </div>

        {/* Nøkkelinfo-rad */}
        <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
          <div className="bg-brand-beige rounded-lg px-3 py-2">
            <span className="text-brand-muted text-xs block">Bindingstid</span>
            <span className="font-semibold text-brand-charcoal">{m.bindingstid}</span>
          </div>
          <div className="bg-brand-beige rounded-lg px-3 py-2">
            <span className="text-brand-muted text-xs block">Levering</span>
            <span className="font-semibold text-brand-charcoal">{m.levering}</span>
          </div>
        </div>

        {/* Fordeler / ulemper */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1 mb-4">
          {m.fordeler.map((f) => (
            <div key={f} className="flex items-start gap-2 text-sm">
              <Check size={15} className="text-brand-sage mt-0.5 shrink-0" />
              <span className="text-brand-charcoal">{f}</span>
            </div>
          ))}
          {m.ulemper.map((u) => (
            <div key={u} className="flex items-start gap-2 text-sm">
              <XIcon size={15} className="text-brand-terra mt-0.5 shrink-0" />
              <span className="text-brand-muted">{u}</span>
            </div>
          ))}
        </div>

        {/* Passer for */}
        <div className="text-sm bg-brand-sage-pale border border-brand-sage/20 rounded-lg px-3 py-2 mb-5 text-brand-sage font-medium">
          ✓ Passer best for: {m.passerFor}
        </div>

        {/* Tilbud banner */}
        {m.tilbud && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mb-4 text-sm text-amber-800 font-medium flex items-center gap-2">
            🎁 <span>{m.tilbud}</span>
          </div>
        )}

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={m.affiliateUrl}
            target="_blank"
            rel="noopener sponsored"
            className="btn-primary flex-1 justify-center text-base"
          >
            Gå til {m.leverandor}
            <ExternalLink size={15} />
          </a>
          <Link
            href={`/matkasse/${m.slug}`}
            className="btn-secondary justify-center sm:w-auto"
          >
            Les vår test
            <ChevronRight size={15} />
          </Link>
        </div>
        <p className="text-xs text-brand-muted text-center mt-2">
          * Affiliatelenke — vi tjener provisjon, uten kostnad for deg
        </p>
      </div>
    </div>
  );
}
