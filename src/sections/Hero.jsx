import Btn from '../components/Btn'
import vars from '../styles/vars'

const metrics = [
  ['3+',  'projetos entregues'],
  ['Rio', 'de Janeiro, BR'],
  ['24h', 'tempo de resposta'],
]

export default function Hero({ onOpenModal }) {
  return (
    <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 28px', position: 'relative', zIndex: 1 }}>
      <div style={{ padding: '148px 0 100px' }}>

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontFamily: "'DM Mono', monospace", fontSize: 12,
          color: vars.accent, border: `1px solid ${vars.accent}`,
          padding: '4px 12px', borderRadius: 2, marginBottom: 28,
          animation: 'fadein 0.6s 0.1s both',
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: vars.accent, display: 'inline-block',
            animation: 'pulse 2s infinite',
          }} />
          disponível para projetos
        </div>

        <h1 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 'clamp(48px, 8vw, 80px)',
          lineHeight: 1.05, fontWeight: 400,
          marginBottom: 8,
          animation: 'fadein 0.7s 0.2s both',
        }}>
          Resolvo problemas<br />
          com <em style={{ fontStyle: 'italic', color: vars.accent }}>Python.</em>
        </h1>

        <p style={{
          fontSize: 18, color: vars.muted, fontWeight: 300,
          maxWidth: 520, marginBottom: 48,
          animation: 'fadein 0.7s 0.35s both',
        }}>
          Automação, dados e sistemas web para negócios que precisam de resultado, não de complexidade.
        </p>

        <div style={{
          display: 'flex', gap: 16, flexWrap: 'wrap',
          animation: 'fadein 0.7s 0.5s both',
        }}>
          <button
            onClick={onOpenModal}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 24px', fontSize: 14, fontWeight: 500,
              borderRadius: 3, cursor: 'pointer', border: 'none',
              background: vars.accent, color: '#0e0f0d',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#d8ff70'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = vars.accent; e.currentTarget.style.transform = 'none' }}
          >
            Falar sobre seu projeto →
          </button>
          <Btn href="#projetos">Ver projetos</Btn>
        </div>

        <div style={{
          display: 'flex', gap: 48, marginTop: 72,
          paddingTop: 40, borderTop: `1px solid ${vars.border}`,
          animation: 'fadein 0.7s 0.65s both', flexWrap: 'wrap',
        }}>
          {metrics.map(([num, label]) => (
            <div key={label}>
              <div style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 36, color: vars.accent, lineHeight: 1,
              }}>
                {num}
              </div>
              <div style={{
                fontSize: 12, color: vars.muted, marginTop: 4,
                textTransform: 'uppercase', letterSpacing: '0.08em',
              }}>
                {label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
