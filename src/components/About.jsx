function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <p className="section-label">ABOUT ME</p>

        <h2>Software Engineer & Problem Solver</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              I am a Software Engineering graduate with a strong interest in
              software development, web technologies, and artificial
              intelligence.
            </p>

            <p>
              My academic and practical work has given me experience with
              technologies such as Python, FastAPI, React.js, JavaScript,
              PostgreSQL, NLP, and BERT.
            </p>

            <p>
              I enjoy understanding complex problems, designing practical
              solutions, documenting systems, and continuously improving my
              technical skills.
            </p>
          </div>

          <div className="about-highlights">
            <div className="about-item">
              <span>01</span>
              <h3>Software Engineering</h3>
              <p>
                Requirements analysis, system design, documentation,
                testing, and software development practices.
              </p>
            </div>

            <div className="about-item">
              <span>02</span>
              <h3>AI & NLP</h3>
              <p>
                Experience with BERT, semantic matching, NLP, and
                AI-powered applications.
              </p>
            </div>

            <div className="about-item">
              <span>03</span>
              <h3>Web Development</h3>
              <p>
                Building responsive web interfaces using React.js,
                JavaScript, HTML, and CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;