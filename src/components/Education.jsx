function Education() {
  const education = [
    {
      degree: "BS Software Engineering",
      institution: "Government Graduate College, Faisalabad",
      duration: "2022 - 2026",
      result: "CGPA: 3.85 / 4.00",
    },
    {
      degree: "HSSC - Pre-Engineering",
      institution: "Intermediate Education",
      duration: "2022",
      result: "953 / 1100",
    },
    {
      degree: "SSC - Science",
      institution: "Secondary Education",
      duration: "2020",
      result: "1023 / 1100",
    },
  ];

  return (
    <section id="education" className="education">
      <div className="section-container">
        <p className="section-label">EDUCATION</p>

        <h2>My Education</h2>

        <div className="education-grid">
          {education.map((item) => (
            <div className="education-card" key={item.degree}>
              <h3>{item.degree}</h3>

              <p>{item.institution}</p>

              <span>{item.duration}</span>

              <strong>{item.result}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;