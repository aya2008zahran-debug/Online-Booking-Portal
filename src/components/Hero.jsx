import React from 'react';
import { Search, MapPin, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section style={{
      padding: '8rem 5% 4rem',
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      alignItems: 'center',
      gap: '4rem',
      background: 'linear-gradient(135deg, #f0f4f8 0%, #e1e9f1 100%)',
    }}>
      <div className="fade-in">
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: 800,
          color: 'var(--primary)',
          marginBottom: '1.5rem',
          lineHeight: 1.2
        }}>
          صحتك في أيدٍ أمينة.. <br />
          <span style={{ color: 'var(--text-main)' }}>احجز موعدك في ثوانٍ</span>
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: 'var(--text-muted)',
          marginBottom: '2.5rem',
          maxWidth: '600px'
        }}>
          ابحث عن أفضل الأطباء في مختلف التخصصات، واحصل على استشارات طبية موثوقة بكل سهولة وأمان.
        </p>

        <div className="glass" style={{
          padding: '1rem',
          borderRadius: 'var(--radius)',
          boxShadow: 'var(--shadow-lg)',
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          maxWidth: '800px'
        }}>
          <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Search size={20} color="var(--primary)" style={{ marginLeft: '0.8rem' }} />
            <input 
              type="text" 
              placeholder="ابحث بالتخصص، اسم الطبيب، أو العيادة" 
              style={{
                width: '100%',
                border: 'none',
                padding: '0.8rem',
                fontSize: '1rem',
                background: 'transparent',
                outline: 'none'
              }}
            />
          </div>
          <button style={{
            padding: '1rem 2.5rem',
            background: 'var(--primary)',
            color: 'var(--white)',
            borderRadius: 'var(--radius)',
            fontWeight: 700,
            fontSize: '1.1rem'
          }}>
            ابحث الآن
          </button>
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <div style={{
          width: '100%',
          height: '500px',
          borderRadius: 'var(--radius)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)',
          border: '8px solid var(--white)'
        }}>
          <img 
            src="/hero-doctor.png" 
            alt="طبيب مختص" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop';
            }}
          />
        </div>
        {/* Floating cards for "wow" factor */}
        <div className="glass" style={{
          position: 'absolute',
          bottom: '-20px',
          right: '-20px',
          padding: '1rem',
          borderRadius: 'var(--radius)',
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'var(--success)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
          }}>✓</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>توفّر فوري</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>أكثر من 500 طبيب متاح</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
