import React, { useEffect, useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 80 }, // Começa com opacidade zero e mais deslocamento
        {
          opacity: 1,
          y: 0,
          duration: 1.5, // Aumenta a duração para suavizar
          ease: "power1.out", // Transição mais fluida
          scrollTrigger: {
            trigger: section,
            start: "top 85%", // Ajusta o ponto inicial para uma transição mais suave
            end: "top 30%",
            scrub: 0.5, // Reduz o scrub para um efeito mais gradual
          },
        }
      );
    });

    gsap.to(sectionsRef.current, {
      y: -30, // Desloca levemente para cima
      scrollTrigger: {
        trigger: sectionsRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5, // Mantém o efeito gradual
      },
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div ref={(el) => (sectionsRef.current[0] = el)}>
          <Intro />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Experience />
        </div>
        <div>
          <Projects />
        </div>
      </header>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;