import RevealText from '../components/RevealText'
import { ScrollReveal, RevealItem } from '../components/ScrollReveal'


export default function OQueE() {
  return (
    <section id="o-que-e" className="bg-white px-6 py-28 sm:py-36">
      <ScrollReveal className="mx-auto max-w-4xl">
        <RevealItem>
          <span className="inline-block rounded-full bg-forest px-4 py-1.5 font-body text-xs font-extrabold uppercase tracking-widest text-white">
            O Que É?
          </span>
        </RevealItem>

        <RevealItem className="mt-6">
          <h2 className="flex flex-wrap items-center gap-x-3">
            <RevealText
              className="font-title text-3xl font-extrabold uppercase leading-tight tracking-tight text-ink min-[380px]:text-4xl sm:text-6xl"
              revealClass="text-forest"
            >
              Reinventando o
            </RevealText>
            <RevealText
              className="font-serif text-4xl font-normal lowercase italic text-forest sm:text-6xl"
              revealClass="text-ink/70"
            >
              descarte
            </RevealText>
          </h2>
        </RevealItem>

        <RevealItem className="mt-8">
          <RevealText
            as="p"
            className="max-w-3xl font-body text-lg leading-relaxed text-ink/75 sm:text-2xl"
            revealClass="text-forest"
          >
            A reciclagem vai além de separar o lixo: é a inteligência de dar uma
            nova vida aos materiais. Ao reintroduzir plásticos, vidros, metais e
            papéis na cadeia produtiva, poupamos recursos naturais, reduzimos
            aterros e impulsionamos a economia circular.
          </RevealText>
        </RevealItem>
      </ScrollReveal>
    </section>
  )
}
