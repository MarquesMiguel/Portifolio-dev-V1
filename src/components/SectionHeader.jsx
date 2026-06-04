import useReveal from '../hooks/useReveal'
import vars from '../styles/vars'

export default function SectionHeader({ label, title }) {
  const labelReveal = useReveal()
  const titleReveal = useReveal()

  return (
    <>
      <p
        ref={labelReveal.ref}
        style={{
          ...labelReveal.style,
          fontFamily: "'DM Mono', monospace",
          fontSize: 11,
          color: vars.muted,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: 12,
        }}
      >
        {label}
      </p>
      <h2
        ref={titleReveal.ref}
        style={{
          ...titleReveal.style,
          fontFamily: "'DM Serif Display', serif",
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontWeight: 400,
          lineHeight: 1.15,
          marginBottom: 48,
        }}
      >
        {title}
      </h2>
    </>
  )
}
