import { useState } from 'react';
import './App.css';

const translations = {
  es: {
    greeting: '¡Hola! Soy Alejandro Zambrano 🇨🇴',
    description: 'Ingeniero industrial y desarrollador web y móvil en Montreal, Canadá.',
    projects: 'Proyectos Destacados',
  },
  en: {
    greeting: "Hi! I'm Alejandro Zambrano 🇨🇦",
    description: 'Industrial engineer and web/mobile developer based in Montreal, Canada.',
    projects: 'Featured Projects',
  },
  fr: {
    greeting: 'Bonjour ! Je suis Alejandro Zambrano 🇨🇦',
    description: 'Ingénieur industriel et développeur web/mobile basé à Montréal, Canada.',
    projects: 'Projets en Vedette',
  },
};

function App() {
  const [lang, setLang] = useState('es');
  const t = translations[lang];

  return (
    <div className="container">
      <div className="language-selector">
        <button onClick={() => setLang('es')}>🇪🇸</button>
        <button onClick={() => setLang('en')}>🇬🇧</button>
        <button onClick={() => setLang('fr')}>🇫🇷</button>
      </div>
      <h1>{t.greeting}</h1>
      <p>{t.description}</p>
      <h2>{t.projects}</h2>
      <ul>
        <li>
          <a href="https://github.com/alejandrozambrano/Labo2_CarsApp" target="_blank">
            🚗 Labo2_CarsApp – App Android con SQLite y cámara
          </a>
        </li>
        <li>
          <a href="https://github.com/alejandrozambrano/Fundamentos-de-HTML" target="_blank">
            🧱 Fundamentos de HTML – Proyecto final
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
