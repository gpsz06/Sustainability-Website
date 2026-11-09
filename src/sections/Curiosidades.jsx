import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import { Droplet, Hourglass, Infinity as InfinityIcon } from 'lucide-react'
import RevealText from '../components/RevealText'
import { ScrollReveal, RevealItem } from '../components/ScrollReveal'


function CountUp({ to }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return undefined
    const controls = animate(0, to, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (latest) => setValue(Math.round(latest)),
    })
    return () => controls.stop()
  }, [inView, to])

  return <span ref={ref}>{value.toLocaleString('pt-BR')}</span>
}

const DADOS = [
  {
    icon: InfinityIcon,
    big: <span className="leading-none">∞</span>,
    unit: 'Infinito',
    text: 'Uma lata de alumínio pode ser reciclada infinitas vezes sem perder a qualidade.',
  },
  {
    icon: Hourglass,
    big: <CountUp to={400} />,
    unit: 'anos',
    text: 'É o tempo que o plástico comum leva para desaparecer no meio ambiente.',
  },
  {
    icon: Droplet,
    big: <CountUp to={10000} />,
    unit: 'litros',
    text: 'É a quantidade de água economizada, além de 20 árvores salvas, a cada 1 tonelada de papel reciclado.',
  },
]

export default function Curiosidades() {
  return (
    <section id="curiosidades" className="bg-forest px-6 py-28 text-white sm:py-36">
      <ScrollReveal className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <RevealItem className="text-center">
            <h2 className="flex flex-wrap items-center justify-center gap-x-3">
              <RevealText
                className="font-title text-4xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-6xl"
                revealClass="text-neon"
              >
                O Impacto
              </RevealText>
              <RevealText
                className="font-serif text-4xl font-normal lowercase italic text-neon sm:text-6xl"
                revealClass="text-white"
              >
                em números
              </RevealText>
            </h2>
          </RevealItem>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {DADOS.map(({ icon: Icon, big, unit, text }) => (
            <RevealItem
              key={unit}
              className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2 sm:p-8"
            >
              <Icon size={28} className="text-neon" />
              <p className="mt-6 font-title text-5xl font-extrabold text-white sm:text-6xl xl:text-7xl">
                {big}
              </p>
              <p className="mt-1 font-title text-xl font-bold text-neon">{unit}</p>
              <p className="mt-4 font-body text-sm leading-relaxed text-white/85">
                {text}
              </p>
            </RevealItem>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
