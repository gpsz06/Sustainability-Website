import { Recycle } from 'lucide-react'


export default function Logo({ showText = true }) {
  return (
    <a href="#inicio" className="flex items-center gap-2" aria-label="Início">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-forest text-white shadow-md">
        <Recycle size={20} strokeWidth={2.4} />
      </span>
      {showText && (
        <span className="hidden font-title text-sm font-bold leading-none text-ink min-[400px]:inline">
          Sustain
          <span className="font-serif font-normal italic text-forest">ability</span>
        </span>
      )}
    </a>
  )
}
