const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Ryan Pablo</h1>
            <p className="text-xl text-secondary mb-8">Desenvolvedor Full Stack & Designer UI/UX</p>
            <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors duration-300 font-medium">
              Ver Projetos
            </button>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Ryan Pablo" 
                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-xl"
              />
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent rounded-full opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary rounded-full opacity-50 animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero