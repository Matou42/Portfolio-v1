import { useState, useEffect } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState(null);

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setErrors({});
    setSubmitted(false);
    setEmailError(null);
  };

  useEffect(() => {
    if (emailError) {
      const timer = setTimeout(() => {
        resetForm();
      }, 10000);

      // Cleanup function to clear the timeout if the component is unmounted
      return () => clearTimeout(timer);
    }
  }, [emailError]); // The effect runs when emailError changes

  const sendEmail = () => {
    console.log('Envoi de l\'email en cours...');
    console.log('Nom:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    emailjs.send("service_vdxlaz7", "template_j3v69mg", {
      reply_to: email,
      message: message,
      to_name: name,
    }, 'IbLRh68IWib2ejfnM')
    .then((result) => {
      console.log('Email envoyé avec succès !', result.text);
      setSubmitted(true);
      setEmailError(null);
      throw new Error('Erreur simulée');
    })
    .catch((error) => {
      console.error('Erreur lors de l\'envoi de l\'email :', error.text);
      setEmailError("Une erreur s'est produite lors de l'envoi de votre mail. Veuillez réessayer plus tard. Si le problème persiste, veuillez me contacter à l'adresse suivante : <a href=\"mailto:contact.maxence2812@gmail.com\">contact.maxence2812@gmail.com</a>.");
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!name.trim()) {
      errors.name = "Le champ Nom est requis";
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = "Le champ Email est requis";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "L'adresse email est invalide";
      isValid = false;
    }

    if (!message.trim()) {
      errors.message = "Le champ Message est requis";
      isValid = false;
    }

    setErrors(errors);

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Formulaire valide, envoi de l\'email...');
      sendEmail();
      console.log('Nom:', name);
      console.log('Email:', email);
      console.log('Message:', message);
    }
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      {submitted ? (
        <div className="message-container success">
          <h3>Contact</h3>
          <p>Merci de nous avoir contactés ! Nous vous répondrons dès que possible.</p>
        </div>
      ) : (
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom :</label>
            <textarea type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Votre nom" required></textarea>
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <textarea type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Votre mail" required></textarea>
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message :</label>
            <textarea name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Votre message" required></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button type="submit">Envoyer</button>
          {emailError && (
            <div className="message-container error" dangerouslySetInnerHTML={{ __html: emailError }}></div>
          )}
        </form>
      )}
    </section>
  );
};

export default Contact;
