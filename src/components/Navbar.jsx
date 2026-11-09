import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import Logo from './Logo'

const MAIN_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'O Que É?', href: '#o-que-e' },
  { label: 'Por Que Importa?', href: '#importancia' },
]

const MORE_LINKS = [
  { label: 'Guia de Descarte', href: '#guia' },
  { label: 'Os 3Rs', href: '#tres-rs' },
  { label: 'Inspiração Circular', href: '#ideias' },
  { label: 'Curiosidades', href: '#curiosidades' },
]

const MOBILE_LINKS = [...MAIN_LINKS, ...MORE_LINKS]

/** Distância de scroll (px) a partir da qual a navbar vira pílula. */
const SCROLL_THRESHOLD = 40

const LINK_CLASS =
  'rounded-full px-3 py-1.5 text-sm font-semibold text-ink/80 transition-colors hover:bg-white/70 hover:text-forest'


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex flex-col items-center px-3 pt-3 sm:px-6 sm:pt-4">
      <motion.nav
        initial={false}
        animate={{ maxWidth: scrolled ? 800 : 1280 }}
        transition={{ type: 'spring', stiffness: 160, damping: 22 }}
        className={`flex w-full items-center justify-between gap-2 rounded-full border px-2 py-2 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 sm:px-3 ${
          scrolled
            ? 'border-white/40 bg-white/60 shadow-lg backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <div className="pl-1">
          <Logo showText={!scrolled} />
        </div>

        <div
          className={`hidden items-center gap-1 rounded-full border px-1.5 py-1 font-body md:flex ${
            scrolled
              ? 'border-transparent bg-transparent'
              : 'border-white/30 bg-white/40 backdrop-blur-md'
          }`}
        >
          {MAIN_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={LINK_CLASS}>
              {link.label}
            </a>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              type="button"
              onClick={() => setMoreOpen((o) => !o)}
              aria-expanded={moreOpen}
              aria-haspopup="true"
              className={`${LINK_CLASS} flex items-center gap-1`}
            >
              Mais
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  moreOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {moreOpen && (
                <div className="absolute left-1/2 top-full w-60 -translate-x-1/2 pt-3">
                  <motion.ul
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden rounded-2xl border border-white/40 bg-white/80 p-2 shadow-xl backdrop-blur-xl"
                  >
                    {MORE_LINKS.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          onClick={() => setMoreOpen(false)}
                          className="block rounded-xl px-3 py-2 text-sm font-semibold text-ink/80 transition-colors hover:bg-mint/30 hover:text-forest"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#o-que-e"
            className="group flex items-center gap-1.5 rounded-full bg-forest px-3 py-2 font-body text-xs font-bold text-white shadow-md transition-colors hover:bg-ink sm:px-4 sm:text-sm"
          >
            Saiba mais
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/70 text-ink backdrop-blur-md md:hidden"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-2 max-h-[calc(100svh-6rem)] w-full max-w-sm overflow-y-auto rounded-3xl border border-white/40 bg-white/85 p-3 shadow-xl backdrop-blur-xl md:hidden"
          >
            {MOBILE_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-4 py-3 font-body text-sm font-semibold text-ink/80 hover:bg-mint/30 hover:text-forest"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
