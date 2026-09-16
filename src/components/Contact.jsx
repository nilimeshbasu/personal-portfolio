import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '80px 10%', backgroundColor: '#f4f5f6', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
        
        {/* Email Card */}
        <div style={{ backgroundColor: 'white', padding: '50px 30px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'center', flex: '1', minWidth: '280px' }}>
          <p style={{ textTransform: 'uppercase', color: '#878e99', letterSpacing: '2px', fontSize: '12px', marginBottom: '15px', fontWeight: 'bold' }}>Email</p>
          <a href="mailto:nilimeshbasu000@gmail.com" style={{ fontSize: '1.2rem', color: '#1e2125', fontWeight: 'bold', textDecoration: 'none' }}>nilimeshbasu000@gmail.com</a>
        </div>

        {/* Phone Card */}
        <div style={{ backgroundColor: 'white', padding: '50px 30px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'center', flex: '1', minWidth: '280px' }}>
          <p style={{ textTransform: 'uppercase', color: '#878e99', letterSpacing: '2px', fontSize: '12px', marginBottom: '15px', fontWeight: 'bold' }}>Phone</p>
          <a href="tel:+919732948058" style={{ fontSize: '1.2rem', color: '#1e2125', fontWeight: 'bold', textDecoration: 'none' }}>+91 9732948058</a>
        </div>

        {/* Location Card */}
        <div style={{ backgroundColor: 'white', padding: '50px 30px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'center', flex: '1', minWidth: '280px' }}>
          <p style={{ textTransform: 'uppercase', color: '#878e99', letterSpacing: '2px', fontSize: '12px', marginBottom: '15px', fontWeight: 'bold' }}>Location</p>
          <p style={{ fontSize: '1.2rem', color: '#1e2125', fontWeight: 'bold', margin: '0' }}>North 24 Parganas, India</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
