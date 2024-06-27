
import './projet.css';

const Projects = () => {
  const projectList = [
    {
      title: "Site Portfolio",
      description: "Un site web personnel pour présenter vos compétences, vos projets et votre CV.",
      technologies: ["HTML", "CSS", "React JS"],
      link: "https://matou.vercel.app/",
      image: "https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg?cs=srgb&dl=pexels-ann-h-45017-14936128.jpg&fm=jpg",
      inProgress: false
    },
    {
      title: "Système de gestion financier personnel",
      description: "Un logiciel de finance personnelle est un outil informatique qui aide à suivre et à gérer les finances individuelles, en permettant l'organisation des revenus, des dépenses et des investissements.",
      technologies: ["HTML", "CSS", "React JS", "MySql", "Node JS"],
      link: "",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJqa5nzvg8pUT-biQKfv0QuA5OYKdoTsNA0Q&s",
      inProgress: true
    },
  ];

  return (
    <section id="projects">
      <h2 className="projects-title">Mes Projets de Création de Sites Web sur Mesure</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={`${project.title} screenshot`} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-technologies"><strong>Technologies utilisées :</strong> {project.technologies.join(', ')}</p>
            </div>
            <div className="project-details-hover">
              {project.inProgress ? (
                <p>Ce projet est actuellement en cours de développement. Revenez bientôt pour voir les mises à jour !</p>
              ) : (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-details-button">Voir le projet</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
