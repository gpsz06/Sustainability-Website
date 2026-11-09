import RevealText from '../components/RevealText'
import { ScrollReveal, RevealItem } from '../components/ScrollReveal'

const PASSOS = [
  {
    n: 1,
    title: 'Separe',
    text: 'Isole os recicláveis (plástico, papel, metal e vidro) do lixo orgânico.',
  },
  {
    n: 2,
    title: 'Higienize',
    text: 'Um enxágue rápido evita odores, afasta insetos e viabiliza a reciclagem.',
  },
  {
    n: 3,
    title: 'Repense',
    text: 'Questione-se antes de descartar: "Isso pode ter uma nova utilidade?".',
  },
  {
    n: 4,
    title: 'Destine',
    text: 'Fique atento aos dias de coleta seletiva do seu condomínio ou utilize os Pontos de Entrega Voluntária (PEVs).',
  },
]

export default function GuiaDescarte() {
  return (
    <section id="guia" className="bg-white px-6 py-28 sm:py-36">
      <ScrollReveal className="mx-auto max-w-6xl">
        <RevealItem className="text-center">
          <h2 className="flex flex-wrap items-center justify-center gap-x-3">
            <RevealText
              className="font-title text-3xl font-extrabold uppercase leading-tight tracking-tight text-ink min-[380px]:text-4xl sm:text-5xl"
              revealClass="text-forest"
            >
              Descarte Inteligente
            </RevealText>
            <RevealText
              className="font-serif text-4xl font-normal lowercase italic text-forest sm:text-5xl"
              revealClass="text-ink/70"
            >
              em 4 passos
            </RevealText>
          </h2>
        </RevealItem>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PASSOS.map((p) => (
            <RevealItem
              key={p.n}
              className="group flex flex-col rounded-3xl border border-forest/30 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-forest hover:shadow-xl"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-title text-6xl font-extrabold leading-none text-forest transition-colors duration-300 group-hover:text-mint">
                  {p.n}
                </span>
                <h3 className="font-title text-xl font-bold text-ink">{p.title}</h3>
              </div>
              <p className="mt-5 font-body text-sm leading-relaxed text-ink/70">
                {p.text}
              </p>
            </RevealItem>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
