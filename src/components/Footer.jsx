import { ScrollReveal, RevealItem } from './ScrollReveal'

const PINTEREST_LINKS = [
  { label: 'Porta-canetas de Vidro', href: 'https://pin.it/2CtuAVUad' },
  { label: 'Organizador de Mesa', href: 'https://pin.it/zcmW9Y8cK' },
  { label: 'Sementeira de Leite', href: 'https://pin.it/5GZ2ut6wF' },
  { label: 'Vasos de Latas', href: 'https://pin.it/4qdlmLt6d' },
  { label: 'Molduras de Papelão', href: 'https://pin.it/57Cs9X3eg' },
]

const USEFUL = [
  { label: 'O Que É?', href: '#o-que-e' },
  { label: 'Os 3Rs', href: '#tres-rs' },
  { label: 'Inspiração Circular', href: '#ideias' },
  { label: 'Deixe seu feedback', href: '#feedback' },
]

const TITLE_CLASS = 'font-title text-base font-bold text-white'
const LINK_CLASS = 'text-sm text-white/70 transition-colors hover:text-neon'


export default function Footer() {
  return (
    <footer className="bg-ink px-6 pb-8 pt-20 text-white">
      <ScrollReveal className="mx-auto max-w-6xl" amount={0.1}>
        <div className="grid gap-12 md:grid-cols-3">
          <RevealItem>
            <h3 className={TITLE_CLASS}>Sobre o projeto</h3>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-white/70">
              Projeto de conscientização criado para a nossa comunidade, mostrando
              como pequenas atitudes de descarte consciente geram grandes impactos.
            </p>
          </RevealItem>

          <RevealItem>
            <h3 className={TITLE_CLASS}>Inspirações Visuais Utilizadas</h3>
            <ul className="mt-4 space-y-3 font-body">
              {PINTEREST_LINKS.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={LINK_CLASS}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </RevealItem>

          <RevealItem>
            <h3 className={TITLE_CLASS}>Links úteis</h3>
            <ul className="mt-4 space-y-3 font-body">
              {USEFUL.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className={LINK_CLASS}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </RevealItem>
        </div>

        <RevealItem className="mt-16 border-t border-white/10 pt-6 text-center font-body text-xs text-white/50">
          © {new Date().getFullYear()} Sustainability. Desenvolvido por Guilherme
          Pereira de Souza.
        </RevealItem>
      </ScrollReveal>
    </footer>
  )
}
