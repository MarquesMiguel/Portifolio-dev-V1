import SectionHeader from '../components/SectionHeader'
import SkillItem from '../components/SkillItem'
import skills from '../data/skills'
import vars from '../styles/vars'

export default function Skills() {
  return (
    <section style={{ padding: '88px 0', borderTop: `1px solid ${vars.border}` }}>
      <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 28px' }}>
        <SectionHeader label="ferramentas" title="O que eu uso" />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 2,
        }}>
          {skills.map(skill => (
            <SkillItem key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
