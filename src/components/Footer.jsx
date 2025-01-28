import React from "react";
import { motion } from "framer-motion";
import jsPDF from "jspdf";
import "./Footer.css";

const Footer = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("MANEEK Resume", 10, 10);
    doc.text("Objective: A highly motivated ...", 10, 20); // Add full content here
    doc.save("resume.pdf");
  };

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p>&copy; {new Date().getFullYear()} @maneekblaze. All Rights Reserved.</p>
      <motion.a
        href="https://github.com/thunderstruckdude"
        target="_blank"
        whileHover={{ scale: 1.1, color: "#ef233c" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        GitHub Profile
      </motion.a>
     
    </motion.footer>
  );
};

export default Footer;
