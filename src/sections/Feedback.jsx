import { ArrowUpRight } from 'lucide-react'
import RevealText from '../components/RevealText'
import { ScrollReveal, RevealItem } from '../components/ScrollReveal'


const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdtwMtUNHz0taOoFFGHDRAlm5H0fb2QHNtYepSsWogIsWjs-g/viewform?usp=publish-editor'

export default function Feedback() {
  return (
    <section id="feedback" className="bg-white px-6 py-28 sm:py-36">
      <ScrollReveal className="mx-auto max-w-5xl">
        <RevealItem className="relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-16 text-center sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-forest/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-mint/20 blur-3xl" />

          <div className="relative">
            <h2 className="flex flex-wrap items-center justify-center gap-x-3">
              <RevealText
                className="font-title text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl"
                revealClass="text-neon"
              >
                Sua voz faz a
              </RevealText>
              <RevealText
                className="font-serif text-4xl font-normal lowercase italic text-neon sm:text-5xl"
                revealClass="text-white"
              >
                diferença
              </RevealText>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-white/75">
              Este projeto foi desenvolvido para a nossa comunidade. O conteúdo
              ajudou você a repensar seus hábitos de descarte? Deixe sua sugestão e
              nos ajude a melhorar!
            </p>

            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-neon px-6 py-3.5 text-center font-body text-sm font-extrabold text-ink shadow-[0_0_0_0_rgba(231,253,39,0.6)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_6px_rgba(231,253,39,0.35)] sm:px-8 sm:py-4 sm:text-base"
            >
              Deixar meu feedback
              <ArrowUpRight
                size={20}
                className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </RevealItem>
      </ScrollReveal>
    </section>
  )
}
