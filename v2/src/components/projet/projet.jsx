import { useState, useEffect } from 'react';
import './projet.css';

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    // Clean up the effect on component unmount
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [modalOpen]);

  const projectList = [
    {
      title: "Site Portfolio",
      description: "Un site web personnel pour présenter vos compétences, vos projets et votre CV.",
      technologies: ["HTML", "CSS", "React JS"],
      link: "",
      image: "https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg?cs=srgb&dl=pexels-ann-h-45017-14936128.jpg&fm=jpg"
    },
    {
      title: "Blog",
      description: "Le blog est un journal en ligne qui a vocation à créer du contenu à intervalles réguliers sur des thématiques spécifiques ou généralistes pour une communauté de lecteurs.",
      technologies: ["HTML", "CSS", "React JS"],
      link: "",
      image: "https://sigmacorporation.pro/uploads/img/129.jpeg"
    },
  ];

  const openModal = (project) => {
    if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    } else {
      setSelectedProject(project);
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects">
      <h2 className="projects-subtitle">Mes Projets de Création de Sites Web sur Mesure</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <img src={project.image} alt={`${project.title} screenshot`} className="project-image" />
            <p>{project.description}</p>
            <p><strong>Technologies utilisées :</strong> {project.technologies.join(', ')}</p>
            <button onClick={() => openModal(project)} className="project-link">Voir le projet</button>
          </div>
        ))}
      </div>
      {modalOpen && selectedProject && (
        <div className="modal show">
          <div className="modal-content show">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>Projet en cours de développement</h2>
            <p>Ce projet est actuellement en cours de développement. Revenez bientôt pour voir les mises à jour !</p>
            <p><strong>Titre :</strong> {selectedProject.title}</p>
            <p><strong>Description :</strong> {selectedProject.description}</p>
            <p><strong>Technologies utilisées :</strong> {selectedProject.technologies.join(', ')}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;