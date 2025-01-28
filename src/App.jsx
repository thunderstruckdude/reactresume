import React, { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import { Parallax } from "react-scroll-parallax";
import "./App.css";

const App = () => {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleSmoothScroll = (event) => {
      const targetId = event.target.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach((link) =>
      link.addEventListener("click", handleSmoothScroll)
    );

    return () => {
      navLinks.forEach((link) =>
        link.removeEventListener("click", handleSmoothScroll)
      );
    };
  }, []);

  return (
    <ParallaxProvider>
      <div className="App">
        <Header />
        <main>
          <Parallax speed={-10}>
            <Section
              id="objective"
              title="Objective"
              content="A highly motivated first-year Computer Science and Engineering student specializing in cybersecurity and malware analysis. Passionate about systems-level programming, ethical hacking, and full-stack development."
            />
          </Parallax>
          <Parallax speed={-5}>
            <Section
              id="education"
              title="Education"
              skills={[
                { name: "Bachelor of Technology in Computer Science and Engineering, SRM University AP, Amaravati." },
                { name: "Expected Graduation Year: 2028." }
              ]}
            />
          </Parallax>
          <Parallax speed={-8}>
            <Section
              id="skills"
              title="Technical Skills"
              skills={[
                { name: "Programming (C, JavaScript, Python)" },
                { name: "Web Development (React, Next.js)" },
                { name: "Cybersecurity (Spyware Design, Reverse Engineering)" },
                { name: "Dev Tools: Code OSS, zshell, kitty" }
              ]}
            />
          </Parallax>
          <Parallax speed={-5}>
            <Section
              id="career-goals"
              title="Career Goals"
              content={
                <ul>
                  <li>Specialize in malware analysis and ethical hacking.</li>
                  <li>Develop secure systems to counter cyber threats.</li>
                  <li>Build open-source tools for the developer community.</li>
                  <li>Expand expertise in full-stack development.</li>
                </ul>
              }
            />
          </Parallax>
          <Parallax speed={-4}>
            <Section
              id="interests"
              title="Interests"
              content={
                <ul>
                  <li>Exploring the latest advancements in cybersecurity.</li>
                  <li>Contributing to open-source projects.</li>
                  <li>Ethical Hacking and Network Security</li>
                  <li>Operating system customizations</li>
                  <li>Deep Learning ulility tools</li>
                  <li>Computational Natural Sciences</li>
                </ul>
              }
            />
          </Parallax>
          <Parallax speed={-3}>
            <Section
              id="projects"
              title="Projects"
              content={
                <div className="projects-container">
                  <div className="project-item">
                    <img src="/images/keylogger.jpg" alt="Keylogger Project" className="project-image" />
                    <p><strong>Keylogger:</strong> Designed with Node.js backend and engaging front-end interface.</p>
                  </div>
                  <div className="project-item">
                    <img src="/images/linux.jpg" alt="Archcraft Linux Customization" className="project-image" />
                    <p><strong>Archcraft Linux Customization:</strong> Configured Archcraft with Hyprland and personalized dotfiles.</p>
                  </div>
                  <div className="project-item">
                    <img src="/images/File Transfer.gif" alt="Secure File Transfer System" className="project-image" />
                    <p><strong>Secure File Transfer System:</strong> MongoDB backend for secure protocols.</p>
                  </div>
                  <div className="project-item">
                    <img src="/images/resume.png" alt="Personal Portfolio Website" className="project-image" />
                    <p><strong>Personal Portfolio Website:</strong> Built a responsive and interactive personal portfolio using React and styled-components.</p>
                  </div>
                </div>
              }
            />
          </Parallax>
        </main>
        <Footer id="footer" />
      </div>
    </ParallaxProvider>
  );
};

export default App;
