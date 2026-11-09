import { useEffect, useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'

/**
 * Cursor personalizado global (só aparece em dispositivos com mouse).
 *
 * - Um pontinho que inverte a cor do fundo (mix-blend-difference).
 * - Encolhe ao passar sobre elementos com a classe `.reveal-text`. 
 * - A revelação da cor secundária em si é feita pelo <RevealText />, com a mesma posição do mouse.
 * 
 * Não recebe props.
 */
export default function CursorReveal() {
  const [enabled, setEnabled] = useState(false)
  const [onText, setOnText] = useState(false)
  const [visible, setVisible] = useState(false)
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!fine) return undefined

    setEnabled(true)
    document.body.classList.add('custom-cursor')

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
      setOnText(Boolean(e.target.closest?.('.reveal-text')))
    }
    const leave = () => setVisible(false)

    window.addEventListener('mousemove', move)
    document.documentElement.addEventListener('mouseleave', leave)

    return () => {
      document.body.classList.remove('custom-cursor')
      window.removeEventListener('mousemove', move)
      document.documentElement.removeEventListener('mouseleave', leave)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{ x, y, opacity: visible ? 1 : 0 }}
    >
      {/* x/y em style: o Framer Motion sobrescreve a classe -translate-* do Tailwind
          ao animar o scale, o que deslocaria o ponto 7px do ponteiro. */}
      <motion.div
        className="absolute left-0 top-0 h-3.5 w-3.5 rounded-full bg-white mix-blend-difference"
        style={{ x: '-50%', y: '-50%' }}
        animate={{ scale: onText ? 0.4 : 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 26 }}
      />
    </motion.div>
  )
}
