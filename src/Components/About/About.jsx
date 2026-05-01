import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';
import eu from '../../../src/img/EUU.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo(imageRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <section className='aboutSection' id="about">
      <div className="about-container">
        <div className="about-left" ref={textRef}>
          <h2 className="about-title">Who's This?</h2>
          <p className="about-text">
            As a <span>Software Developer</span> graduated from <span>Le Wagon Montreal,</span> I bring a strong foundation in full-stack development with expertise in modern web technologies. <br /><br />
            Currently, I am pursuing an <span>MBA in Software Engineering</span> at <span>USP,</span> continuously expanding my technical knowledge and engineering skills to build robust and scalable applications. <br /><br />
            <span id='span-mobile'>My passion for coding and problem-solving drives me to create innovative solutions that balance clean code, efficiency, and user experience.</span> 
          </p>
        </div>
        <div className="about-right">
          <img src={eu} alt="About Me" className="about-photo" ref={imageRef} />
        </div>
      </div>
    </section>
  );
};

export default About;