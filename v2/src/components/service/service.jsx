import { useState } from 'react';
import './service.css';

const Services = () => {
  const [showMore, setShowMore] = useState(false);

  const initialServices = [
    {
      title: 'SITE VITRINE STANDARD',
      price: 'À PARTIR DE 500€ *',
      details: [
        'Développé sous Visual Studio Code (Outil d\'éditeur de texte)',
        'Charte graphique à partir d\'une maquette pré-définie',
        'Interface administrateur',
      ],
    },
    {
      title: 'SITE VITRINE PERSONNALISÉ',
      price: 'À PARTIR DE 750€ *',
      details: [
        'Développé SUR-MESURE (Codage à la main)',
        'Création charte graphique personnalisée',
        'Interface administrateur',
      ],
    },
    {
      title: 'PLATEFORME E-COMMERCE',
      price: 'À PARTIR DE 1 150€ *',
      details: [
        'Développé sous Visual Studio Code (Outil d\'éditeur de texte)',
        'Création charte graphique personnalisée',
        'Installation & configuration des plugins choisis',
      ],
    },
  ];

  const additionalServices = [
    {
      title: 'FORFAIT MAINTENANCE',
      price: '15€/HEURE ** OU 200€/AN ***',
      details: [
        'Mises à jour site internet & plugins',
        'Petites modifications graphiques ou de contenu',
        'Sauvegardes externalisées mensuelles',
        'Optimisation performances',
      ],
    },
    {
      title: 'DÉVELOPPEMENTS SPÉCIFIQUES',
      price: 'TAUX JOURNALIER MOYEN 100€/JOUR',
      details: [
        'L\'ensemble des tarifs indiqués sont H.T.',
        '* Prix à titre informatif : Changement possible selon les demandes et les choix du client.',
      ],
    },
  ];

  const renderServices = (services) => {
    return services.map((service, index) => (
      <div key={index} className="Service">
        <h3 className="ServiceTitle">{service.title}</h3>
        <p className="price">{service.price}</p>
        <ul>
          {service.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <section id="services" className="ServicesSection">
      <div className="Container">
        <h2 className="SectionTitle">Nos Services</h2>
        <div className="ServiceGrid">
          {renderServices(initialServices)}
          {showMore && renderServices(additionalServices)}
        </div>
        <button className="ToggleButton" onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Voir moins' : 'Voir plus'}
        </button>
      </div>
    </section>
  );
};

export default Services;
