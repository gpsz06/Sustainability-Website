import papelImg from '../assets/papel-bg.png'


const TRANSPARENT_MARGIN_SCALE = 1.8

export default function PaperBall({ size = 64 }) {
  const finalSize = size * TRANSPARENT_MARGIN_SCALE

  return (
    <img
      src={papelImg}
      alt=""
      className="object-contain"
      style={{ width: finalSize, height: finalSize }}
      draggable="false"
      aria-hidden="true"
    />
  )
}
