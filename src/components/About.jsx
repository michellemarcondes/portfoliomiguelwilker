const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 section-title mx-auto">Sobre Mim</h2>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/5 mb-10 md:mb-0 flex justify-center">
            <img 
              src="logofb.png" 
              alt="Sobre Miguel Wilker" 
              className="rounded-lg shadow-xl w-full max-w-md"
            />
          </div>
          
          <div className="md:w-3/5 md:pl-12">
            <p className="text-justify text-secondary mb-6">
              Meu nome é Miguel Wilker, sou estudante do Ensino Médio da Fundação Bradesco e estou em busca da minha primeira oportunidade no mercado de trabalho. Minha formação foi pautada não apenas pelo aprendizado técnico, mas também pelo desenvolvimento de uma postura ética, proativa e resiliente. Acredito que a educação é a ferramenta mais poderosa para a transformação pessoal e profissional, e carrego comigo os valores de dedicação e excelência que a instituição me proporcionou.
            </p>
            <p className="text-justify text-secondary">
              Tenho grande interesse em áreas que demandam raciocínio lógico, organização e gestão, como administração, logística ou análise de dados. Meu objetivo é me integrar a uma empresa onde eu possa aplicar minha capacidade de aprendizado rápido e meu espírito colaborativo, contribuindo para os resultados da equipe enquanto construo uma base sólida para minha carreira. Estou pronto para encarar novos desafios e transformá-los em oportunidades de crescimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About