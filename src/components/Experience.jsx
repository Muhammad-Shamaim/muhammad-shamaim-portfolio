function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-container">
        <p className="section-label">EXPERIENCE</p>

        <h2>Professional Experience</h2>

        <p className="section-description">
          Experience in teaching, mentoring, technical communication, and
          applying software engineering concepts in practical and academic
          environments.
        </p>

        <div className="experience-list">
          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3>Academy Teacher</h3>
                <p className="experience-company">
                  Computer Science & Programming
                </p>
              </div>

              <span className="experience-date">
                2022 — Present
              </span>
            </div>

            <ul>
              <li>
                Teaching Computer Science and programming concepts to
                students.
              </li>
              <li>
                Preparing lessons, exercises, assessments, and learning
                materials.
              </li>
              <li>
                Explaining programming fundamentals and helping students
                develop problem-solving skills.
              </li>
              <li>
                Managing classroom activities and supporting students'
                learning progress.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;