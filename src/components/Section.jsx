import React from "react";
import { motion } from "framer-motion";
import "./section.css";

const Section = ({ id, title, content, skills }) => {
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id={id}
      className="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={animationVariants}
      whileHover={{
        scale: 1.02,
        boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.3)",
        transition: { duration: 0.3 },
      }}
    >
      <h2>{title}</h2>
      {content && <p>{content}</p>}
      {skills && (
        <motion.ul className="skills-list">
          {skills.map((skill, index) => (
            <motion.li key={index} variants={childVariants} className="skill-item">
              <strong>{skill.name}</strong>: {skill.level}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.section>
  );
};

export default Section;
