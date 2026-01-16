import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { SiHtml5, SiSass, SiCss3, SiReact, SiRedux, SiWordpress, SiTypescript, SiJavascript } from 'react-icons/si';
import { Helmet } from 'react-helmet-async'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
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
      {/* Ajout du SEO */}
      <Helmet>
        <title>{project.title} | Portfolio</title>
        <meta name="description" content={project.subtitle} />
      </Helmet>

      {/* SECTION Gauche - Texte */}
      <section className="text-content">
        <h1 style={{ color: project.color }}>{project.title}</h1>
        <p className="subtitle">{project.subtitle}</p>

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
          <div className="detail-item">
            <h3>Résultats</h3>
            <p>{project.results}</p>
          </div>
          <div className="detail-item">
            <h3>Améliorations futures</h3>
            <p>{project.improvements}</p>
          </div>
        </div>

        <div className="project-links">
          <h3>Liens utiles</h3>
          <a href={project.github} target="_blank" rel="noreferrer" className="btn-link">GitHub Repo</a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn-link">Live Démo</a>
          )}
        </div>
      </section>

      {/* SECTION DROITE - Slider */}
      <section className="media-content">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          lazy={true}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          a11y={{
            prevSlideMessage: 'Diapositive précédente',
            nextSlideMessage: 'Diapositive suivante',
            firstSlideMessage: 'Ceci est la première diapositive',
            lastSlideMessage: 'Ceci est la dernière diapositive',
            paginationBulletMessage: 'Aller à la diapositive {{index}}',
          }}
          pagination={{ 
              clickable: true,
              dynamicBullets: true
            }}
          loop={project.media?.length > 1}
          className="project-slider"
        >
          {project.media?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="media-item">
                {item.type === 'video' ? (
                  <video src={item.url} autoPlay muted loop playsInline title={item.alt} />
                ) : (
                  <img src={item.url} alt={item.alt || `${project.title} mockup ${index}`} loading="lazy"/>
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