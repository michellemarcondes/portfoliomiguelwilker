import { useEffect } from 'react'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { certificates } from '../utils/constants'

const Certificates = () => {
  useEffect(() => {
    new Swiper('.certificates-swiper', {
      modules: [Navigation, Pagination],
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
    <section id="certificates" className="py-20 px-6 bg-background-light">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 section-title mx-auto">Certificados</h2>
        
        <div className="swiper certificates-swiper">
          <div className="swiper-wrapper">
            {certificates.map(certificate => (
              <div key={certificate.id} className="swiper-slide">
                <div className="bg-white rounded-lg overflow-hidden certificate-shadow animate-fade-in mx-4 flex flex-col">
                  {/* Container com altura fixa e imagem contida */}
                  <div className="w-full h-64 flex items-center justify-center p-4">
                    <img 
                      src={`/${certificate.image}`} 
                      alt={certificate.title} 
                      className="max-h-full max-w-full object-contain" 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary mb-2">{certificate.title}</h3>
                    <p className="text-secondary">{certificate.platform}</p>
                  </div>
                </div>
              </div>
            ))}
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