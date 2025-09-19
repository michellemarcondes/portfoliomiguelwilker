const Projects = () => {
  const projects = [
    {
      id: 1,
      image: 'ACENDERLED.png',
      title: 'Circuito Eletrônico - Acender LED',
      description: 'Projeto de circuito eletrônico desenvolvido no Tinkercad para acionamento de LED. Demonstra conceitos básicos de eletrônica, incluindo uso de resistores, botões e fontes de energia.'
    },
    {
      id: 2,
      image: 'AJUDAIDOSOTELA.png',
      title: 'Projeto de Conclusão de Curso - Ajuda ao Idoso',
      description: 'Aplicativo mobile desenvolvido no MIT App Inventor como Trabalho de Conclusão de Curso. A solução oferece lembretes personalizados para medicamentos, destinado a idosos e pessoas com deficiência.'
    },
    {
      id: 3,
      image: 'CALCULADORA.png',
      title: 'Calculadora em Linguagem C',
      description: 'Software desenvolvido em linguagem C com funcionalidades avançadas de cálculo. Implementa operações básicas (soma, subtração) e avançadas (divisão, resto da divisão) com tratamento de erros.'
    }
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 relative pb-2 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">Projetos</h2>
        <p className="text-center text-secondary mb-16">1/10</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map(project => (
            <div key={project.id} className="project-item rounded-lg overflow-hidden shadow-md relative group">
              <img 
                src={`https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80`} 
                alt={project.title} 
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="project-overlay absolute inset-0 bg-secondary bg-opacity-70 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p>{project.description.substring(0, 100)}...</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors duration-300 font-medium">
            Ver Todos os Projetos
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects