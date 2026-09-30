function Skills() {
  const skillCategories = [
    {
      title: "Programming & Web",
      skills: [
        "Python",
        "JavaScript",
        "React.js",
        "HTML5",
        "CSS3",
        "FastAPI",
        "REST APIs",
      ],
    },
    {
      title: "AI & Data",
      skills: [
        "NLP",
        "BERT",
        "Semantic Matching",
        "PostgreSQL",
      ],
    },
    {
      title: "Software Engineering",
      skills: [
        "OOP",
        "Requirements Analysis",
        "System Analysis",
        "Technical Documentation",
        "Software Testing",
        "Git & GitHub",
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <p className="section-label">TECHNICAL EXPERTISE</p>
            <h2>Skills & Technologies</h2>

        <p className="section-description">
            Technologies and software engineering skills I have developed through
            academic projects, practical work, and continuous learning.
        </p>

        <div className="skills-categories">
          {skillCategories.map((category) => (
            <div className="skill-category" key={category.title}>
              <h3>{category.title}</h3>

              <div className="skills-grid">
                {category.skills.map((skill) => (
                  <div className="skill-card" key={skill}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;