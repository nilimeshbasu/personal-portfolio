export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Techno India University",
      period: "2023 - PRESENT",
      details: "Specializing in Advanced Frontend Development, React Frameworks, Software Engineering, and Web Technologies."
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "State Education Board",
      period: "2021 - 2023",
      details: "Completed coursework with a primary concentration in Computer Science and Mathematics."
    }
  ];

  return (
    <section id="education" className="section-container bg-muted">
      <div className="section-header">
        <span className="section-tag">ACADEMICS</span>
        <h2>Education &amp; Qualifications</h2>
      </div>

      <div className="education-list">
        {educationData.map((item, index) => (
          <div key={index} className="education-card">
            <span className="edu-period">{item.period}</span>
            <div className="edu-body">
              <h3>{item.degree}</h3>
              <h4>{item.institution}</h4>
              <p>{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
