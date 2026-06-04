import useReveal from '../hooks/useReveal'

export default function Reveal({ children, delay = 0 }) {
  const { ref, style } = useReveal()

  return (
    <div
      ref={ref}
      style={{ ...style, transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
