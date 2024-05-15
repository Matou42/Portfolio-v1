// Contact.jsx

import { useState } from 'react';
import './contact.css';

const Contact = () => {
  // États pour les champs du formulaire, les messages d'erreur et l'état de soumission
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({}); // Objet contenant les messages d'erreur pour chaque champ
  const [submitted, setSubmitted] = useState(false);

  // Fonction de validation du formulaire
  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Validation du champ Nom
    if (!name.trim()) {
      errors.name = "Le champ Nom est requis";
      isValid = false;
    }

    // Validation du champ Email
    if (!email.trim()) {
      errors.email = "Le champ Email est requis";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "L'adresse email est invalide";
      isValid = false;
    }

    // Validation du champ Message
    if (!message.trim()) {
      errors.message = "Le champ Message est requis";
      isValid = false;
    }

    // Mise à jour de l'état des erreurs
    setErrors(errors);

    return isValid;
  }

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

    // Validation du formulaire
    if (validateForm()) {
      // Vous pouvez implémenter ici la logique d'envoi du formulaire, par exemple avec une requête HTTP

      // Affichage des valeurs dans la console (pour le débogage)
      console.log('Nom:', name);
      console.log('Email:', email);
      console.log('Message:', message);

      // Mise à jour de l'état de soumission pour afficher le message de confirmation
      setSubmitted(true);
    }
  }

  return (
    <section id="contact">
      <h2>Contact</h2>
      {submitted ? (
        <p>Merci de nous avoir contactés ! Nous vous répondrons dès que possible.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Champ de saisie du nom */}
          <div className="form-group">
            <label htmlFor="name">Nom :</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            {errors.name && <span className="error">{errors.name}</span>} {/* Affichage du message d'erreur */}
          </div>
          {/* Champ de saisie de l'email */}
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            {errors.email && <span className="error">{errors.email}</span>} {/* Affichage du message d'erreur */}
          </div>
          {/* Champ de saisie du message */}
          <div className="form-group">
            <label htmlFor="message">Message :</label>
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            {errors.message && <span className="error">{errors.message}</span>} {/* Affichage du message d'erreur */}
          </div>
          {/* Bouton de soumission du formulaire */}
          <button type="submit">Envoyer</button>
        </form>
      )}
    </section>
  );
}

export default Contact;
