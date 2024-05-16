// Header.jsx
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Mon Portfolio</h1>
      <nav className="header-nav">
        <ul className="header-list">
          <li><a href="#about" className="header-link">À propos</a></li>
          <li><a href="#projects" className="header-link">Projets</a></li>
          <li><a href="#services" className="header-link">Services</a></li>
          <li><a href="#contact" className="header-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;