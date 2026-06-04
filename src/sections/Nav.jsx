import vars from '../styles/vars'

const links = [
  ['#projetos', 'projetos'],
  ['#sobre',    'sobre'],
  ['#contato',  'contato'],
]

export default function Nav() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      borderBottom: `1px solid ${vars.border}`,
      background: 'rgba(14,15,13,0.88)',
      backdropFilter: 'blur(12px)',
    }}>
      <div style={{
        maxWidth: 880,
        margin: '0 auto',
        padding: '0 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 56,
      }}>
        <a href="#" style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 13,
          color: vars.accent,
          letterSpacing: '0.04em',
          textDecoration: 'none',
        }}>
          miguel.marques
        </a>

        <ul style={{ display: 'flex', gap: 28, listStyle: 'none' }}>
          {links.map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                style={{ fontSize: 13, color: vars.muted, textDecoration: 'none',
                  letterSpacing: '0.02em', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = vars.text}
                onMouseLeave={e => e.target.style.color = vars.muted}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
