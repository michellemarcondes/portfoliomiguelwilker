const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 relative pb-2 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">Sobre Mim</h2>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/5 mb-10 md:mb-0 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" 
              alt="Sobre Ryan Pablo" 
              className="rounded-lg shadow-xl w-full max-w-md"
            />
          </div>
          
          <div className="md:w-3/5 md:pl-12">
            <p className="text-justify text-secondary mb-6">
              Sou um desenvolvedor full stack com mais de 5 anos de experiência em criação de soluções web modernas e responsivas. Minha paixão é transformar ideias em experiências digitais excepcionais.
            </p>
            <p className="text-justify text-secondary mb-6">
              Especializado em <span className="font-bold text-primary">React, Node.js e Tailwind CSS</span>, tenho expertise em desenvolver aplicações escaláveis com foco na experiência do usuário e performance.
            </p>
            <p className="text-justify text-secondary mb-6">
              Minha abordagem combina conhecimentos técnicos sólidos com sensibilidade estética para criar interfaces intuitivas e visualmente atraentes.
            </p>
            <p className="text-justify text-secondary">
              Quando não estou codando, gosto de estudar novas tecnologias, participar de comunidades de desenvolvedores e contribuir para projetos open source.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About