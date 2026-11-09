import { useRef } from 'react'


export default function RevealText({
  as: Tag = 'span',
  children,
  className = '',
  revealClass = 'text-forest',
}) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el || e.pointerType !== 'mouse') return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <Tag
      ref={ref}
      className={`reveal-text relative block ${className}`}
      onPointerMove={handleMove}
      onPointerEnter={(e) => {
        if (e.pointerType === 'mouse') ref.current?.classList.add('is-active')
      }}
      onPointerLeave={() => ref.current?.classList.remove('is-active')}
    >
      {children}
      <span
        aria-hidden="true"
        className={`reveal-layer pointer-events-none absolute inset-0 ${revealClass}`}
      >
        {children}
      </span>
    </Tag>
  )
}
