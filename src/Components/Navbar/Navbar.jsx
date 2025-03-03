import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
// import Sidebar from "../Sidebar/Sidebar"; 

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(!(currentScrollY > lastScrollY && currentScrollY > 50));
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen || isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen, isSidebarOpen]);

  return (
    <>
      <nav className={`navbar ${isVisible ? "visible" : "hidden"} ${isMenuOpen ? "menu-open" : ""}`} ref={menuRef}>
        <div className="nav-container">
          {/* Logo responsivo */}
          <a href="#intro" className="intro-mobile" style={{ color: "#5500ff" }}>{"</>"}</a>
          
          {/* Hamburger menu para mobile - versão aprimorada */}
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
          </button>

          {/* Links */}
          <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <li><a href="#intro" className="intro-desk" style={{ color: "#5500ff" }}>{"</>"}</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Knowledge</a></li>
            <li><a href="#playground">Playground</a></li>
            <li><a href="https://github.com/marcelovsk1">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/marceloamaralalves/">LinkedIn</a></li>

            {/* AI Friend Link */}
            {/* <li>
              <a href="#" className="ai-friend-link" onClick={(e) => { e.preventDefault(); setIsSidebarOpen(true); }}>
                AI Friend 🤖
              </a>
            </li> */}
          </ul>
        </div>
      </nav>

      {/* Sidebar */}
      {/* <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} /> */}
    </>
  );
};

export default Navbar;
