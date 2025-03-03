import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';
import About_Pic from '../../../src/img/newAbout.jpg';

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
            As a <span>Software Developer</span> graduated from <span>Le Wagon Montreal,</span> I bring a strong foundation in frontend technologies combined with diverse academic qualifications. <br /><br />
            My academic journey includes a Bachelor's degree in <span>Business Administration</span> from <span>PUCPR</span> and a Master's in <span>Growth and Digital Strategy</span> from <span>PUCRS.</span> <br /><br />
            <span id='span-mobile'>This unique blend of technical expertise and strategic thinking empowers me to create innovative designs that balance creativity with efficiency and precision.</span> 
          </p>
        </div>
        <div className="about-right">
          <img src={About_Pic} alt="About Me" className="about-photo" ref={imageRef} />
        </div>
      </div>
    </section>
  );
};

export default About;