import './Menu.css';

const Menu = () => {
  const toggleMenu = () => {
    document.body.classList.toggle("open");
  };

  return (
    <>
      <button className="burger" type="button" aria-label="Toggle menu" onClick={toggleMenu}></button>
      <div className="menu">
        <nav>
          <a href="#about" style={{ animationDelay: '0.2s' }}>About</a>
          <a href="#portfolio" style={{ animationDelay: '0.3s' }}>Portfolio</a>
          <a href="#services" style={{ animationDelay: '0.4s' }}>Services</a>
          <a href="#contact" style={{ animationDelay: '0.5s' }}>Contact</a>
        </nav>
      </div>
    </>
  );
};

export default Menu;
