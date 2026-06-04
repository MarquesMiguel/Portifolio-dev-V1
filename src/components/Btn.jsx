import { useState } from 'react'
import vars from '../styles/vars'

export default function Btn({ href, primary, children }) {
  const [hover, setHover] = useState(false)

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '12px 24px',
    fontSize: 14,
    fontWeight: 500,
    borderRadius: 3,
    textDecoration: 'none',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.2s',
  }

  const style = primary
    ? {
        ...base,
        background: hover ? '#d8ff70' : vars.accent,
        color: '#0e0f0d',
        transform: hover ? 'translateY(-1px)' : 'none',
      }
    : {
        ...base,
        background: hover ? vars.bg3 : 'transparent',
        color: vars.text,
        border: `1px solid ${hover ? vars.muted : vars.border}`,
      }

  return (
    <a
      href={href}
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </a>
  )
}
