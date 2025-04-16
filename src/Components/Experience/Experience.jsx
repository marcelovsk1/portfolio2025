import React, { useState, useRef, useEffect } from "react";
import styles from "./Experience.module.css";
import { useMediaQuery } from "react-responsive";
import skills from "../../Data/Skill.json";
import historyData from "../../Data/History.json";
import educationData from "../../Data/Education.json";
import swiftImage from "../../Assets/Skills/swift.png";
import JSImage from "../../Assets/Skills/js.png";
import reactImage from "../../Assets/Skills/react.png";
import pythonImage from "../../Assets/Skills/python_2.png";
import CImage from "../../Assets/Skills/csharp.png";
import railsImage from "../../Assets/Skills/rails.svg";
import ruby from "../../Assets/Skills/ruby.png";
import gitImage from "../../Assets/Skills/git_icon.png";
import unityImage from "../../Assets/Skills/unity_logo.png";
import trenditImage from "../../Assets/Skills/trendit_img.png";
import typescript from "../../Assets/Skills/typescript_logo.svg.png";
import openai from "../../Assets/Skills/openai.png";
import evryImage from "../../Assets/Skills/evryj.png";
import liquid from "../../Assets/Skills/liquid.png";
import pucpr from "../../Assets/Skills/Brasão_PUCPR.png";
import pucrs from "../../Assets/Skills/pucrs.png";
import lewagon from "../../Assets/Skills/le_wagon.png";
import canadaFlag from "../../Assets/Skills/canada-flag.png";
import brazilFlag from "../../Assets/Skills/brazil-flag.png";


const getImage = (imageSrc) => {
  switch (imageSrc) {
    case "Skills/swift.png":
      return swiftImage;
    case "Skills/js.png":
      return JSImage;
    case "Skills/react.png":
      return reactImage;
    case "Skills/python.png":
      return pythonImage;
    case "Skills/csharp.png":
      return CImage;
    case "Skills/typescript_logo.svg.png":
      return typescript;
    case "Skills/rails.svg":
      return railsImage;
    case "Skills/ruby.png":
      return ruby;
    case "Skills/git_icon.png":
      return gitImage;
    case "Skills/unity.svg":
      return unityImage;
    case "Skills/trendit_img.png":
      return trenditImage;
    case "Skills/openai.png":
      return openai;
    case "Skills/evryj.png":
      return evryImage;
    case "Skills/liquid.png":
      return liquid;
    case "Skills/Brasão_PUCPR.png":
      return pucpr;
    case "Skills/pucrs.png":
     return pucrs;
     case "Skills/le_wagon.png":
        return lewagon;      
    default:
      return null;
  }
};

const Experience = () => {
  const [isWorkExperience, setIsWorkExperience] = useState(true);
  const [animating, setAnimating] = useState(false);
  const contentRef = useRef(null);
  
  // Verificar se é dispositivo móvel
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  // Função para lidar com a transição entre Work e Education
  const handleSectionChange = (isWork) => {
    if (isWork === isWorkExperience || animating) return;
    
    setAnimating(true);
    
    // Tempo de animação mais rápido em mobile
    const animationTime = isMobile ? 150 : 250;
    
    // Fadein/fadeout com um pequeno atraso para permitir que a animação aconteça
    if (contentRef.current) {
      contentRef.current.style.opacity = "0";
      contentRef.current.style.transform = "translateY(10px)";
    }
    
    // Delay para mudar o conteúdo após a animação de fade out
    setTimeout(() => {
      setIsWorkExperience(isWork);
      
      // Reset da opacidade para permitir a animação de entrada
      if (contentRef.current) {
        contentRef.current.style.opacity = "1";
        contentRef.current.style.transform = "translateY(0)";
      }
      
      setAnimating(false);
    }, animationTime);
  };

  // Quando a tela for redimensionada, garantir que as animações sejam ajustadas
  useEffect(() => {
    const handleResize = () => {
      // Garantir que a opacidade esteja correta mesmo durante redimensionamento
      if (contentRef.current) {
        contentRef.current.style.opacity = "1";
        contentRef.current.style.transform = "translateY(0)";
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleWorkExperienceClick = () => handleSectionChange(true);
  const handleEducationClick = () => handleSectionChange(false);

  const dataToDisplay = isWorkExperience ? historyData : educationData;

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Knowledge</h2>

      <div className={styles.contentContainer}>
        {/* Skills Section (sempre visível) */}
        <div className={styles.skills}>
          {skills.map((skill, skillId) => (
            <div key={skillId} className={styles.card}>
              <div className={styles.cardImage}>
                <img src={getImage(skill.imageSrc)} alt={skill.title} />
              </div>
              <p className={styles.cardTitle}>{skill.title}</p>
            </div>
          ))}
        </div>

        {/* History ou Education Section */}
        <div
          className={`${styles.history} ${
            isWorkExperience ? styles.workExperience : styles.education
          }`}
          ref={contentRef}
          style={{ 
            transition: isMobile 
              ? "opacity 0.15s ease, transform 0.15s ease" 
              : "opacity 0.25s ease, transform 0.25s ease" 
          }}
        >
          <div className={styles.buttonContainer}>
            <button
              className={`${styles.toggleButton} ${
                isWorkExperience ? styles.activeButton : ""
              }`}
              onClick={handleWorkExperienceClick}
            >
              Work Experience
            </button>
            <button
              className={`${styles.toggleButton} ${
                !isWorkExperience ? styles.activeButton : ""
              }`}
              onClick={handleEducationClick}
            >
              Education
            </button>
          </div>

          <div className={styles.contentWrapper}>
            {dataToDisplay.map((item, id) => (
              <div
                key={id}
                className={`${styles.historyCard} ${
                  isWorkExperience ? styles.workCard : styles.educationCard
                }`}
              >
                <div className={styles.historyCardHeader}>
                  <img src={getImage(item.imageSrc)} alt={`${item.organisation} Logo`} />
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.organisation}</p>
                    <span>
                      {item.startDate} - {item.endDate}
                      <p className={styles.locationContainer}>
                        {item.location}
                        {item.location.toLowerCase().includes('canada') && (
                          <img 
                            src={canadaFlag} 
                            alt="Canadian Flag" 
                            style={{ 
                              width: 'auto', 
                              height: '15px', 
                              boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
                              marginLeft: '6px',
                              verticalAlign: 'middle',
                              display: 'inline-block',
                              borderRadius: '2px'
                            }} 
                          />
                        )}
                        {(item.location.toLowerCase().includes('brazil') || item.location.toLowerCase().includes('brasil')) && (
                          <img 
                            src={brazilFlag} 
                            alt="Brazilian Flag" 
                            style={{ 
                              width: 'auto', 
                              height: '19px', 
                              boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
                              marginLeft: '6px',
                              verticalAlign: 'middle',
                              display: 'inline-block',
                              borderRadius: '2px'
                            }} 
                          />
                        )}
                      </p>
                    </span>
                  </div>
                </div>
                <ul>
                  {item.experiences.map((experience, experienceId) => (
                    <li key={experienceId}>{experience}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;