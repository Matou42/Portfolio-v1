// Footer.jsx

import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Navigation</h4>
          <ul className="footer-list">
            <li><a href="#about" className="footer-link">À propos</a></li>
            <li><a href="#projects" className="footer-link">Projets</a></li>
            <li><a href="#services" className="footer-link">Services</a></li>
            <li><a href="#contact" className="footer-link">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: <a href="mailto:contact.maxence2812@gmail.com" className="footer-email">contact.maxence2812@gmail.com</a></p>
        </div>
        <div className="footer-section">
          <h4>Suivez-nous</h4>
          <div className="social-icons">
            <a href="https://instagram.com" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" className="social-icon"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Maxence. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;