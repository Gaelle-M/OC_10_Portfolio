import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { SiHtml5, SiSass, SiCss3, SiReact, SiRedux, SiWordpress, SiTypescript, SiJavascript } from 'react-icons/si';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './ProjectDetail.scss';

const getIcon = (name) => {
  const icons = {
    "Html5": <SiHtml5 />,
    "Sass": <SiSass />,
    "Css3": <SiCss3 />,
    "React": <SiReact />,
    "Redux": <SiRedux />,
    "Wordpress": <SiWordpress />,
    "Typescript": <SiTypescript />,
    "Javascript": <SiJavascript />
  };
  return icons[name] || null;
};

const ProjectDetail = ({ project }) => {
  return (
    <div className="project-detail-content">
      {/* SECTION Gauche - Texte */}
      <section className="text-content">
        <h1 style={{ color: project.color }}>{project.title}</h1>
        <p className="subtitle">{project.subtitle}</p>

        {/* logos technos */}
        <div className="tech-stack-icons">
          {project.stackIcons?.map((iconName) => (
            <span key={iconName} className="tech-icon" title={iconName} style={{ color: project.color }}>
              {getIcon(iconName)}
            </span>
          ))}
        </div>

        <div className="details-grid">
          <div className="detail-item">
            <h3>Contexte</h3>
            <p>{project.context}</p>
          </div>

          <div className="detail-item">
            <h3>Objectifs</h3>
            <p>{project.objectives}</p>
          </div>

          <div className="detail-item">
            <h3>Stack technique</h3>
            <p>{project.stackDetailed}</p>
          </div>

          <div className="detail-item">
            <h3>Compétences</h3>
            <p>{project.skills}</p>
          </div>
        </div>

        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer" className="btn-link">GitHub Repo</a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn-link">Live Démo</a>
          )}
        </div>
      </section>

      {/* SECTION DROITE - Slider */}
      <section className="media-content">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          loop={project.media?.length > 1}
          className="project-slider"
        >
          {project.media?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="media-item">
                {item.type === 'video' ? (
                  <video src={item.url} autoPlay muted loop playsInline />
                ) : (
                  <img src={item.url} alt={`${project.title} mockup ${index}`} />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default ProjectDetail;