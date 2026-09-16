import React from 'react';
import profileImg from '../assets/profile.jpeg';

const Header = () => {
  return (
    <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '80px 10%', fontFamily: 'sans-serif', backgroundColor: '#f4f5f6', minHeight: '80vh' }}>
      <div style={{ flex: '1', paddingRight: '50px' }}>
        <p style={{ letterSpacing: '2px', color: '#f9004d', textTransform: 'uppercase', fontWeight: 'bold', fontSize: '14px' }}>
          Welcome to my world
        </p>
        <h1 style={{ fontSize: '3.5rem', color: '#1e2125', margin: '20px 0', fontWeight: 'bold' }}>
          Hi, I'm <span style={{ color: '#f9004d' }}>Nilimesh Basu</span><br/>
          a Full Stack Developer.
        </h1>
        <p style={{ color: '#3c3e41', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '600px' }}>
          Motivated and detail-oriented BCA student with a strong foundation in full-stack web development. 
          Skilled in frontend and backend technologies including HTML, CSS, JavaScript, React, Node.js, and databases like MongoDB and SQL.
        </p>
        <div style={{ marginTop: '40px' }}>
          <p style={{ textTransform: 'uppercase', fontSize: '14px', letterSpacing: '2px', marginBottom: '15px' }}>Best Skill On</p>
          <div style={{ display: 'flex', gap: '15px' }}>
             {/* Placeholder for Skill Icons */}
             <div style={{ padding: '15px', backgroundColor: 'white', borderRadius: '5px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', fontWeight: 'bold' }}>React</div>
             <div style={{ padding: '15px', backgroundColor: 'white', borderRadius: '5px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', fontWeight: 'bold' }}>Node.js</div>
             <div style={{ padding: '15px', backgroundColor: 'white', borderRadius: '5px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', fontWeight: 'bold' }}>MongoDB</div>
          </div>
        </div>
      </div>
      <div style={{ flex: '0.8', display: 'flex', justifyContent: 'center' }}>
        <img 
          src={profileImg} 
          alt="Nilimesh Basu" 
          style={{ width: '100%', maxWidth: '400px', borderRadius: '10px', boxShadow: '0px 20px 40px rgba(0,0,0,0.1)' }} 
        />
      </div>
    </section>
  );
};

export default Header;
