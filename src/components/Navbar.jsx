import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 10%',
      backgroundColor: '#f4f5f6',
      fontFamily: 'sans-serif',
      borderBottom: '1px solid #e5e5e5',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem', fontWeight: 'bold', color: '#1e2125' }}>
        <span style={{ color: '#f9004d' }}>▲</span> NILIMESH <span style={{ fontWeight: '300', color: '#878e99' }}>PORTFOLIO</span>
      </div>
      <div style={{ display: 'flex', gap: '30px' }}>
        <a href="#home" style={{ textDecoration: 'none', color: '#1e2125', fontWeight: '600', fontSize: '14px' }}>HOME</a>
        <a href="#about" style={{ textDecoration: 'none', color: '#1e2125', fontWeight: '600', fontSize: '14px' }}>ABOUT</a>
        <a href="#education" style={{ textDecoration: 'none', color: '#1e2125', fontWeight: '600', fontSize: '14px' }}>EDUCATION</a>
        <a href="#skills" style={{ textDecoration: 'none', color: '#1e2125', fontWeight: '600', fontSize: '14px' }}>SKILLS</a>
        <a href="#contact" style={{ textDecoration: 'none', color: '#1e2125', fontWeight: '600', fontSize: '14px' }}>CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;
