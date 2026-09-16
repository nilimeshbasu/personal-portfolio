import React from 'react';
import profileImg from '../assets/profile.jpeg';

const Header = () => {
  return (
    <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '80px 10%', fontFamily: 'sans-serif', backgroundColor: '#f4f5f6', minHeight: '80vh', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', paddingRight: '50px', minWidth: '300px' }}>
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
        
        <div style={{ display: 'flex', gap: '50px', marginTop: '40px', flexWrap: 'wrap' }}>
          <div>
            <p style={{ textTransform: 'uppercase', fontSize: '14px', letterSpacing: '2px', marginBottom: '15px' }}>Find With Me</p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="https://github.com/nilimeshbasu" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', backgroundColor: 'white', borderRadius: '5px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', color: '#1e2125', textDecoration: 'none', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                 <svg height="24" width="24" viewBox="0 0 16 16" fill="currentColor">
                   <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                 </svg>
              </a>
            </div>
          </div>

          <div>
            <p style={{ textTransform: 'uppercase', fontSize: '14px', letterSpacing: '2px', marginBottom: '15px' }}>Best Skill On</p>
            <div style={{ display: 'flex', gap: '15px' }}>
               <div style={{ padding: '15px 20px', backgroundColor: 'white', borderRadius: '5px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', fontWeight: 'bold' }}>React</div>
               <div style={{ padding: '15px 20px', backgroundColor: 'white', borderRadius: '5px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', fontWeight: 'bold' }}>Node.js</div>
               <div style={{ padding: '15px 20px', backgroundColor: 'white', borderRadius: '5px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', fontWeight: 'bold' }}>MongoDB</div>
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ flex: '0.8', display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
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
