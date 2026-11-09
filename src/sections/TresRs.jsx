import { Recycle, Repeat, TrendingDown } from 'lucide-react'
import RevealText from '../components/RevealText'
import { ScrollReveal, RevealItem } from '../components/ScrollReveal'


const RS = [
  {
    n: '01',
    title: 'Reduzir',
    text: 'O melhor lixo é aquele que não é gerado. Consuma com propósito e evite descartáveis.',
    icon: TrendingDown,
    accent: 'text-neon',
  },
  {
    n: '02',
    title: 'Reutilizar',
    text: 'Criatividade antes do descarte. Dê novas funções e prolongue a vida útil dos objetos.',
    icon: Repeat,
    accent: 'text-mint',
  },
  {
    n: '03',
    title: 'Reciclar',
    text: 'O último passo lógico. Transformar o que sobrou em matéria-prima para novos produtos.',
    icon: Recycle,
    accent: 'text-slateblue',
  },
]


export default function TresRs() {
  return (
    <section id="tres-rs" className="bg-ink px-6 py-28 text-white sm:py-36">
      <ScrollReveal className="mx-auto max-w-6xl">
        <RevealItem className="text-center">
          <h2 className="flex flex-wrap items-center justify-center gap-x-3">
            <RevealText
              className="font-title text-4xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-6xl"
              revealClass="text-neon"
            >
              Os 3R's da
            </RevealText>
            <RevealText
              className="font-serif text-4xl font-normal lowercase italic text-forest sm:text-6xl"
              revealClass="text-neon"
            >
              sustentabilidade
            </RevealText>
          </h2>
        </RevealItem>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {RS.map(({ n, title, text, icon: Icon, accent }) => (
            <RevealItem
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-mint/60 hover:bg-white/10"
            >
              <span className="absolute -right-2 -top-4 font-title text-8xl font-extrabold text-white/5 transition-colors duration-300 group-hover:text-white/10">
                {n}
              </span>
              <Icon size={40} strokeWidth={1.8} className={accent} />
              <h3 className="mt-8 font-title text-3xl font-bold">{title}</h3>
              <p className="mt-3 font-body leading-relaxed text-white/70">{text}</p>
            </RevealItem>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
