import { motion } from 'framer-motion';
import { projects } from '../../data/projectsData'; 
import { Link } from 'react-router-dom';
import './Projects.scss';

const Projects = () => {
  return (
    <section className="projects" id="projets">
      <h2 className="title-section">Mes Réalisations</h2>
      
      <div className="projects__slider-container">
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -1000 }} 
          className="projects__track"
        >
          {projects.map((project) => (
            <Link to={project.link} key={project.id} className="project-card">
              <motion.div 
                className="project-card__inner"
                whileHover="hover"
              >
                <div className="project-card__image-container">
                  <img src={project.img} alt={project.title} />
                  
                  {/* Overlay de couleur au hover */}
                  <motion.div 
                    className="project-card__overlay"
                    variants={{
                      hover: { opacity: 0.9, backgroundColor: project.color }
                    }}
                  />

                  {/* Infos du projet */}
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
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;