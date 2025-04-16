import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <h2>{project.title}</h2>
        </div>

        <div className="modal-body">
          <div className="modal-image-container">
            <img 
              src={project.imgUrl} 
              alt={project.title} 
              className="modal-main-image"
            />
          </div>

        <div class="modal-year">
          <span className="modal-category">{project.language}</span>
          <span className="modal-category">{project.year}</span>
        </div>

          <div className="modal-info">
            <div className="modal-description">
              <p>{project.description}</p>
            </div>

            <div className="modal-actions">
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="modal-button github"
                >
                  View on GitHub
                </a>
              )}
              {project.liveDemo && (
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="modal-button demo"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal; 