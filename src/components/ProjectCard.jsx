import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import vars from '../styles/vars'

export default function ProjectCard({ type, name, desc, tags, href, accent, comingSoon }) {
  const [hover, setHover] = useState(false)
  const { ref, style } = useReveal()

  return (
    <a
      ref={ref}
      href={comingSoon ? undefined : href}
      target={href ? '_blank' : undefined}
      rel="noreferrer"
      style={{
        ...style,
        background: hover ? vars.bg3 : vars.bg2,
        border: `1px solid ${hover ? vars.muted : vars.border}`,
        borderRadius: 4,
        padding: '36px 40px',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: 24,
        alignItems: 'start',
        textDecoration: 'none',
        color: 'inherit',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.2s, background 0.2s',
        cursor: comingSoon ? 'default' : 'pointer',
      }}
      onMouseEnter={() => !comingSoon && setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* barra lateral colorida */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0,
        width: 3,
        height: hover ? '100%' : 0,
        background: accent,
        transition: 'height 0.3s',
      }} />

      <div>
        <p style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 11,
          color: accent,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: 10,
        }}>
          {type}
        </p>

        <h3 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 22,
          fontWeight: 400,
          marginBottom: 10,
          lineHeight: 1.2,
        }}>
          {name}
        </h3>

        <p style={{ fontSize: 14, color: vars.muted, lineHeight: 1.6, maxWidth: 520 }}>
          {desc}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
          {tags.map(tag => (
            <span key={tag} style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              padding: '4px 10px',
              borderRadius: 2,
              background: vars.bg3,
              color: vars.muted,
              border: `1px solid ${vars.border}`,
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div style={{
        fontSize: 20,
        color: comingSoon ? vars.border : (hover ? accent : vars.muted),
        transition: 'color 0.2s, transform 0.2s',
        marginTop: 4,
        transform: hover && !comingSoon ? 'translate(3px, -3px)' : 'none',
      }}>
        ↗
      </div>
    </a>
  )
}
