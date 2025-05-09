import { useState } from "react";
import "./App.css";

const translations = {
  es: {
    greeting: "¡Hola! Soy Alejandro Zambrano 🇨🇴",
    aboutMeTitle: "Sobre mí",
    aboutMeText:
      "Ingeniero industrial y desarrollador web y móvil en Montreal, Canadá. Me destaco por mi actitud colaborativa, mi capacidad para resolver problemas bajo presión y mi disposición a aprender de los errores. Trabajo bien en equipo, acepto la frustración como parte del proceso y siempre busco mejorar.",
    skillsTitle: "Competencias",
    skills: [
      "Trabajo en equipo",
      "Resolución de problemas",
      "Adaptabilidad",
      "React.js y Node.js",
      "BAse de datos: MongoDB, MySQL",
    ],
    projects: "Proyectos Destacados",
    contact: "Contacto",
  },
  en: {
    greeting: "Hi! I'm Alejandro Zambrano 🇨🇦",
    aboutMeTitle: "About Me",
    aboutMeText:
      "Industrial engineer and web/mobile developer based in Montreal, Canada. I stand out for my collaborative spirit, ability to solve problems under pressure, and eagerness to learn from mistakes. I work well in teams, accept frustration as part of the process, and always strive to improve.",
    skillsTitle: "Skills",
    skills: [
      "Teamwork",
      "Problem solving",
      "Adaptability",
      "React.js and Node.js",
      "Databases: MongoDB, MySQL",
    ],
    projects: "Featured Projects",
    contact: "Contact",
  },
  fr: {
    greeting: "Bonjour ! Je suis Alejandro Zambrano 🇨🇦",
    aboutMeTitle: "À propos de moi",
    aboutMeText:
      "Ingénieur industriel et développeur web/mobile basé à Montréal, Canada. Je me distingue par mon esprit collaboratif, ma capacité à résoudre des problèmes sous pression et ma volonté d’apprendre de mes erreurs. Je travaille bien en équipe, j’accepte la frustration comme une étape du processus et je cherche toujours à m’améliorer.",
    skillsTitle: "Compétences",
    skills: [
      "Travail en équipe",
      "Résolution de problèmes",
      "Adaptabilité",
      "React.js et Node.js",
      "Bases de données : MongoDB, MySQL",
    ],
    projects: "Projets en Vedette",
    contact: "Contact",
  },
};

function App() {
  const [lang, setLang] = useState("es");
  const t = translations[lang];

  return (
    <div className="container">
      <div className="language-selector">
        <button onClick={() => setLang("es")}>🇪🇸</button>
        <button onClick={() => setLang("en")}>🇬🇧</button>
        <button onClick={() => setLang("fr")}>🇫🇷</button>
      </div>
      <h1>{t.greeting}</h1>

      <section className="about-me">
        <h2>{t.aboutMeTitle}</h2>
        <p>{t.aboutMeText}</p>
      </section>

      <section className="skills">
        <h2>{t.skillsTitle}</h2>
        <ul className="skill-list">
          {t.skills.map((skill, index) => (
            <li key={index}>✅ {skill}</li>
          ))}
        </ul>
      </section>

      <section className="Project">
        <h2>{t.projects}</h2>
      </section>

      <ul className="no-bullets">
        <li>
          ✔️ 🚗{" "}
          <a
            href="https://github.com/alejandrozambrano/Labo2_CarsApp"
            target="_blank"
            rel="noreferrer"
          >
            Labo2_CarsApp – App Android con SQLite y cámara
          </a>
        </li>
        <li>
          ✔️ 🧱{" "}
          <a
            href="https://github.com/alejandrozambrano/Fundamentos-de-HTML"
            target="_blank"
            rel="noreferrer"
          >
            Fundamentos de HTML – Proyecto final
          </a>
        </li>
        <li>
          ✔️ 🎥{" "}
          <a
            href="https://github.com/alejandrozambrano/projectClient"
            target="_blank"
            rel="noreferrer"
          >
            Streaming Site – React, Node.js y MongoDB
          </a>
        </li>
      </ul>

      <h2>{t.contact}</h2>
      <p>
        📧{" "}
        <a href="mailto:alejandro_zambrano_@hotmail.com">
          alejandro_zambrano_@hotmail.com
        </a>
        <br />
        <br />
        💼{" "}
        <a href="https://www.linkedin.com/in/alejandroZambrano" target="_blank">
          LinkedIn
        </a>
      </p>
    </div>
  );
}

export default App;
