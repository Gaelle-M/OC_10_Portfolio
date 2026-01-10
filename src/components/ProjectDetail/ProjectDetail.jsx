import React from 'react';
import './ProjectDetail.scss';

const ProjectDetail = ({ project }) => {
  return (
    <div className="project-detail-content">
      {/* SECTION TEXTE (Gauche) */}
      <section className="text-content">
        <h1 style={{ color: project.color }}>{project.title}</h1>
        <p className="subtitle">{project.subtitle}</p>

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
          <a href={project.github} target="_blank" rel="noreferrer">GitHub Repo</a>
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live Démo</a>}
        </div>
      </section>

      {/* SECTION MÉDIA (Droite) */}
      <section className="media-content">
        {project.media?.map((item, index) => (
          <div key={index} className="media-item">
            {item.type === 'video' ? (
              <video src={item.url} autoPlay muted loop playsInline />
            ) : (
              <img src={item.url} alt={`${project.title} mockup ${index}`} />
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProjectDetail;