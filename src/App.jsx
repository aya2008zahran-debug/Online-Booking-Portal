import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Departments from './components/Departments';
import Booking from './components/Booking';

const App = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Departments />
        <Booking />
      </main>
      <footer style={{
        padding: '3rem 5%',
        background: 'var(--bg-accent)',
        textAlign: 'center',
        marginTop: '4rem',
        borderTop: '1px solid var(--bg-main)',
        color: 'var(--text-muted)'
      }}>
        <p>&copy; 2026 منصة صحتي - جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
};

export default App;
