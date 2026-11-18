// Decorative sunrise illustration — a nod to the name «Ανατολή».
export default function Sunrise({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 400 400" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F6E1D3" />
          <stop offset="70%" stopColor="#F2C9AE" />
          <stop offset="100%" stopColor="#E9A985" />
        </linearGradient>
        <radialGradient id="sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F3B48A" />
          <stop offset="100%" stopColor="#D9825B" />
        </radialGradient>
        <clipPath id="arch">
          <path d="M40 400 V200 a160 160 0 0 1 320 0 V400 Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#arch)">
        <rect width="400" height="400" fill="url(#sky)" />
        <g className="sun-rays" stroke="#FBF5EE" strokeWidth="2" opacity="0.55">
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (Math.PI * (i + 0.5)) / 12
            const x1 = 200 - Math.cos(a) * 95
            const y1 = 290 - Math.sin(a) * 95
            const x2 = 200 - Math.cos(a) * 190
            const y2 = 290 - Math.sin(a) * 190
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
          })}
        </g>
        <circle className="sun" cx="200" cy="290" r="78" fill="url(#sun)" />
        <path d="M0 300 C 80 270, 140 285, 200 300 S 330 320, 400 290 V400 H0 Z" fill="#B9766A" opacity="0.55" />
        <path d="M0 330 C 90 305, 170 335, 240 325 S 350 305, 400 320 V400 H0 Z" fill="#7C4E62" opacity="0.75" />
        <path d="M0 362 C 110 345, 210 372, 300 358 S 380 350, 400 356 V400 H0 Z" fill="#4A3348" />
      </g>
      <path d="M40 400 V200 a160 160 0 0 1 320 0 V400" fill="none" stroke="#4A3348" strokeWidth="1.5" opacity="0.35" />
    </svg>
  )
}
