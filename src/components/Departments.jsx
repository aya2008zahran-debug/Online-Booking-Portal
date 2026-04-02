import React from 'react';
import { HeartPulse, Baby, Stethoscope, Scissors } from 'lucide-react';

const Departments = () => {
  const depts = [
    { title: 'أمراض القلب', icon: <HeartPulse size={40} />, count: '24 طبيب' },
    { title: 'طب الأطفال', icon: <Baby size={40} />, count: '18 طبيب' },
    { title: 'طب الأسنان', icon: <Stethoscope size={40} />, count: '32 طبيب' },
    { title: 'الجراحة العامة', icon: <Scissors size={40} />, count: '15 طبيب' },
  ];

  return (
    <section style={{ padding: '6rem 5%' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem' }}>
          تخصصاتنا الطبية
        </h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
          نقدم رعاية طبية شاملة عبر مجموعة واسعة من التخصصات
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '2rem'
      }}>
        {depts.map((dept, idx) => (
          <div key={idx} className="glass" style={{
            padding: '3rem 2rem',
            borderRadius: 'var(--radius)',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'var(--transition)',
            boxShadow: 'var(--shadow-md)',
            borderBottom: '4px solid transparent',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.borderBottomColor = 'var(--primary)';
            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderBottomColor = 'transparent';
            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
          }}
          >
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '20px',
              background: 'var(--bg-main)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary)',
            }}>
              {dept.icon}
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{dept.title}</h3>
            <span style={{
              padding: '0.4rem 1rem',
              borderRadius: '20px',
              background: 'rgba(0,86,179,0.1)',
              color: 'var(--primary)',
              fontSize: '0.9rem',
              fontWeight: 700
            }}>
              {dept.count}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Departments;
