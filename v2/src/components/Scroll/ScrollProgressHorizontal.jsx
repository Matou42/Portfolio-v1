import { useEffect, useState } from 'react';
import './ScrollProgressHorizontal.css'; // Assurez-vous d'ajouter un fichier CSS pour les styles

const ScrollProgressHorizontal = () => {
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setProgress(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-horizontal-container">
      <div className="scroll-horizontal-indicator" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ScrollProgressHorizontal;
