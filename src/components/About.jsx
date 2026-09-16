export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="section-header">
        <span className="section-tag">ABOUT ME</span>
        <h2>Crafting modern web solutions with precision and visual clarity.</h2>
      </div>
      
      <div className="about-grid">
        <div className="about-card">
          <h3>Who I Am</h3>
          <p>
            I am a dedicated frontend developer focused on building clean, performant, and visual-first web applications using modern React architecture.
          </p>
        </div>
        <div className="about-card">
          <h3>Design Philosophy</h3>
          <p>
            Great digital experiences come from restraint, simple navigation, responsive designs, and crisp component architecture.
          </p>
        </div>
      </div>

      <div className="stats-bar">
        <div className="stat-item">
          <span className="stat-num">15+</span>
          <span className="stat-label">Projects Built</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">100%</span>
          <span className="stat-label">Responsive</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">7+</span>
          <span className="stat-label">React Components</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">2026</span>
          <span className="stat-label">BCA Portfolio</span>
        </div>
      </div>
    </section>
  );
}
