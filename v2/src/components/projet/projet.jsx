import { useState } from 'react';
import './projet.css';

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      title: "Site Portfolio",
      description: "Un site web personnel pour présenter vos compétences, vos projets et votre CV.",
      technologies: ["HTML", "CSS", "React JS"],
      link: "https://matou.vercel.app/", // Ajouter le lien si disponible
      image: "https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg?cs=srgb&dl=pexels-ann-h-45017-14936128.jpg&fm=jpg",
      inProgress: false // Mettre à true si en cours de développement
    },
    {
      title: "Blog",
      description: "Le blog est un journal en ligne qui a vocation à créer du contenu à intervalles réguliers sur des thématiques spécifiques ou généralistes pour une communauté de lecteurs.",
      technologies: ["HTML", "CSS", "React JS"],
      link: "", // Ajouter le lien si disponible
      image: "https://sigmacorporation.pro/uploads/img/129.jpeg",
      inProgress: true // Mettre à true si en cours de développement
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
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
        <div className={`modal ${modalOpen ? 'show' : ''}`}>
          <div className={`modal-content ${modalOpen ? 'show' : ''}`}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            {selectedProject.inProgress ? (
              <div>
                <h2>Projet en cours de développement</h2>
                <p>Ce projet est actuellement en cours de développement. Revenez bientôt pour voir les mises à jour !</p>
              </div>
            ) : (
              <div>
                <h2>{selectedProject.title}</h2>
                <iframe 
                  src={selectedProject.link} 
                  title={selectedProject.title} 
                  width="100%" 
                  height="500px" 
                  style={{ border: "none" }} 
                />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
