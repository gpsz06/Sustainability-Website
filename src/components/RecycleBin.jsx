import { Recycle } from 'lucide-react'


export default function RecycleBin({ width = 130 }) {
  return (
    <div className="relative" style={{ width }}>
      <svg
        viewBox="0 0 120 150"
        width={width}
        style={{ filter: 'drop-shadow(0 10px 8px rgba(0,0,0,0.35))' }}
        aria-hidden="true"
      >
        <rect x="40" y="0" width="40" height="9" rx="3" fill="#1e3a8a" />
        <rect x="6" y="6" width="108" height="18" rx="5" fill="#1e40af" />
        <path d="M14 26 H106 L98 138 H22 Z" fill="#1d4ed8" />
        <rect x="34" y="46" width="52" height="62" rx="7" fill="#2563eb" />
        <circle cx="30" cy="142" r="7" fill="#0f172a" />
        <circle cx="90" cy="142" r="7" fill="#0f172a" />
      </svg>
      <Recycle
        className="absolute left-1/2 text-white"
        style={{ top: '41%', transform: 'translateX(-50%)' }}
        size={Math.round(width * 0.3)}
        strokeWidth={2.2}
      />
    </div>
  )
}
