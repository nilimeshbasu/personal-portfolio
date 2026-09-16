export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span className="logo-icon">▲</span>
        <span className="logo-text">NILIM <span>PORTFOLIO</span></span>
      </div>
      <ul className="nav-menu">
        <li><a href="#header">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#education">EDUCATION</a></li>
        <li><a href="#skills">SKILLS</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
      <a href="#contact" className="nav-btn">LET'S TALK &rarr;</a>
    </nav>
  );
}
