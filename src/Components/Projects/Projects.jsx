import React, { useEffect, useRef } from 'react';
import './Projects.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import drakenike from "../../img/shoesapp.png";
import netflixapp from "../../img/netflixapp.png";
import weatherApp from "../../img/weatherapp.png";
import newsapp from "../../img/newsapp.png";
import guessgame from "../../img/guessgame.png";
import mensagerapp from "../../img/mensagerapp.png";
import socialmedia from "../../img/socialmedia.png";
import interfaceImg from "../../img/ios3d.png";
import gameofcodesImg from "../../img/game_of_codes.png";
import adidasoriginals from "../../img/adidas.png";
import scraper from "../../img/scraper.png";
import portfolio from "../../img/myportfolio.png";
import boxrumble from "../../img/box.png";
import world from "../../img/BEAUTIFUL_3D_WORLD1.png";
import poc from "../../img/poc.png";
import artf from "../../img/artf.png";
import slider from "../../img/slider.png";
import product from "../../img/product.png";
import discount from "../../img/discount.png";
import menu from "../../img/menu.png";
import bubble from "../../img/bubble.png";
import pace from "../../img/pace.png";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef([]);

  useEffect(() => {
    projectsRef.current.forEach((project, index) => {
      gsap.fromTo(
        project,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: project,
            start: 'top bottom-=100',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const projectsRow1 = [
    {
      title: "Pace - Running App",
      description: "My own running app, built with Swift. Coming soon!",
      imgUrl: pace,
      link: "",
      liveDemo:"https://www.linkedin.com/posts/marceloamaralalves_ios-iosdevelopment-developer-activity-7213925743867662337-QBwl?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACnkvjYBFLH6fERka3lmREFy9lG26V6EjR8",
      language: "SwiftUi",
      year: "2024",
    },
    {
      title: "eCommerceMenu",
      description: "A menu for an eCommerce website, built with Liquid and Shopify",
      imgUrl: menu,
      link: "https://github.com/KittySou/game-of-codes",
      liveDemo: "https://evryjewels.ca/",
      language: "Shopify",
      year: "2023",
    },
    {
      title: "Product Card",
      description: "Product card built with Liquid and Shopify",
      imgUrl: product,
      link: "https://github.com/KittySou/game-of-codes",
      liveDemo: "https://evryjewels.ca/",
      language: "Shopify",
      year: "2023",
    },
    {
      title: "Shoes App",
      description: "3D CGI applied to Swift iOS",
      imgUrl: drakenike,
      link: "https://github.com/marcelovsk1/Shoes-App",
      liveDemo:
        "https://www.linkedin.com/posts/marceloamaralalves_iosdevelopment-swiftui-ios-activity-7191889677941948416-Qlsg/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACnkvjYBFLH6fERka3lmREFy9lG26V6EjR8",
      language: "SwiftUi",
      year: "2024",
    },
    {
      title: "Game of Codes",
      description: "A PvP game in Rails + JS, introducing coding to beginners",
      imgUrl: gameofcodesImg,
      link: "https://github.com/KittySou/game-of-codes",
      liveDemo: "https://www.game-of-codes.pro/",
      language: "Rails/JS",
      year: "2023",
    },
    {
      title: "News App",
      description: "Firebase + an API for a news application in Swift.",
      imgUrl: newsapp,
      link: "https://github.com/marcelovsk1/NewsApp",
      liveDemo: "https://www.linkedin.com/feed/update/urn:li:activity:7188638289367621632/",
      language: "SwiftUi",
      year: "2023",
    },
    {
      title: "Cube Rumble",
      description: "My first game project in Unity, just for fun",
      imgUrl: boxrumble,
      link: "https://github.com/marcelovsk1/BoxRumble",
      liveDemo: null,
      language: "Unity/C#",
      year: "2024",
    },
    {
      title: "Netflix Clone",
      description: "A clone of Netflix in Objective-C with movie and TV shows",
      imgUrl: netflixapp,
      link: "https://github.com/marcelovsk1/netflix-app-clone",
      liveDemo: null,
      language: "Objective-C",
      year: "2024",
    },
    {
      title: "3D Open World",
      description: "A beautiful 3D open world, made using Unity Engine",
      imgUrl: world,
      link: "https://github.com/marcelovsk1/BoxRumble",
      liveDemo: "https://www.linkedin.com/feed/update/urn:li:activity:7183925251368468481/",
      language: "Unity/C#",
      year: "2024",
    },
    {
      title: "Mensager App",
      description: "A messaging platform in Swift (send/receive messages instantly)",
      imgUrl: mensagerapp,
      link: "https://github.com/marcelovsk1/message-app1/tree/master",
      liveDemo: null,
      language: "SwiftUi",
      year: "2023",
    },
    {
      title: "ZipFetch",
      description: "A CRUD in Python, Flask, and SQLite that fetches address details via the Mail API.",
      imgUrl: poc,
      link: "https://github.com/marcelovsk1/poc",
      liveDemo: null,
      language: "Python/Flask",
      year: "2025",
    },
  ];

  const projectsRow2 = [
    {
      title: "eCommerce Filter Collection",
      description: "Filter bubbles for collections, built with Liquid and Shopify",
      imgUrl: bubble,
      link: null,
      liveDemo: "https://evryjewels.ca/",
      language: "Shopify",
      year: "2024",
    },
    {
      title: "Discount Bar",
      description: "A discount bar which provides a discount code to the customer, built with Liquid and Shopify",
      imgUrl: discount,
      link: null,
      liveDemo: "https://evryjewels.ca/",
      language: "Shopify",
      year: "2024",
    },
    {
      title: "Slider Section Collection",
      description: "A collection of slider sections, built with Liquid and 100% customized",
      imgUrl: slider,
      link: null,
      liveDemo: "https://evryjewels.ca/",
      language: "Shopify",
      year: "2024",
    },
    {
      title: "AI Chatbot",
      description: "A chatbot that uses AI to answer questions and provide information",
      imgUrl: artf,
      link: "https://github.com/marcelovsk1/AI_ImageGenerator",
      liveDemo: "https://www.linkedin.com/posts/marceloamaralalves_swiftui-gptprompt-artificialintelligence-activity-7206720699531423744-9-Ui?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACnkvjYBFLH6fERka3lmREFy9lG26V6EjR8",
      language: "SwiftUi",
      year: "2024",
    },
    {
      title: "Scraper Bot",
      description: "Automates web data collection through scraping techniques",
      imgUrl: scraper,
      link: "https://github.com/marcelovsk1/scraper-demo",
      liveDemo: null,
      language: "Python/BeautifulSoup",
      year: "2024",
    },
    {
      title: "Guess PvP Game",
      description: "A multiplayer guessing game (identify doodles)",
      imgUrl: guessgame,
      link: "https://github.com/marcelovsk1/guess-multiplayer-game",
      liveDemo: null,
      language: "SwiftUi",
      year: "2023",
    },
    {
      title: "Landing Page",
      description: "A concept landing page for Adidas Originals",
      imgUrl: adidasoriginals,
      link: "https://github.com/marcelovsk1/rct-4",
      liveDemo: null,
      language: "React.Js",
      year: "2024",
    },
    {
      title: "3D Content in iOS",
      description: "Integrate stunning 3D content into iOS effortlessly with Spline.",
      imgUrl: interfaceImg,
      link: "https://github.com/marcelovsk1/3d_graphics/blob/master/3d_content/ContentView.swift",
      liveDemo: "https://www.linkedin.com/feed/update/urn:li:activity:7188979149032570880/",
      language: "SwiftUi",
      year: "2024",
    },
    {
      title: "My FirstPortfolio",
      description: "My personal portfolio, built with React.js",
      imgUrl: portfolio,
      link: "https://github.com/marcelovsk1/my-new-portfolio",
      liveDemo: null,
      language: "React.Js",
      year: "2024",
    },
    {
      title: "Social Media App",
      description: "Swift app replicating core features of a photo-sharing platform",
      imgUrl: socialmedia,
      link: "https://github.com/marcelovsk1/SocialMediaClone",
      liveDemo: null,
      language: "SwiftUi",
      year: "2023",
    },
    // {
    //   title: "Game Dev Portfolio",
    //   description: "My Game portfolio, built in React.js",
    //   imgUrl: game_portfolio,
    //   link: "https://github.com/marcelovsk1/portfolio-games",
    //   liveDemo: null,
    //   language: "React.Js",
    //   year: "2024",
    // },
    {
      title: "Weather App",
      description: "Displays weather data from an API in a simple Swift app",
      imgUrl: weatherApp,
      link: "https://github.com/marcelovsk1/SwiftWeatherApp",
      liveDemo: "https://www.linkedin.com/feed/update/urn:li:activity:7120763456319799296/",
      language: "SwiftUi",
      year: "2023",
    },
  ];

  return (
    <section className="projects-section" id="playground">
      <h2 className="projects-title">Playground</h2>
      <p className="project-description">
        A collection of my work, featuring mobile apps, web applications, games, and automation projects built with Swift, React, Shopify, Rails, Unity, and Python.
      </p>
      <div className="projects-grid">
        <div className="projects-wrapper">
          {/* Primeira linha de projetos */}
          <div className="projects-row">
            {projectsRow1.map((project, index) => (
              <div key={index} className="project-card" ref={(el) => (projectsRef.current[index] = el)}>
                <div className="project-image">
                  <img 
                    src={project.imgUrl} 
                    alt={project.title}
                    className="project-img"
                  />
                  <span className="project-category">{project.language}</span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="buttons">
                    {project.title === "Pace - Running App" || project.title === "Product Card" || project.title === "eCommerceMenu" ? (
                      <>
                        <a href={project.liveDemo} target="_blank" rel="noreferrer" className="btn demo">Live Demo</a>
                      </>
                    ) : (
                      <>
                        <a href={project.link} target="_blank" rel="noreferrer" className="btn">GitHub</a>
                        {project.liveDemo && (
                          <a href={project.liveDemo} target="_blank" rel="noreferrer" className="btn demo">Live Demo</a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Segunda linha de projetos */}
          <div className="projects-row">
            {projectsRow2.map((project, index) => (
              <div key={index + projectsRow1.length} className="project-card" ref={(el) => (projectsRef.current[index + projectsRow1.length] = el)}>
                <div className="project-image">
                  <img 
                    src={project.imgUrl} 
                    alt={project.title}
                    className="project-img"
                  />
                  <span className="project-category">{project.language}</span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="buttons">
                    {project.title === "Slider Section Collection" || project.title === "Discount Bar" || project.title === "eCommerce Filter Collection" ? (
                      <>
                        <a href={project.liveDemo} target="_blank" rel="noreferrer" className="btn demo">Live Demo</a>
                      </>
                    ) : (
                      <>
                        <a href={project.link} target="_blank" rel="noreferrer" className="btn">GitHub</a>
                        {project.liveDemo && (
                          <a href={project.liveDemo} target="_blank" rel="noreferrer" className="btn demo">Live Demo</a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;