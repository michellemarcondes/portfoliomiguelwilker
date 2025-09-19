const Contact = () => {
  return (
    <section id="contact" className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center items-center">
            <img
              src="/sala.jpg"
              alt="Contato"
              className="rounded-lg shadow-xl w-full max-w-sm"
            />
          </div>
          
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-bold mb-6 section-title">Contato</h2>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-secondary mb-1">Nome</label>
                <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-secondary mb-1">Email</label>
                <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-secondary mb-1">Mensagem</label>
                <textarea id="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required></textarea>
              </div>
              
              <button type="submit" className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300 font-medium w-full">
                Enviar Mensagem
              </button>
            </form>
            
            <div className="mt-8">
              <h3 className="text-lg font-bold text-secondary mb-3">Informações de Contato</h3>
              <div className="space-y-2">
                <p className="text-secondary flex items-center">
                  <span className="mr-2">📧</span> 
                  <a href="mailto:contato@miguelwilker.com" className="hover:text-primary transition-colors duration-300">35532.14@educacao.org.br</a>
                </p>
                <p className="text-secondary flex items-center">
                  <span className="mr-2">📱</span> 
                  <a href="tel:+5519994105762" className="hover:text-primary transition-colors duration-300">+55 (19) 99410-5762</a>
                </p>
              </div>
              
              <div className="flex space-x-3 mt-4">
                <a href="#" className="text-secondary hover:text-primary transition-colors duration-300 transform hover:scale-110">
                  <span className="text-xl">📱</span>
                </a>
                <a href="#" className="text-secondary hover:text-primary transition-colors duration-300 transform hover:scale-110">
                  <span className="text-xl">💼</span>
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
