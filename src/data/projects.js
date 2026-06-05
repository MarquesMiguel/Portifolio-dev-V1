import vars from '../styles/vars'

const projects = [
  {
    id: 'rotario',
    type: 'dados · algoritmos · hackathon',
    name: 'RotaRio',
    desc: 'Recomendação de rotas de transporte público mais seguras no Rio de Janeiro, cruzando dados de ocorrências criminais do Fogo Cruzado com a malha de ônibus GTFS. Desenvolvido para a UFRJ Analytica.',
    tags: ['Python', 'GTFS', 'GeoPandas', 'algoritmo de rota'],
    href: 'https://github.com/MarquesMiguel/RotaRio',
    accent: vars.accent3,
  },
  {
    id: 'newton',
    type: 'api · web · banco de dados',
    name: 'Newton Questions API',
    desc: 'Quiz interativo temático com Isaac Newton — interface em React conectada a uma API Flask com banco SQLite. Construído do zero em 24 horas como projeto escolar solo.',
    tags: ['React', 'Flask', 'SQLite', 'REST API'],
    href: 'https://github.com/MarquesMiguel/newton-questions-API',
    accent: vars.accent,
  },
  {
    id: 'wip',
    type: 'automação · em breve',
    name: 'Projeto em construção',
    desc: 'Automação de processos para pequenos negócios. Se você tem uma tarefa repetitiva que toma tempo — planilha, relatório, agendamento — entre em contato. Posso resolver isso.',
    tags: ['Python', 'automação', 'sob medida'],
    accent: vars.accent2,
    comingSoon: true,
  },
]

export default projects
