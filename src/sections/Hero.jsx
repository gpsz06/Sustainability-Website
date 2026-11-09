import { useRef, useState } from 'react'
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion'
import { ArrowRight, RotateCcw } from 'lucide-react'
import heroBg from '../assets/hero-bg.jpg'
import RevealText from '../components/RevealText'
import { ScrollReveal, RevealItem } from '../components/ScrollReveal'
import PaperBall from '../components/PaperBall'
import RecycleBin from '../components/RecycleBin'


const BALLS = [
  { id: 1, pos: 'left-[3%] top-[6%] sm:left-[6%] sm:top-[22%]', rotate: -12 },
  { id: 2, pos: 'left-[24%] top-[6%] sm:left-[22%] sm:top-[60%]', rotate: 18 },
  { id: 3, pos: 'left-[45%] top-[6%] sm:left-[36%] sm:top-[18%]', rotate: 6 },
  { id: 4, pos: 'left-[3%] top-[44%] sm:left-[12%] sm:top-[70%]', rotate: -25 },
  { id: 5, pos: 'left-[24%] top-[44%] sm:left-[48%] sm:top-[52%]', rotate: 30 },
]

const BIN_HIT_PADDING = 24

/**
 * Bolinha de papel arrastável. Se for solta sobre a lixeira, é "reciclada";
 * caso contrário, volta à posição inicial.
 *
 * @param {Object} props
 * @param {{id: number, pos: string, rotate: number}} props.ball Dados da bolinha.
 * @param {import('react').RefObject<HTMLElement>} props.binRef Ref da lixeira (alvo).
 * @param {(id: number) => void} props.onCollect Chamado quando a bolinha cai na lixeira.
 * @param {(hot: boolean) => void} props.onHover Informa se a bolinha está sobre a lixeira durante o arrasto.
 */
function DraggableBall({ ball, binRef, onCollect, onHover }) {
  const ref = useRef(null)
  const controls = useAnimationControls()

  const isOverBin = () => {
    if (!ref.current || !binRef.current) return false
    const b = ref.current.getBoundingClientRect()
    const t = binRef.current.getBoundingClientRect()
    const cx = b.left + b.width / 2
    const cy = b.top + b.height / 2
    return (
      cx > t.left - BIN_HIT_PADDING &&
      cx < t.right + BIN_HIT_PADDING &&
      cy > t.top - BIN_HIT_PADDING &&
      cy < t.bottom + BIN_HIT_PADDING
    )
  }

  const handleDragEnd = () => {
    onHover(false)
    if (isOverBin()) {
      controls.start({ scale: 0, opacity: 0, transition: { duration: 0.25 } })
      onCollect(ball.id)
    } else {
      controls.start({
        x: 0,
        y: 0,
        transition: { type: 'spring', stiffness: 200, damping: 18 },
      })
    }
  }

  return (
    <div className={`absolute ${ball.pos}`}>
      <motion.div
        ref={ref}
        drag
        dragMomentum={false}
        dragElastic={0.2}
        animate={controls}
        initial={{ scale: 0, opacity: 0, rotate: ball.rotate }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileDrag={{ scale: 1.2, zIndex: 50 }}
        onDrag={() => onHover(isOverBin())}
        onDragEnd={handleDragEnd}
        className="relative z-20 w-fit touch-none select-none"
        style={{ cursor: 'grab' }}
      >
        <div className="scale-[0.6] sm:scale-100">
          <PaperBall size={60} />
        </div>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  const binRef = useRef(null)
  const [collected, setCollected] = useState([])
  const [binHot, setBinHot] = useState(false)
  const [round, setRound] = useState(0)

  const done = collected.length === BALLS.length

  const handleCollect = (id) =>
    setCollected((prev) => (prev.includes(id) ? prev : [...prev, id]))

  const reset = () => {
    setCollected([])
    setRound((r) => r + 1)
  }

  return (
    <section
      id="inicio"
      className="relative flex min-h-svh flex-col overflow-hidden"
    >
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-bottom"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/20 to-transparent" />

      <ScrollReveal
        className="relative z-10 mx-auto max-w-4xl px-6 pt-36 text-center"
        amount={0.1}
      >
        <RevealItem>
          <h1 className="flex flex-wrap items-center justify-center gap-x-3">
            <RevealText
              className="font-title text-4xl font-extrabold uppercase leading-tight tracking-tight text-ink sm:text-6xl"
              revealClass="text-forest"
            >
              O
            </RevealText>
            <RevealText
              className="font-serif text-4xl font-normal lowercase italic text-forest sm:text-6xl"
              revealClass="text-ink"
            >
              Futuro
            </RevealText>
            <RevealText
              className="font-title text-4xl font-extrabold uppercase leading-tight tracking-tight text-ink sm:text-6xl"
              revealClass="text-forest"
            >
              é reciclável
            </RevealText>
          </h1>
        </RevealItem>
        <RevealItem>
          <RevealText
            as="p"
            className="mx-auto mt-6 max-w-2xl font-body text-base font-semibold leading-relaxed text-ink/70 sm:text-lg"
            revealClass="text-forest"
          >
            Pequenas atitudes geram grandes impactos. Descubra como transformar o
            descarte consciente em um hábito simples e essencial. Cuidar do meio
            ambiente é preservar o amanhã.
          </RevealText>
        </RevealItem>
      </ScrollReveal>

      {/* Minijogo */}
      <div className="relative z-10 mt-auto h-[48vh] min-h-[340px] w-full">
        {BALLS.map((ball) =>
          collected.includes(ball.id) ? null : (
            <DraggableBall
              key={`${round}-${ball.id}`}
              ball={ball}
              binRef={binRef}
              onCollect={handleCollect}
              onHover={setBinHot}
            />
          ),
        )}

        {/* Lixeira */}
        <motion.div
          animate={
            binHot
              ? { scale: 1.12, rotate: [0, -4, 4, -3, 0] }
              : { scale: 1, rotate: 0 }
          }
          transition={{ duration: 0.4 }}
          className="absolute bottom-[16%] right-[5%] z-10 sm:right-[8%]"
        >
          <div
            ref={binRef}
            className="origin-bottom-right scale-75 sm:scale-100"
          >
            <RecycleBin width={130} />
          </div>
        </motion.div>

        {/* Placar */}
        <div className="absolute right-4 top-2 rounded-full bg-white/80 px-4 py-1.5 font-body text-sm font-bold text-forest shadow backdrop-blur-md">
          ♻ {collected.length}/{BALLS.length}
        </div>

        <AnimatePresence>
          {done && (
            <div className="pointer-events-none absolute inset-x-0 top-[30%] z-30 flex justify-center px-4">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                className="pointer-events-auto rounded-3xl bg-white/90 px-8 py-6 text-center shadow-2xl backdrop-blur-xl"
              >
                <p className="font-title text-xl font-bold text-forest">
                  Mandou bem! Tudo reciclado. 🌱
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mx-auto mt-3 flex items-center gap-2 rounded-full bg-ink px-5 py-2 font-body text-sm font-bold text-white transition-colors hover:bg-forest"
                >
                  <RotateCcw size={14} /> Jogar de novo
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <div className="absolute inset-x-0 bottom-6 flex justify-center px-4">
          <span className="flex items-center gap-2 rounded-full bg-ink/60 px-5 py-2 font-body text-sm font-bold text-white backdrop-blur-md">
            Arraste o papel até à lixeira
            <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </section>
  )
}
