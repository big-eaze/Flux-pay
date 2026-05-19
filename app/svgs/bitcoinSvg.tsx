// ─── 3D Bitcoin SVG ───────────────────────────────────────────────────────────
export default function BitcoinIcon({ size = 120 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="btcGrad" cx="38%" cy="32%" r="62%">
          <stop offset="0%" stopColor="#FFD166" />
          <stop offset="55%" stopColor="#F7931A" />
          <stop offset="100%" stopColor="#C25A00" />
        </radialGradient>
        <radialGradient id="btcEdge" cx="50%" cy="50%" r="50%">
          <stop offset="60%" stopColor="#F7931A" stopOpacity="0" />
          <stop offset="100%" stopColor="#6B3100" stopOpacity="0.7" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* Outer glow ring */}
      <circle cx="60" cy="60" r="58" fill="none" stroke="#F7931A" strokeWidth="1" strokeOpacity="0.3" />
      <circle cx="60" cy="60" r="52" fill="url(#btcGrad)" />
      <circle cx="60" cy="60" r="52" fill="url(#btcEdge)" />
      {/* Shine */}
      <ellipse cx="46" cy="42" rx="14" ry="9" fill="white" fillOpacity="0.18" transform="rotate(-20 46 42)" />
      {/* ₿ symbol */}
      <g filter="url(#glow)">
        <text x="60" y="76" textAnchor="middle" fontFamily="Georgia, serif" fontSize="52" fontWeight="700" fill="#7A3500" fillOpacity="0.35">₿</text>
        <text x="60" y="75" textAnchor="middle" fontFamily="Georgia, serif" fontSize="52" fontWeight="700" fill="#FFF8E7">₿</text>
      </g>
    </svg>
  );
}