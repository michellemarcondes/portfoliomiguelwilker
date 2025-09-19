const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-12 md:mb-0 flex justify-center items-center">
            <img 
              src="https://images.unsplash.com/photo-1534533983688-c7b8e13fd3b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
              alt="Contato" 
              className="rounded-lg shadow-xl w-full max-w-md"
            />
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-8 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-primary">Contato</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-secondary mb-2">Nome</label>
                <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-secondary mb-2">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-secondary mb-2">Mensagem</label>
                <textarea id="message" rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required></textarea>
              </div>
              
              <button type="submit" className="bg-accent text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors duration-300 font-medium w-full">
                Enviar Mensagem
              </button>
            </form>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold text-secondary mb-4">Informações de Contato</h3>
              <div className="space-y-3">
                <p className="text-secondary flex items-center">
                  <span className="mr-2">📧</span> 
                  <a href="mailto:contato@ryanpablo.com" className="hover:text-primary transition-colors duration-300">contato@ryanpablo.com</a>
                </p>
                <p className="text-secondary flex items-center">
                  <span className="mr-2">📱</span> 
                  <a href="tel:+5511999999999" className="hover:text-primary transition-colors duration-300">+55 (11) 99999-9999</a>
                </p>
              </div>
              
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-secondary hover:text-primary transition-colors duration-300 transform hover:scale-110">
                  <span className="text-2xl">📱</span>
                </a>
                <a href="#" className="text-secondary hover:text-primary transition-colors duration-300 transform hover:scale-110">
                  <span className="text-2xl">💼</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact