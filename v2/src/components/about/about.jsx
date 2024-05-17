import { useState, useEffect, useRef } from 'react';
import './about.css';
import Chart from 'chart.js/auto';

const About = () => {
  const [afficherPlus, setAfficherPlus] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    if (afficherPlus) {
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["JavaScript", "HTML/CSS", "React js", "php"],
          datasets: [{
            label: 'Niveau de compétence en pourcentage',
            data: [50, 85, 40, 35],
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }, [afficherPlus, chartRef]);

  const toggleAfficherPlus = () => {
    setAfficherPlus(!afficherPlus);
  }

  return (
    <section id="about">
      <h2>À propos de moi</h2>
      <p>
        En tant que développeur web, je suis un créateur digital passionné par la transformation des idées en expériences interactives et immersives. Mon expertise réside dans la conception et le développement de sites web élégants et fonctionnels qui captivent les visiteurs dès la première interaction.
      </p>
      {afficherPlus && (
        <div>
          <h3>Compétences en langages de programmation :</h3>
          <canvas ref={chartRef} width={200} height={100}></canvas>
        </div>
      )}
      <button className="bouton" onClick={toggleAfficherPlus}>
        {afficherPlus ? "Afficher moins" : "Afficher plus"}
      </button>
    </section>
  );
}

export default About;
