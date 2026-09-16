export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <div className="cta-banner">
        <div className="cta-content">
          <span className="section-tag light-tag">LET'S CREATE SOMETHING GREAT</span>
          <h2>Have a project in mind? I'd love to hear about it.</h2>
        </div>
        <a href="mailto:nilim@example.com" className="btn btn-primary">LET'S TALK &rarr;</a>
      </div>

      <div className="contact-info-grid">
        <div className="contact-box">
          <span className="contact-label">EMAIL</span>
          <p>nilim@example.com</p>
        </div>
        <div className="contact-box">
          <span className="contact-label">PHONE</span>
          <p>+91 98765 43210</p>
        </div>
        <div className="contact-box">
          <span className="contact-label">LOCATION</span>
          <p>India</p>
        </div>
      </div>
    </section>
  );
}
