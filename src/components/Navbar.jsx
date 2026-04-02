import React from 'react';
import { Menu, User, Phone, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '1rem 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 800,
          color: 'var(--primary)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <span style={{ fontSize: '2rem' }}>✙</span>
          صحتي
        </div>
        
        <div className="nav-links" style={{
          display: 'flex',
          gap: '1.5rem',
          fontSize: '0.95rem',
          fontWeight: 600
        }}>
          <a href="#doctors">بحث عن طبيب</a>
          <a href="#specialties">التخصصات</a>
          <a href="#clinics">العيادات</a>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button style={{
          padding: '0.6rem 1.5rem',
          borderRadius: 'var(--radius)',
          background: 'var(--bg-accent)',
          border: '1.5px solid var(--primary)',
          color: 'var(--primary)',
          fontWeight: 700
        }}>
          دخول
        </button>
        <button style={{
          padding: '0.6rem 1.5rem',
          borderRadius: 'var(--radius)',
          background: 'var(--primary)',
          color: 'var(--white)',
          fontWeight: 700,
          boxShadow: '0 4px 14px 0 rgba(0,86,179,0.39)'
        }}>
          احجز الآن
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
