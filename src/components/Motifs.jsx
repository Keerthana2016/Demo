// Hand-drawn line-art SVG motifs — no external images, nothing can break.
const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.4, strokeLinecap: 'round', strokeLinejoin: 'round' }

export function Scissors(props) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <g {...stroke}>
        <circle cx="16" cy="46" r="7" />
        <circle cx="16" cy="18" r="7" />
        <path d="M22 42 L54 20 M22 22 L54 44" />
      </g>
    </svg>
  )
}

export function Mannequin(props) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <g {...stroke}>
        <path d="M24 8 h16 l4 14 c2 8 -2 16 -12 16 s-14 -8 -12 -16 z" />
        <path d="M32 38 v12 M22 56 h20 M32 50 l-8 6 M32 50 l8 6" />
      </g>
    </svg>
  )
}

export function Ruler(props) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <g {...stroke}>
        <rect x="6" y="24" width="52" height="16" rx="3" />
        <path d="M16 24 v6 M26 24 v9 M36 24 v6 M46 24 v9" />
      </g>
    </svg>
  )
}

export function Blouse(props) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <g {...stroke}>
        <path d="M24 10 c2 5 14 5 16 0 l12 8 -6 12 -5 -3 v25 H23 V27 l-5 3 -6 -12 z" />
        <path d="M32 15 v10" strokeDasharray="3 4" />
      </g>
    </svg>
  )
}

export function Spool(props) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <g {...stroke}>
        <path d="M18 12 h28 M18 52 h28 M22 12 v40 M42 12 v40" />
        <path d="M22 20 h20 M22 27 h20 M22 34 h20 M22 41 h20" strokeWidth="1.8" />
        <path d="M42 16 c10 2 14 10 8 16" strokeDasharray="3 4" strokeWidth="1.8" />
      </g>
    </svg>
  )
}

export function Needle(props) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <g {...stroke}>
        <path d="M12 52 L48 16" />
        <ellipse cx="50" cy="14" rx="5" ry="7" transform="rotate(45 50 14)" />
        <path d="M14 50 c-6 6 4 10 8 2" strokeDasharray="3 4" strokeWidth="1.8" />
      </g>
    </svg>
  )
}

export function Star({ filled = true, ...props }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        d="M10 1.6 12.6 7l5.9.7-4.4 4 1.2 5.8L10 14.6 4.7 17.5 5.9 11.7 1.5 7.7 7.4 7z"
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  )
}

export const MOTIF_MAP = { scissors: Scissors, mannequin: Mannequin, ruler: Ruler, blouse: Blouse, spool: Spool, needle: Needle }
