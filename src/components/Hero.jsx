import profileImage from "../assets/Muhammad_Shamaim.jpg";
import cv from "../assets/Muhammad_Shamaim_CV.pdf";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>

        <h1>Muhammad Shamaim</h1>

        <h2>Software Engineer & AI Web Developer</h2>

        <p className="hero-description">
          Software Engineering graduate passionate about building
          intelligent, modern, and user-focused web applications.
        </p>

        <p className="hero-status">
          ● Open to Software Engineering Opportunities

          
        </p>

        <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
                View My Projects
            </a>

            <a href="#contact" className="btn secondary-btn">
                Contact Me
            </a>

            <a
                href={cv}
                download="Muhammad_Shamaim_CV.pdf"
                className="btn secondary-btn"
            >
                Download CV
            </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src={profileImage}
            alt="Muhammad Shamaim"
        />
      </div>
    </section>
  );
}

export default Hero;