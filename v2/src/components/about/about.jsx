import { useState } from "react";
import "./about.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaCode } from "react-icons/fa";

const About = () => {
  const [afficherPlus, setAfficherPlus] = useState(false);

  const toggleAfficherPlus = () => {
    setAfficherPlus(!afficherPlus);
  };

  return (
    <section id="about">
      <h2>À propos de moi</h2>
      <p>
        En tant que développeur web, je suis un créateur digital passionné par la transformation des idées en expériences interactives et immersives. Mon expertise réside dans la conception et le développement de sites web élégants et fonctionnels qui captivent les visiteurs dès la première interaction.
      </p>
      {afficherPlus && (
        <div>
          <h3>Compétences et outils de développement :</h3>
          <div className="card-container">
            <div className="card">
              <FaHtml5 className="icon" />
              <h4 className="card-title">HTML</h4>
              <div className="progress-bar">
                <div className="progress" style={{ width: '85%' }}>85%</div>
              </div>
              <p className="card-description">
                HTML (HyperText Markup Language) est le langage standard utilisé pour créer des pages web.
              </p>
            </div>
            <div className="card">
              <FaCss3Alt className="icon" />
              <h4 className="card-title">CSS</h4>
              <div className="progress-bar">
                <div className="progress" style={{ width: '90%' }}>90%</div>
              </div>
              <p className="card-description">
                CSS (Cascading Style Sheets) est un langage de feuille de style utilisé pour styliser les éléments HTML.
              </p>
            </div>
            <div className="card">
              <FaJs className="icon" />
              <h4 className="card-title">JavaScript</h4>
              <div className="progress-bar">
                <div className="progress" style={{ width: '75%' }}>75%</div>
              </div>
              <p className="card-description">
                JavaScript est un langage de programmation de scripts principalement utilisé pour rendre les pages web interactives.
              </p>
            </div>
            <div className="card">
              <FaReact className="icon" />
              <h4 className="card-title">React.js</h4>
              <div className="progress-bar">
                <div className="progress" style={{ width: '70%' }}>70%</div>
              </div>
              <p className="card-description">
                React.js est une bibliothèque JavaScript utilisée pour la création d&rsquo;interfaces utilisateur.
              </p>
            </div>
            <div className="card">
              <FaPhp className="icon" />
              <h4 className="card-title">PHP</h4>
              <div className="progress-bar">
                <div className="progress" style={{ width: '40%' }}>40%</div>
              </div>
              <p className="card-description">
              PHP est un langage de script côté serveur utilisé principalement pour le développement web et la création de pages web dynamiques.
              </p>
            </div>
            <div className="card">
              <FaCode className="icon" />
              <h4 className="card-title">Visual Studio Code</h4>
              <p className="card-description">
              VSC (Visual Studio Code) est un éditeur de code source développé par Microsoft, reconnu pour sa légèreté, sa vitesse, et ses fonctionnalités étendues grâce à des extensions.
              </p>
            </div>
          </div>
        </div>
      )}
      <button className="bouton" onClick={toggleAfficherPlus}>
        {afficherPlus ? "Afficher moins" : "Afficher plus"}
      </button>
    </section>
  );
};

export default About;
