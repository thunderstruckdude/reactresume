import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Header.css";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const headerStyle = {
    opacity: Math.max(1 - scrollY / 300, 0),
    transform: `translateY(${Math.min(scrollY / 2, 50)}px)`,
  };

  return (
    <header style={headerStyle} className="header">
      <h1>MANEEK</h1>
      <p>Computer Science and Engineering Student | Cybersecurity Enthusiast</p>
      <nav className="nav-links">
        <ul>
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <a href="#objective">Objective</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <a href="#education">Education</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <a href="#skills">Skills</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <a href="#projects">Projects</a>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
