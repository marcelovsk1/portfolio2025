import React from "react";
import "./Projects.css"; // ou outro arquivo de estilo

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <div className="project-card">
      <img src={imgUrl} alt={title} className="project-image" />
      <div className="project-text">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="project-links">
          {/* Link para GitHub */}
          <a href={link} className="github-btn" target="_blank" rel="noreferrer">
            GitHub
          </a>

          {/* Links condicionais (Live Demo) */}
          {title === "Game of Codes" && (
            <a
              href="https://www.game-of-codes.pro/"
              className="demo-button"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}
          {title === "Shoes App" && (
            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:7191889677941948416/"
              className="demo-button"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}
          {title === "3D Content in iOS" && (
            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:7188979149032570880/"
              className="demo-button"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}
          {title === "News App" && (
            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:7188638289367621632/"
              className="demo-button"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}
          {title === "3D Open World" && (
            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:7183925251368468481/"
              className="demo-button"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}
          {title === "Weather App" && (
            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:7120763456319799296/"
              className="demo-button"
              target="_blank"
              rel="noreferrer"
            >
              Live Demos
            </a>
          )}
        </div>
      </div>
      {/* Versão mobile (opcional) */}
      <div className="mobile-only">
        <p className="projects-title-mobile">{title}</p>
        <a href={link} className="github-btn" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
};