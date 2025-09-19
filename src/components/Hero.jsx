const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-32 px-6">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Miguel Wilker</h1>
          <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">Estudante dedicado em busca de novos desafios. Pronto para contribuir com proatividade e vontade de aprender na sua empresa.</p>
          <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors duration-300 font-medium">
            Ver Projetos
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero