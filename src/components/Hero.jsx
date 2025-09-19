const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-32 px-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-6">
            <span className="inline-block text-6xl md:text-7xl animate-bounce">👋</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-slide-up">
            Miguel Wilker
          </h1>
          <p className="text-xl md:text-2xl text-secondary mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
            Estudante dedicado em busca de novos desafios. Pronto para contribuir com proatividade e vontade de aprender na sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <button className="btn-primary text-lg px-8 py-4">
              Ver Projetos
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Entrar em Contato
            </button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-4 text-4xl opacity-20 animate-bounce" style={{animationDelay: '1s'}}>💻</div>
        <div className="absolute top-3/4 right-4 text-4xl opacity-20 animate-bounce" style={{animationDelay: '1.5s'}}>🚀</div>
        <div className="absolute bottom-1/4 left-1/4 text-4xl opacity-20 animate-bounce" style={{animationDelay: '2s'}}>⚡</div>
      </div>
    </section>
  )
}

export default Hero