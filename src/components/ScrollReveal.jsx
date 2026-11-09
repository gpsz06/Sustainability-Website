import { motion } from 'framer-motion'


const container = (stagger, delay) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
})

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export function ScrollReveal({
  as = 'div',
  children,
  className = '',
  stagger = 0.12,
  delay = 0.05,
  amount = 0.2,
  ...rest
}) {
  const Component = motion[as] ?? motion.div
  return (
    <Component
      variants={container(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  )
}

export function RevealItem({ as = 'div', children, className = '', ...rest }) {
  const Component = motion[as] ?? motion.div
  return (
    <Component variants={item} className={className} {...rest}>
      {children}
    </Component>
  )
}
