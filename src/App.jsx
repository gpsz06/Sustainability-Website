import CursorReveal from './components/CursorReveal'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import OQueE from './sections/OQueE'
import Importancia from './sections/Importancia'
import GuiaDescarte from './sections/GuiaDescarte'
import TresRs from './sections/TresRs'
import IdeiasCarousel from './sections/IdeiasCarousel'
import Curiosidades from './sections/Curiosidades'
import Feedback from './sections/Feedback'

/**
 * Raiz da landing page.
 * Monta, em ordem: cursor global, navbar, as 8 seções (dentro de <main>) e o rodapé.
 * Não recebe props.
 */
export default function App() {
  return (
    <>
      <CursorReveal />
      <Navbar />
      <main>
        <Hero />
        <OQueE />
        <Importancia />
        <GuiaDescarte />
        <TresRs />
        <IdeiasCarousel />
        <Curiosidades />
        <Feedback />
      </main>
      <Footer />
    </>
  )
}
