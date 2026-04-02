import React from 'react';
import { Users, Heart, Star, Activity } from 'lucide-react';

const Stats = () => {
  const statsData = [
    { label: 'طبيب مختص', value: '500+', icon: <Users size={28} /> },
    { label: 'مريض سعيد', value: '10K+', icon: <Heart size={28} /> },
    { label: 'تقييم عام', value: '4.9/5', icon: <Star size={28} /> },
    { label: 'سنة خبرة', value: '15+', icon: <Activity size={28} /> },
  ];

  return (
    <section style={{
      padding: '4rem 5%',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '2rem',
      marginTop: '-50px'
    }}>
      {statsData.map((stat, idx) => (
        <div key={idx} className="glass" style={{
          padding: '2rem',
          borderRadius: 'var(--radius)',
          boxShadow: 'var(--shadow-md)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          border: '2px solid rgba(0,86,179,0.05)'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'rgba(0,86,179,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary)'
          }}>
            {stat.icon}
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)' }}>
            {stat.value}
          </div>
          <div style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            {stat.label}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Stats;
