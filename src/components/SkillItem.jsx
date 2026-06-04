import useReveal from '../hooks/useReveal'
import vars from '../styles/vars'

export default function SkillItem({ icon, name, note }) {
  const { ref, style } = useReveal()

  return (
    <div
      ref={ref}
      style={{
        ...style,
        background: vars.bg2,
        border: `1px solid ${vars.border}`,
        padding: 24,
        borderRadius: 3,
      }}
    >
      <div style={{ fontSize: 22, marginBottom: 12 }}>{icon}</div>
      <div style={{ fontWeight: 500, fontSize: 14, marginBottom: 4 }}>{name}</div>
      <div style={{ fontSize: 12, color: vars.muted }}>{note}</div>
    </div>
  )
}
