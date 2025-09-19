import { useState } from 'react'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white bg-opacity-90 backdrop-blur-sm z-50 header-shadow">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-bold gradient-text">Miguel Wilker</span>
        </div>
        
        <nav className="hidden md:flex space-x-10">
          <a href="#home" className="text-secondary hover:text-primary transition-colors duration-300 font-medium">Início</a>
          <a href="#about" className="text-secondary hover:text-primary transition-colors duration-300 font-medium">Sobre</a>
          <a href="#experience" className="text-secondary hover:text-primary transition-colors duration-300 font-medium">Experiência</a>
          <a href="#certificates" className="text-secondary hover:text-primary transition-colors duration-300 font-medium">Certificados</a>
          <a href="#projects" className="text-secondary hover:text-primary transition-colors duration-300 font-medium">Projetos</a>
          <a href="#contact" className="text-secondary hover:text-primary transition-colors duration-300 font-medium">Contato</a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-secondary hover:text-primary transition-colors duration-300 transform hover:scale-110">
            <span className="text-xl">📱</span>
          </a>
          <a href="#" className="text-secondary hover:text-primary transition-colors duration-300 transform hover:scale-110">
            <span className="text-xl">💼</span>
          </a>
          <button className="bg-accent text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300 font-medium">
            Baixar CV
          </button>
        </div>
        
        <button 
          className="md:hidden text-secondary" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="text-2xl">☰</span>
        </button>
      </div>

      <div className={`md:hidden bg-white py-4 px-6 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-4">
          <a href="#home" className="text-secondary hover:text-primary transition-colors duration-300 font-medium">Início</a>
          <a href="#about" className="text-secondary hover:text-primary transition-colors duration-300 font-medium">Sobre</a>
          <a href="#certificates" className="text-secondary hover:text-primary transition-colors duration-300 font-medium">Certificados</a>
          <a href="#projects" className="text-secondary hover:text-primary transition-colors duration-300 font-medium">Projetos</a>
          <a href="#contact" className="text-secondary hover:text-primary transition-colors duration-300 font-medium">Contato</a>
          <div className="flex space-x-4 pt-4">
            <a href="#" className="text-secondary hover:text-primary transition-colors duration-300">
              <span className="text-xl">📱</span>
            </a>
            <a href="#" className="text-secondary hover:text-primary transition-colors duration-300">
              <span className="text-xl">💼</span>
            </a>
          </div>
          <button className="bg-accent text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300 font-medium">
            Baixar CV
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header