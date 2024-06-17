import './projet.css'; 

const Projects = () => {
  const projectList = [
    {
      title: "Site Portfolio",
      description: "Un site web personnel pour présenter vos compétences, vos projets et votre CV.",
      technologies: ["HTML", "CSS", "React JS"],
      link: "#", // Remplacez "#" par le lien de mon site web
      image: "https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg?cs=srgb&dl=pexels-ann-h-45017-14936128.jpg&fm=jpg" 
    },
    {
      title: "Blog",
      description: "Le blog est un journal en ligne qui a vocation à créer du contenu à intervalles réguliers sur des thématiques spécifiques ou généralistes pour une communauté de lecteurs.",
      technologies: ["HTML", "CSS", "React JS"],
      link: "#", // Remplacez "#" par le lien de mon site web
      image: "https://sigmacorporation.pro/uploads/img/129.jpeg"
    },
  
  ];

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
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">Voir le projet</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
