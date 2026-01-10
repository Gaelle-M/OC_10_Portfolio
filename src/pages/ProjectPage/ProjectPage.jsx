import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../../data/projectsData';
import ProjectDetail from '../../components/ProjectDetail/ProjectDetail';
import './ProjectPage.scss';

const ProjectPage = () => {
  const { id } = useParams();
  const projectData = projects.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!projectData) return <div className="error">Projet introuvable</div>;

  return (
    <main className="project-page-container">
      <Link to="/" className="back-button">← Retour</Link>
      <ProjectDetail project={projectData} />
    </main>
  );
};

export default ProjectPage;