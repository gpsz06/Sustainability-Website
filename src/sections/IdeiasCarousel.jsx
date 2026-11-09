import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Sprout,
  Package,
  Image as ImageIcon,
  Flower2,
  PencilRuler,
} from 'lucide-react'
import RevealText from '../components/RevealText'
import { ScrollReveal, RevealItem } from '../components/ScrollReveal'
import imgPapelao from '../assets/ideias/organizador_papelao.png'
import imgPoteVidro from '../assets/ideias/pote_vidro.png'
import imgVasoCaixaDeLeite from '../assets/ideias/vasos_caixadeleite.png'
import imgVasosLata from '../assets/ideias/vasos_lata.png'
import imgQuadroPapelao from '../assets/ideias/quadro_papelao.png'


const IDEIAS = [
  {
    id: 'papelao',
    tag: 'Papelão',
    title: 'Organizador de Mesa',
    icon: Package,
    gradient: 'from-forest to-mint',
    image: imgPapelao,
    position: 'center 62%',
    text: 'Transforme caixas de papelão esquecidas em organizadores práticos e elegantes para o seu escritório ou área de estudo.',
    steps: [
      'Corte o papelão nas medidas desejadas',
      'Cole as partes formando compartimentos em alturas diferentes',
      'Pinte de preto para um acabamento sofisticado',
    ],
  },
  {
    id: 'vidro',
    tag: 'Vidro',
    title: 'Porta-canetas de Vidro',
    icon: PencilRuler,
    gradient: 'from-slateblue to-ink',
    image: imgPoteVidro,
    position: 'center 48%',
    text: 'Potes de vidro ganham cor e personalidade e viram porta-canetas para a sua mesa.',
    steps: [
      'Lave bem o pote de vidro e deixe secar',
      'Pinte a parte de cima com tinta amarela, deixando-a escorrer em gotas',
      'Contorne com caneta preta e faça brilhos brancos para dar volume',
    ],
  },
  {
    id: 'leite',
    tag: 'Cartonada',
    title: 'Sementeira de Caixa de Leite',
    icon: Sprout,
    gradient: 'from-mint to-slateblue',
    image: imgVasoCaixaDeLeite,
    position: 'center 58%',
    text: 'Use caixas de leite deitadas para criar sementeiras ideais para o peitoril da janela.',
    steps: [
      'Lave bem a caixa e corte a lateral de cima',
      'Faça pequenos furos no fundo para a água escoar',
      'Encha de terra e plante as suas ervas, como o alecrim',
    ],
  },
  {
    id: 'metal',
    tag: 'Metal',
    title: 'Vasos de Latas',
    icon: Flower2,
    gradient: 'from-ink to-forest',
    image: imgVasosLata,
    position: 'center 62%',
    text: 'Reaproveite latas de metal pintando-as com cores vibrantes para criar vasos cheios de vida.',
    steps: [
      'Lave bem a lata e faça furos no fundo',
      'Pinte com tinta colorida e crie padrões, como bolinhas e flores',
      'Adicione terra e plante as suas flores',
    ],
  },
  {
    id: 'papelao-moldura',
    tag: 'Papelão',
    title: 'Molduras de Papelão',
    icon: ImageIcon,
    gradient: 'from-forest to-mint',
    image: imgQuadroPapelao,
    position: 'center 72%',
    text: 'Corte pedaços de caixas de papelão e crie molduras personalizadas para decorar as suas paredes.',
    steps: [
      'Corte o papelão em formato de moldura',
      'Pinte de preto para um acabamento elegante',
      'Cole o seu desenho ou frase no centro',
    ],
  },
]

function IconBadge({ icon: Icon }) {
  return (
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest text-white shadow-lg">
      <Icon size={22} strokeWidth={2.2} />
    </span>
  )
}

export default function IdeiasCarousel() {
  const [active, setActive] = useState(0)

  return (
    <section id="ideias" className="bg-white px-6 py-28 sm:py-36">
      <ScrollReveal className="mx-auto max-w-6xl">
        {/* Cabeçalho */}
        <div className="mx-auto max-w-4xl text-center">
          <RevealItem>
            <span className="inline-block rounded-full bg-forest px-4 py-1.5 font-body text-xs font-extrabold uppercase tracking-widest text-white">
              Mãos na Massa
            </span>
          </RevealItem>

          <RevealItem className="mt-6">
            <h2 className="flex flex-wrap items-center justify-center gap-x-3">
              <RevealText
                className="font-title text-4xl font-extrabold uppercase leading-tight tracking-tight text-ink sm:text-6xl"
                revealClass="text-forest"
              >
                Inspiração
              </RevealText>
              <RevealText
                className="font-serif text-4xl font-normal lowercase italic text-forest sm:text-6xl"
                revealClass="text-ink/70"
              >
                circular
              </RevealText>
            </h2>
          </RevealItem>

          <RevealItem className="mt-8">
            <RevealText
              as="p"
              className="mx-auto max-w-3xl font-body text-lg leading-relaxed text-ink/75 sm:text-2xl"
              revealClass="text-forest"
            >
              Veja como as embalagens do dia a dia podem se transformar em
              soluções criativas, úteis e decorativas para a sua casa. Coloque
              as mãos na massa!
            </RevealText>
          </RevealItem>
        </div>

        <RevealItem className="mt-16 flex h-[860px] flex-col gap-3 sm:h-[720px] md:h-[480px] md:flex-row">
          {IDEIAS.map((idea, i) => {
            const Icon = idea.icon
            const isActive = active === i

            return (
              <motion.article
                key={idea.id}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                animate={{ flexGrow: isActive ? 6 : 1 }}
                transition={{ type: 'spring', stiffness: 130, damping: 20 }}
                style={{ flexBasis: 0 }}
                className={`relative min-h-0 min-w-0 cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br ${idea.gradient} text-white`}
              >
                <img
                  src={idea.image}
                  alt={idea.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: idea.position }}
                />

                <div
                  className={`absolute inset-0 bg-ink transition-opacity duration-500 ${
                    isActive ? 'opacity-10' : 'opacity-60'
                  }`}
                />

                <div
                  className={`pointer-events-none absolute inset-x-0 bottom-0 h-[85%] bg-gradient-to-t from-ink/95 via-ink/65 to-transparent transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <AnimatePresence>
                  {!isActive && (
                    <motion.div
                      key="label"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-row items-center justify-center gap-3 md:flex-col md:gap-5"
                    >
                      <IconBadge icon={Icon} />
                      <span className="whitespace-nowrap font-title text-sm font-bold uppercase tracking-widest drop-shadow-md md:rotate-180 md:[writing-mode:vertical-rl]">
                        {idea.tag}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>


                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: 0.25 } }}
                      exit={{ opacity: 0, transition: { duration: 0.1 } }}
                      className="absolute inset-x-0 bottom-0 p-6 sm:p-8"
                    >
                      <div className="flex items-center gap-3">
                        <IconBadge icon={Icon} />
                        <span className="inline-block rounded-full bg-forest px-3 py-1 font-body text-xs font-extrabold uppercase tracking-widest text-white">
                          {idea.tag}
                        </span>
                      </div>
                      <h3 className="mt-3 font-title text-2xl font-bold drop-shadow sm:text-3xl">
                        {idea.title}
                      </h3>
                      <p className="mt-2 max-w-md font-body text-sm leading-relaxed text-white/90">
                        {idea.text}
                      </p>
                      <ol className="mt-4 space-y-1 font-body text-[13px] font-semibold sm:text-sm">
                        {idea.steps.map((s, k) => (
                          <li key={s} className="flex gap-2">
                            <span className="font-extrabold text-forest">{k + 1}.</span>
                            {s}
                          </li>
                        ))}
                      </ol>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            )
          })}
        </RevealItem>
      </ScrollReveal>
    </section>
  )
}
