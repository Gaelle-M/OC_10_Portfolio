import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { projects } from '../../data/projectsData';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Projects.scss';

const Projects = () => {
  return (
    <section className="projects" id="projets">
      <h2 className="title-section">Mes Réalisations</h2>
      
      <div className="projects__slider-container">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1} 
          centeredSlides={false}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1100: {
              slidesPerView: 3,
            }
          }}
          className="projects__swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <Link to={project.link} className="project-card">
                <motion.div className="project-card__inner" whileHover="hover">
                  <div className="project-card__image-container">
                    <img src={project.img} alt={project.title} />
                    
                    <motion.div 
                      className="project-card__overlay"
                      variants={{
                        hover: { opacity: 0.9, backgroundColor: project.color }
                      }}
                    />

                    <motion.div 
                      className="project-card__info"
                      variants={{
                        hover: { y: 0, opacity: 1 }
                      }}
                      initial={{ y: 20, opacity: 0 }}
                    >
                      <h3>{project.title}</h3>
                      <p>{project.tech}</p>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;