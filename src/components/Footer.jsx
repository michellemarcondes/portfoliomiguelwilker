const Footer = () => {
  return (
    <footer className="bg-secondary py-12 px-6 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold gradient-text mb-6">Miguel Wilker</span>
          
          <p className="mb-6">© 2023 Michelle Marcondes. Todos os direitos reservados.</p>
          
          <div className="flex space-x-6 mb-6">
            <a href="#" className="hover:text-accent transition-colors duration-300 transform hover:scale-110">
              <span className="text-xl">📱</span>
            </a>
            <a href="#" className="hover:text-accent transition-colors duration-300 transform hover:scale-110">
              <span className="text-xl">💼</span>
            </a>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-accent transition-colors duration-300">Política de Privacidade</a>
            <a href="#" className="hover:text-accent transition-colors duration-300">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer