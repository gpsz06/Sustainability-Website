import { Droplets, Leaf, Users, Zap } from 'lucide-react'
import RevealText from '../components/RevealText'
import { ScrollReveal, RevealItem } from '../components/ScrollReveal'


const PILARES = [
  {
    title: 'Preservação',
    text: 'Menos extração, mais conservação da natureza.',
    icon: Leaf,
    iconBg: 'bg-forest',
    iconColor: 'text-white',
  },
  {
    title: 'Clima',
    text: 'Prevenção direta da poluição em rios, oceanos e solos.',
    icon: Droplets,
    iconBg: 'bg-slateblue',
    iconColor: 'text-white',
  },
  {
    title: 'Eficiência',
    text: 'O ciclo reciclável consome uma fração da energia da produção original.',
    icon: Zap,
    iconBg: 'bg-neon',
    iconColor: 'text-ink',
  },
  {
    title: 'Impacto Social',
    text: 'Geração de empregos e fortalecimento de cooperativas locais.',
    icon: Users,
    iconBg: 'bg-mint',
    iconColor: 'text-ink',
  },
]

export default function Importancia() {
  return (
    <section id="importancia" className="bg-gray-50 px-6 py-28 sm:py-36">
      <ScrollReveal className="mx-auto max-w-6xl">
        <RevealItem className="flex justify-center text-center">
          <h2 className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3">
            <RevealText
              className="font-title text-4xl font-extrabold uppercase tracking-tight text-ink sm:text-5xl"
              revealClass="text-forest"
            >
              Por Que
            </RevealText>
            <RevealText
              className="font-serif text-4xl font-normal lowercase italic text-forest sm:text-5xl"
              revealClass="text-ink/70"
            >
              importa?
            </RevealText>
          </h2>
        </RevealItem>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILARES.map(({ title, text, icon: Icon, iconBg, iconColor }) => (
            <RevealItem
              key={title}
              className="group rounded-3xl border border-ink/5 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <span
                className={`grid h-14 w-14 place-items-center rounded-2xl border-2 border-ink ${iconBg} ${iconColor} shadow-[3px_3px_0_0_var(--color-ink)] transition-transform duration-300 group-hover:rotate-6`}
              >
                <Icon size={26} strokeWidth={2.2} />
              </span>
              <h3 className="mt-6 font-title text-xl font-bold text-ink">{title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">
                {text}
              </p>
            </RevealItem>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
