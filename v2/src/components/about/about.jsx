import { useState } from 'react';
import './about.css';

const About = () => {
  const [afficherPlus, setAfficherPlus] = useState(false);

  const toggleAfficherPlus = () => {
    setAfficherPlus(!afficherPlus);
  }

  return (
    <section id="about">
      <h2>À propos de moi</h2>
      <p>
        En tant que développeur web, je suis un créateur digital passionné par la transformation des idées en expériences interactives et immersives. Mon expertise réside dans la conception et le développement de sites web élégants et fonctionnels qui captivent les visiteurs dès la première interaction.
      </p>
      {afficherPlus && (
        <div>
          <h3>Compétences en langages de programmation :</h3>
          <div className="card-container">
            <div className="card">
              <h4 className="card-title">HTML</h4>
              <p className="card-description">
                HTML (HyperText Markup Language) est le langage standard utilisé pour créer des pages web.
              </p>
            </div>
            <div className="card">
              <h4 className="card-title">CSS</h4>
              <p className="card-description">
                CSS (Cascading Style Sheets) est un langage de feuille de style utilisé pour styliser les éléments HTML.
              </p>
            </div>
            <div className="card">
              <h4 className="card-title">JavaScript</h4>
              <p className="card-description">
                JavaScript est un langage de programmation de scripts principalement utilisé pour rendre les pages web interactives.
              </p>
            </div>
            <div className="card">
              <h4 className="card-title">React.js</h4>
              <p className="card-description">
                React.js est une bibliothèque JavaScript utilisée pour la création d&rsquo;interfaces utilisateur.
              </p>
            </div>
            <div className="card">
              <h4 className="card-title">SCSS</h4>
              <p className="card-description">
                SCSS est une extension de syntaxe de CSS qui ajoute des fonctionnalités telles que les variables, les mixins et les boucles.
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
}

export default About;