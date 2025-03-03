import React, { useState, useEffect } from "react";
import "./Intro.css";
import Bird from "../../img/birds.JPG";

const textArray = ["<h1>Welcome</h1>", 
  "console.log('Hi Visitor!')", 
  "print('my portfolio')",];

const Intro = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100; 
  const deletingSpeed = 50; 
  const delayBetweenWords = 1000;

  useEffect(() => {
    const currentText = textArray[index];

    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => setCharIndex((prev) => prev - 1), deletingSpeed);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % textArray.length); 
      }
    } else {
      if (charIndex < currentText.length) {
        setTimeout(() => setCharIndex((prev) => prev + 1), typingSpeed);
      } else {
        setTimeout(() => setIsDeleting(true), delayBetweenWords);
      }
    }

    setText(currentText.substring(0, charIndex));
  }, [charIndex, index, isDeleting]);

  return (
    <section className="intro-section" id="intro">
      <h1 className="intro-title">{text}<span className="cursor">|</span></h1>

      <div className="intro-image-container">
        <img
          src={Bird}
          alt="Bird"
          className="intro-image"
        />
        <p className="image-caption">This photo was taken by me in January 2017</p>
      </div>
    </section>
  );
};

export default Intro;