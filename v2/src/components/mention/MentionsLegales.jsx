import { useState } from 'react';
import './MentionsLegales.css';

function MentionsLegales() {
    const nom = "Maxence";
    const annee = new Date().getFullYear();
    const [showMentions, setShowMentions] = useState(false);

    const toggleMentions = () => {
        setShowMentions(!showMentions);
    };
    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            color: '#333',
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center',
        },
        heading: {
            textAlign: 'center',
            fontSize: '24px',
            marginBottom: '20px',
        },
        section: {
            marginBottom: '30px',
            textAlign: 'center',
        },
        subHeading: {
            fontSize: '20px',
            marginBottom: '10px',
            textAlign: 'center',
        },
        paragraph: {
            fontSize: '16px',
            lineHeight: '1.5',
            textAlign: 'center',
        },
        list: {
            fontSize: '16px',
            lineHeight: '1.5',
            paddingLeft: '20px',
            textAlign: 'center',
        },
    };

    const politiqueConfidentialite = (
        
        <div style={styles.container}>
            <h2 style={styles.heading}>Politique de Confidentialité</h2>
            <div style={styles.section}>
                <h3 style={styles.subHeading}>Informations que nous collectons</h3>
                <p style={styles.paragraph}>
                    Lorsque vous utilisez ce site, nous pouvons collecter les informations suivantes :
                </p>
                <ul style={styles.list}>
                    <li>Informations d&eacute;identification personnelle telles que votre nom, votre adresse e-mail, votre numéro de téléphone, etc.</li>
                    <li>Informations de connexion, y compris les adresses IP, les données de connexion, le type et la version du navigateur, etc.</li>
                    <li>Informations sur votre utilisation de notre service, telles que les pages visitées, les fonctionnalités utilisées, etc.</li>
                    <li>Informations fournies volontairement par vous, telles que les commentaires, les rétroactions, etc.</li>
                </ul>
            </div>

            <div style={styles.section}>
                <h3 style={styles.subHeading}>Utilisation des informations</h3>
                <p style={styles.paragraph}>
                    Nous utilisons les informations collectées pour :
                </p>
                <ul style={styles.list}>
                    <li>Fournir, exploiter et maintenir notre service.</li>
                    <li>Améliorer, personnaliser et développer notre service.</li>
                    <li>Répondre à vos demandes, questions et préoccupations.</li>
                    <li>Vous contacter pour des annonces, des mises à jour ou des offres promotionnelles.</li>
                    <li>Protéger nos droits, notre sécurité et nos biens, ainsi que ceux de nos utilisateurs ou du public, selon la loi applicable.</li>
                </ul>
            </div>

            {/* Les autres sections suivent le même modèle */}
        </div>
    );

    const conditionsUtilisation = (
        <div style={styles.container}>
            <h2 style={styles.heading}>Conditions d&eacute;Utilisation</h2>
    
            <div style={styles.section}>
                <h3 style={styles.subHeading}>Sur ce site</h3>
                <p style={styles.paragraph}>
                    En accédant à ce site, vous acceptez d&eacute;être lié par ces Conditions d&eacute;Utilisation, toutes les lois et réglementations applicables, et acceptez que vous êtes responsable du respect des lois locales applicables. Si vous n&eacute;êtes pas d&eacute;accord avec l&eacute;une de ces conditions, il vous est interdit d&eacute;utiliser ou d&eacute;accéder à ce site. Les matériaux contenus dans ce site web sont protégés par les lois applicables en matière de droit d&eacute;auteur et de marques commerciales.
                </p>
            </div>
    
            <div style={styles.section}>
                <h3 style={styles.subHeading}>Utilisation de la licence</h3>
                <p style={styles.paragraph}>
                    Il s&eacute;agit de l&eacute;octroi d&eacute;une licence, non d&eacute;un transfert de titre, et en vertu de cette licence, vous ne pouvez pas :
                </p>
                <ul style={styles.list}>
                    <li>Modifier ou copier les documents.</li>
                    <li>Utiliser les documents à des fins commerciales ou pour toute exposition publique (commerciale ou non commerciale).</li>
                    <li>Tenter de décompiler ou d&eacute;appliquer une rétro-ingénierie sur tout logiciel contenu sur ce site.</li>
                    <li>Supprimer les mentions de droits d&eacute;auteur ou autres mentions de propriété des documents.</li>
                    <li>Transférer les documents à une autre personne ou &eacute;refléter&eacute; les documents sur un autre serveur.</li>
                </ul>
            </div>
    
            {/* Les autres sections suivent le même modèle */}
        </div>
    );    
    const adresseEmail = <a href="mailto:contact.maxence2812@gmail.com">contact.maxence2812@gmail.com</a>
    const nomHebergeur = "Nom de l'hébergeur";
    const adresseHebergeur = "Adresse de l'hébergeur";

    const mentionsLegalesContent = (
        <div className="mentions-legales-container" style={styles.container}>
            <h1 className="mentions-legales-title" style={styles.heading}>Mentions Légales</h1>

            <h2 style={styles.heading}>Droits d&eacute;auteur :</h2>
            <p style={styles.paragraph}>© {annee} {nom}. Tous droits réservés.</p>

            <h2 style={styles.heading}>Politique de confidentialité :</h2>
            <p style={styles.paragraph}>Informations sur la collecte et l&eacute;utilisation des données personnelles :</p>
            {politiqueConfidentialite}
            
            {conditionsUtilisation}

            <h2 style={styles.heading}>Mentions légales :</h2>
            <ul style={styles.list}>
                <li>
                    <strong>Éditeur du site :</strong>
                    <ul>
                        <li>{nom}</li>
                        <li>{adresseEmail}</li>
                    </ul>
                </li>
                <li>
                    <strong>Hébergeur du site :</strong>
                    <ul>
                        <li>{nomHebergeur}</li>
                        <li>{adresseHebergeur}</li>
                    </ul>
                </li>
            </ul>

            <h2 style={styles.heading}>Propriété intellectuelle :</h2>
            <p style={styles.paragraph}>Tous les éléments du site, y compris les textes, les images, les graphiques, les logos, les vidéos, les éléments interactifs, etc., sont la propriété exclusive de {nom} ou de ses partenaires et sont protégés par les lois internationales sur la propriété intellectuelle.</p>
            
            <h2 style={styles.heading}>Contact :</h2>
            <p style={styles.paragraph}>Pour toute question concernant les mentions légales, veuillez nous contacter à l&eacute;adresse suivante : {adresseEmail}</p>
        </div>
    );

    return (
        <div>
            <button onClick={toggleMentions}>
                {showMentions ? "Masquer les mentions légales" : "Afficher les mentions légales"}
            </button>
            {showMentions && mentionsLegalesContent}
        </div>
    );
}

export default MentionsLegales;