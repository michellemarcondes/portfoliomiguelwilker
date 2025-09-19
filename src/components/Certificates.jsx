import { useEffect } from 'react'
import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Certificates = () => {
  useEffect(() => {
    new Swiper('.certificates-swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
      },
    })
  }, [])

  return (
    <section id="certificates" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 relative pb-2 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">Certificados</h2>
        
        <div className="swiper certificates-swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="bg-background-light rounded-lg overflow-hidden certificate-shadow animate-fade-in mx-4">
                <img src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80" alt="Certificado" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">React Avançado</h3>
                  <p className="text-secondary">Plataforma: Udemy</p>
                </div>
              </div>
            </div>
            
            <div className="swiper-slide">
              <div className="bg-background-light rounded-lg overflow-hidden certificate-shadow animate-fade-in mx-4">
                <img src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Certificado" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">Node.js & Express</h3>
                  <p className="text-secondary">Plataforma: Coursera</p>
                </div>
              </div>
            </div>
            
            <div className="swiper-slide">
              <div className="bg-background-light rounded-lg overflow-hidden certificate-shadow animate-fade-in mx-4">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Certificado" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">UI/UX Design</h3>
                  <p className="text-secondary">Plataforma: Google</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="swiper-pagination mt-8"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors duration-300 font-medium">
            Ver Todos os Certificados
          </button>
        </div>
      </div>
    </section>
  )
}

export default Certificates