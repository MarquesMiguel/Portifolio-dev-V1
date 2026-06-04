import SectionHeader from '../components/SectionHeader'
import InfoRow from '../components/InfoRow'
import Reveal from '../components/Reveal'
import vars from '../styles/vars'

const infoRows = [
  ['Localização',    'Rio de Janeiro, BR'],
  ['Formação',       'UFRJ — CMT'],
  ['Disponibilidade','freelance'],
  ['GitHub',         '@MarquesMiguel'],
  ['Idiomas',        'PT · EN'],
]

export default function About() {
  return (
    <section id="sobre" style={{ padding: '88px 0', borderTop: `1px solid ${vars.border}` }}>
      <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 28px' }}>
        <SectionHeader label="quem sou" title="Sobre mim" />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>

          <Reveal>
            <div>
              <p style={{ color: vars.muted, fontSize: 15, marginBottom: 16, fontWeight: 300 }}>
                Sou estudante de{' '}
                <strong style={{ color: vars.text, fontWeight: 500 }}>
                  Ciências Matemáticas e da Terra na UFRJ
                </strong>
                , com foco em programação e dados. Comecei com Python e hoje uso para resolver problemas reais — automação, análise de dados, sistemas web.
              </p>
              <p style={{ color: vars.muted, fontSize: 15, marginBottom: 16, fontWeight: 300 }}>
                Já desenvolvi projetos de{' '}
                <strong style={{ color: vars.text, fontWeight: 500 }}>
                  algoritmos de roteamento geográfico
                </strong>
                , APIs REST e interfaces interativas. Gosto de entender o problema antes de escrever a primeira linha de código.
              </p>
              <p style={{ color: vars.muted, fontSize: 15, fontWeight: 300 }}>
                Estou disponível para{' '}
                <strong style={{ color: vars.text, fontWeight: 500 }}>
                  projetos pequenos e médios
                </strong>
                , especialmente automações, scripts de dados e sistemas simples para negócios.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {infoRows.map(([label, value]) => (
                <InfoRow key={label} label={label} value={value} />
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
