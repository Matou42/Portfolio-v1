import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';
import './index.css';
import Footer from './components/footer/footer.jsx'; // Import du composant de pied de page
import Header from './components/header/header.jsx';
import About from './components/about/about.jsx';
import Projects from './components/projet/projet.jsx';
import Contact from './components/contact/contact.jsx';
import Services from './components/service/service.jsx';
import Mention from './components/mention/MentionsLegales.jsx';
import ScrollProgressHorizontal from './components/Scroll/ScrollProgressHorizontal.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
      <Header />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
      <Mention />
      <ScrollProgressHorizontal />
  </React.StrictMode>
);