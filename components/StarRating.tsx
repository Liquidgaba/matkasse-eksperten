export default function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} av ${max} stjerner`}>
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < Math.floor(rating);
        const half = !filled && i < rating;
        return (
          <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="none">
            {filled ? (
              <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.62l5.34-.78L10 1z"
                fill="#c05621" />
            ) : half ? (
              <>
                <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27V1z" fill="#c05621" />
                <path d="M10 1l-2.39 4.84-5.34.78 3.87 3.77-.91 5.32L10 13.27V1z" fill="#e2d5c8" />
              </>
            ) : (
              <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.62l5.34-.78L10 1z"
                fill="#e2d5c8" />
            )}
          </svg>
        );
      })}
      <span className="ml-1 text-sm font-semibold text-brand-charcoal">{rating.toFixed(1)}</span>
    </div>
  );
}
