function Projects() {
  const projects = [
    {
      title: "AI-Powered Wine Recommendation System",
      description:
        "A web-based AI system that recognizes food images and recommends suitable wines based on food pairing and user preferences.",
      technologies:
        "React.js, JavaScript, Node.js, Express.js, PostgreSQL, AI, Image Recognition",
      contribution:
        "Worked on the application flow, recommendation interface, and AI-powered food recognition and wine recommendation features.",
    },
    {
      title: "AI-Powered Resume Ranking System",
      description:
        "An AI-powered system that compares multiple resumes against a job description and ranks candidates using NLP and semantic analysis.",
      technologies:
        "Python, FastAPI, PostgreSQL, React.js, NLP, BERT, Semantic Matching",
      contribution:
        "Contributed to system analysis, requirements analysis, software design, technical documentation, workflows, and testing documentation.",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <p className="section-label">MY WORK</p>

        <h2>Featured Projects</h2>

        <p className="section-description">
          Academic and practical projects demonstrating my experience in
          software engineering, artificial intelligence, and web development.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={project.title}>
              <span className="project-number">
                0{index + 1}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <h4>Technologies</h4>
              <span>{project.technologies}</span>

              <h4>My Contribution</h4>
              <p>{project.contribution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;