import { useEffect } from 'react'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { projects } from '../utils/constants'

const Projects = () => {
  useEffect(() => {
    new Swiper('.projects-swiper', {
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
          slidesPerView: 3,
        },
      },
    })
  }, [])

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 section-title mx-auto">Projetos</h2>
        <p className="text-center text-secondary mb-16">1/10</p>
        
        <div className="swiper projects-swiper">
          <div className="swiper-wrapper">
            {projects.map(project => (
              <div key={project.id} className="swiper-slide">
                <div className="project-item rounded-lg overflow-hidden shadow-md relative group hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="project-overlay absolute inset-0 bg-secondary bg-opacity-70 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p>{project.description.substring(0, 100)}...</p>
                    </div>
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
            Ver Todos os Projetos
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects