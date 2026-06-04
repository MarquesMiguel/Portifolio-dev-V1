import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'
import vars from '../styles/vars'

export default function Projects() {
  return (
    <section id="projetos" style={{ padding: '88px 0', borderTop: `1px solid ${vars.border}` }}>
      <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 28px' }}>
        <SectionHeader label="trabalhos" title="Projetos selecionados" />
        <div style={{ display: 'grid', gap: 2 }}>
          {projects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
