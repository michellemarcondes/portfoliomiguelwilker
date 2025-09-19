import { useState } from 'react'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-md z-50 header-shadow animate-slide-up">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold gradient-text cursor-pointer hover:scale-105 transition-transform duration-300">MIGUEL WILKER</span>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-secondary hover:text-primary transition-all duration-300 font-medium relative group">
            Início
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about" className="text-secondary hover:text-primary transition-all duration-300 font-medium relative group">
            Sobre
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#certificates" className="text-secondary hover:text-primary transition-all duration-300 font-medium relative group">
            Certificados
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#projects" className="text-secondary hover:text-primary transition-all duration-300 font-medium relative group">
            Projetos
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="text-secondary hover:text-primary transition-all duration-300 font-medium relative group">
            Contato
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-secondary hover:text-primary transition-all duration-300 transform hover:scale-110 hover:rotate-12">
            <span className="text-2xl">📱</span>
          </a>
          <a href="#" className="text-secondary hover:text-primary transition-all duration-300 transform hover:scale-110 hover:rotate-12">
            <span className="text-2xl">💼</span>
          </a>
          <button className="btn-primary">
            Baixar CV
          </button>
        </div>

        <button
          className="md:hidden text-secondary hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="text-2xl">{mobileMenuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      <div className={`md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-6 py-4">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="text-secondary hover:text-primary transition-colors duration-300 font-medium py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>Início</a>
            <a href="#about" className="text-secondary hover:text-primary transition-colors duration-300 font-medium py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
            <a href="#certificates" className="text-secondary hover:text-primary transition-colors duration-300 font-medium py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>Certificados</a>
            <a href="#projects" className="text-secondary hover:text-primary transition-colors duration-300 font-medium py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>Projetos</a>
            <a href="#contact" className="text-secondary hover:text-primary transition-colors duration-300 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Contato</a>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-secondary hover:text-primary transition-all duration-300 transform hover:scale-110">
                <span className="text-xl">📱</span>
              </a>
              <a href="#" className="text-secondary hover:text-primary transition-all duration-300 transform hover:scale-110">
                <span className="text-xl">💼</span>
              </a>
            </div>
            <button className="btn-primary w-full mt-4" onClick={() => setMobileMenuOpen(false)}>
              Baixar CV
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header