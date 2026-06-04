import vars from '../styles/vars'

export default function InfoRow({ label, value }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '14px 20px',
      background: vars.bg2,
      border: `1px solid ${vars.border}`,
      borderRadius: 3,
      fontSize: 13,
    }}>
      <span style={{ color: vars.muted }}>{label}</span>
      <span style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: 12,
        color: vars.accent,
      }}>
        {value}
      </span>
    </div>
  )
}
