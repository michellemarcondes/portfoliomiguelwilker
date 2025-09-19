const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 section-title mx-auto animate-fade-in">Sobre Mim</h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/5 flex justify-center animate-slide-up">
            <div className="relative">
              <img
                src="logofb.png"
                alt="Sobre Miguel Wilker"
                className="rounded-2xl shadow-2xl w-full max-w-md hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>

          <div className="lg:w-3/5 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="space-y-6">
              <p className="text-lg text-secondary leading-relaxed">
                Meu nome é <span className="font-semibold text-primary">Miguel Wilker</span>, sou estudante do Ensino Médio da Fundação Bradesco e estou em busca da minha primeira oportunidade no mercado de trabalho. Minha formação foi pautada não apenas pelo aprendizado técnico, mas também pelo desenvolvimento de uma postura ética, proativa e resiliente.
              </p>
              <p className="text-lg text-secondary leading-relaxed">
                Acredito que a educação é a ferramenta mais poderosa para a transformação pessoal e profissional, e carrego comigo os valores de dedicação e excelência que a instituição me proporcionou.
              </p>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                <p className="text-lg text-secondary leading-relaxed">
                  Tenho grande interesse em áreas que demandam <span className="font-semibold text-accent">raciocínio lógico, organização e gestão</span>, como administração, logística ou análise de dados. Meu objetivo é me integrar a uma empresa onde eu possa aplicar minha capacidade de aprendizado rápido e meu espírito colaborativo, contribuindo para os resultados da equipe enquanto construo uma base sólida para minha carreira.
                </p>
              </div>
              <p className="text-lg text-secondary leading-relaxed font-medium">
                Estou entusiasmado com a possibilidade de iniciar minha carreira e contribuir para o sucesso da equipe, aplicando minha dedicação, ética de trabalho e capacidade de aprendizado rápido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
