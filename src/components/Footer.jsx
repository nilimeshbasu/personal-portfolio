export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="nav-logo">
              <span className="logo-icon">▲</span>
              <span className="logo-text">NILIM <span>PORTFOLIO</span></span>
            </div>
            <p>Building high quality web applications with React &amp; modern CSS.</p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h4>NAVIGATION</h4>
              <ul>
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>CONNECT</h4>
              <ul>
                <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Nilim. All rights reserved.</p>
          <p className="footer-tagline">DESIGN INSPIRED BY EDITORIAL UI/UX</p>
        </div>
      </div>
    </footer>
  );
}
