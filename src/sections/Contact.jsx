import Reveal from '../components/Reveal'
import Btn from '../components/Btn'
import vars from '../styles/vars'

export default function Contact({ onOpenModal }) {
  return (
    <section id="contato" style={{ padding: '88px 0', borderTop: `1px solid ${vars.border}` }}>
      <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 28px' }}>
        <Reveal>
          <div style={{
            background: vars.bg2,
            border: `1px solid ${vars.border}`,
            borderRadius: 4,
            padding: '56px 48px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse at 50% 0%, rgba(200,240,96,0.06) 0%, transparent 60%)',
              pointerEvents: 'none',
            }} />

            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 400, marginBottom: 16,
            }}>
              Tem um problema pra resolver?
            </h2>

            <p style={{
              color: vars.muted, fontSize: 15,
              maxWidth: 420, margin: '0 auto 36px', fontWeight: 300,
            }}>
              Me conta o que você precisa. Se for algo que Python resolve, a gente encontra um jeito.
            </p>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={onOpenModal}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '12px 24px', fontSize: 14, fontWeight: 500,
                  borderRadius: 3, cursor: 'pointer', border: 'none',
                  background: vars.accent, color: '#0e0f0d',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.target.style.background = '#d8ff70'; e.target.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { e.target.style.background = vars.accent; e.target.style.transform = 'none' }}
              >
                Falar sobre seu projeto →
              </button>
              <Btn href="https://www.linkedin.com/in/miguelmarquesdev/">LinkedIn</Btn>
              <Btn href="https://github.com/MarquesMiguel">GitHub</Btn>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
