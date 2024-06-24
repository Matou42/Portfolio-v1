import { useState } from 'react';
import './MentionsLegales.css';

function MentionsLegales() {
    const nom = "Maxence";
    const annee = new Date().getFullYear();
    const [showMentions, setShowMentions] = useState(false);

    const toggleMentions = () => {
        setShowMentions(!showMentions);
    };

    const politiqueConfidentialite = (
        <div className="mentions-legales-section">
            <h3 className="mentions-legales-heading">Informations que nous collectons</h3>
            <p className="mentions-legales-paragraph">
                Lorsque vous utilisez ce site, nous pouvons collecter les informations suivantes :
            </p>
            <ul className="mentions-legales-list">
                <li>Informations d&apos;identification personnelle telles que votre nom, votre adresse e-mail, votre numéro de téléphone, etc.</li>
                <li>Informations de connexion, y compris les adresses IP, les données de connexion, le type et la version du navigateur, etc.</li>
                <li>Informations sur votre utilisation de notre service, telles que les pages visitées, les fonctionnalités utilisées, etc.</li>
                <li>Informations fournies volontairement par vous, telles que les commentaires, les rétroactions, etc.</li>
            </ul>
        </div>
    );

    const conditionsUtilisation = (
        <div className="mentions-legales-section">
            <h3 className="mentions-legales-heading">Utilisation des informations</h3>
            <p className="mentions-legales-paragraph">
                Nous utilisons les informations collectées pour :
            </p>
            <ul className="mentions-legales-list">
                <li>Fournir, exploiter et maintenir notre service.</li>
                <li>Améliorer, personnaliser et développer notre service.</li>
                <li>Répondre à vos demandes, questions et préoccupations.</li>
                <li>Vous contacter pour des annonces, des mises à jour ou des offres promotionnelles.</li>
                <li>Protéger nos droits, notre sécurité et nos biens, ainsi que ceux de nos utilisateurs ou du public, selon la loi applicable.</li>
            </ul>
        </div>
    );

    const mentionsLegalesContent = (
        <div className="mentions-legales-container">
            <h1 className="mentions-legales-title">Mentions Légales</h1>

            <h2 className="mentions-legales-heading">Droits d&apos;auteur :</h2>
            <p className="mentions-legales-paragraph">© {annee} {nom}. Tous droits réservés.</p>

            <h2 className="mentions-legales-heading">Politique de confidentialité :</h2>
            <p className="mentions-legales-paragraph">Informations sur la collecte et l&apos;utilisation des données personnelles :</p>
            {politiqueConfidentialite}
            
            {conditionsUtilisation}

            <h2 className="mentions-legales-heading">Mentions légales :</h2>
            <ul className="mentions-legales-list">
                <li>
                    <strong>Éditeur du site :</strong>
                    <ul>
                        <li>{nom}</li>
                        <li><a href="mailto:contact.maxence2812@gmail.com">contact.maxence2812@gmail.com</a></li>
                    </ul>
                </li>
                <li>
                    <strong>Hébergeur du site :</strong>
                    <ul>
                        <li>Vercel</li>
                        <li><a href="https://vercel.com/">https://vercel.com/</a></li>
                    </ul>
                </li>
            </ul>

            <h2 className="mentions-legales-heading">Propriété intellectuelle :</h2>
            <p className="mentions-legales-paragraph">Tous les éléments du site, y compris les textes, les images, les graphiques, les logos, les vidéos, les éléments interactifs, etc., sont la propriété exclusive de {nom} ou de ses partenaires et sont protégés par les lois internationales sur la propriété intellectuelle.</p>
            
            <h2 className="mentions-legales-heading">Contact :</h2>
            <p className="mentions-legales-paragraph">Pour toute question concernant les mentions légales, veuillez nous contacter à l&apos;adresse suivante : <a href="mailto:contact.maxence2812@gmail.com">contact.maxence2812@gmail.com</a></p>
        </div>
    );

    return (
        <div>
            <button className="mentions-legales-button" onClick={toggleMentions}>
                {showMentions ? "Masquer les mentions légales" : "Afficher les mentions légales"}
            </button>
            {showMentions && mentionsLegalesContent}
        </div>
    );
}

export default MentionsLegales;