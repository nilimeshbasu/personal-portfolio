export default function Skills() {
  const services = [
    {
      title: "React & JSX",
      desc: "Building scalable, reusable components with modular architectures.",
      icon: "⚛️"
    },
    {
      title: "UI/UX Layouts",
      desc: "Creating elegant, responsive interfaces following visual design guidelines.",
      icon: "🎨"
    },
    {
      title: "State Management",
      desc: "Handling complex application data flow cleanly using React hooks.",
      icon: "⚡"
    },
    {
      title: "Version Control",
      desc: "Organizing clean git repositories and GitHub code submissions.",
      icon: "📦"
    }
  ];

  return (
    <section id="skills" className="section-container">
      <div className="section-header">
        <span className="section-tag">WHAT I DO</span>
        <h2>Services &amp; Expertise</h2>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
