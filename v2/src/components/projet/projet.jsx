import './projet.css'; 

const Projects = () => {
  const projectList = [
    {
      title: "Site Portfolio",
      description: "Un site web personnel pour présenter vos compétences, vos projets et votre CV.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      link: "#", // Remplacez "#" par le lien de votre choix quand vous aurez créé votre site
      image: "https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg?cs=srgb&dl=pexels-ann-h-45017-14936128.jpg&fm=jpg" // Assurez-vous d'avoir une image de votre projet dans le répertoire approprié
    },
    {
      title: "Blog Personnel",
      description: "Un blog où vous partagez vos expériences d'apprentissage, vos projets et vos réflexions sur le développement web.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      link: "#", // Remplacez "#" par le lien de votre choix quand vous aurez créé votre blog
      image: "https://sigmacorporation.pro/uploads/img/129.jpeg"
    },
    // Ajoutez d'autres exemples de projets imaginaires ici
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
