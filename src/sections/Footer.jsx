import vars from '../styles/vars'

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${vars.border}`, padding: '32px 0' }}>
      <div style={{
        maxWidth: 880, margin: '0 auto', padding: '0 28px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <p style={{ fontSize: 12, color: vars.muted, fontFamily: "'DM Mono', monospace" }}>
          © 2025 Miguel Marques
        </p>
        <p style={{ fontSize: 12, color: vars.muted, fontFamily: "'DM Mono', monospace" }}>
          feito com Python e boas intenções
        </p>
      </div>
    </footer>
  )
}
