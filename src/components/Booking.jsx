import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, MapPin, Calendar, Clock, CreditCard, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const Booking = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    specialty: '',
    doctor: '',
    time: '10:30 صباحاً'
  });

  const steps = [
    { id: 1, title: 'اختر التخصص', icon: <MapPin size={24} /> },
    { id: 2, title: 'اختر الطبيب', icon: <Calendar size={24} /> },
    { id: 3, title: 'اختر الوقت', icon: <Clock size={24} /> },
  ];

  const handleBooking = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('bookings')
        .insert([
          { 
            specialty: formData.specialty, 
            doctor: formData.doctor, 
            booking_time: formData.time 
          }
        ]);

      if (error) throw error;

      alert('تم الحجز بنجاح وحفظه في قاعدة البيانات!');
      setStep(1); // Reset
    } catch (err) {
      console.error('Error booking:', err.message);
      alert('حدث خطأ أثناء الحجز، تأكد من وجود جدول "bookings" في Supabase.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{ padding: '6rem 5%', background: 'rgba(0,86,179,0.02)' }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '3rem',
        borderRadius: 'var(--radius)',
        background: 'var(--bg-accent)',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid rgba(0,86,179,0.1)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem' }}>
            احجز موعدك الآن
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '2rem' }}>
            {steps.map((s) => (
              <div key={s.id} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                opacity: step >= s.id ? 1 : 0.4
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '15px',
                  background: step >= s.id ? 'var(--primary)' : 'var(--bg-main)',
                  color: step >= s.id ? 'white' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {s.icon}
                </div>
                <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>{s.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          minHeight: '300px',
          padding: '2rem',
          background: 'var(--bg-main)',
          borderRadius: 'var(--radius)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem'
        }}>
          {step === 1 && (
            <div style={{ textAlign: 'center', width: '100%' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                {['القلب', 'الأسنان', 'الأطفال', 'العيون', 'العظام', 'الجلدية'].map((s) => (
                  <button key={s} onClick={() => {
                    setFormData({ ...formData, specialty: s });
                    setStep(2);
                  }} style={{
                    padding: '1.5rem',
                    background: 'white',
                    borderRadius: '15px',
                    fontWeight: 700,
                    boxShadow: 'var(--shadow-sm)',
                    border: '1.5px solid transparent'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = 'transparent'}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div style={{ textAlign: 'center', width: '100%' }}>
              <p style={{ marginBottom: '2rem', fontWeight: 700 }}>ابحث عن الطبيب المفضل لديك</p>
              <div style={{
                padding: '1rem',
                background: 'white',
                borderRadius: 'var(--radius)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <MapPin size={24} color="var(--primary)" />
                <input 
                  type="text" 
                  placeholder="اسم الطبيب..." 
                  onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                  style={{ border: 'none', background: 'transparent', width: '100%' }} 
                />
              </div>
              <button 
                disabled={!formData.doctor}
                onClick={() => setStep(3)}
                style={{ 
                  marginTop: '2rem', 
                  padding: '1rem 3rem', 
                  background: formData.doctor ? 'var(--primary)' : '#ccc', 
                  color: 'white', 
                  borderRadius: 'var(--radius)', 
                  fontWeight: 700,
                  cursor: formData.doctor ? 'pointer' : 'not-allowed'
                }}
              >
                المتابعة
              </button>
            </div>
          )}

          {step === 3 && (
            <div style={{ textAlign: 'center' }}>
               <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--success)', marginBottom: '2rem' }}>
                 متاح الآن | {formData.time}
               </div>
               <button 
                  disabled={loading}
                  onClick={handleBooking}
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.2rem 4rem', 
                    background: 'var(--success)', 
                    color: 'white', 
                    borderRadius: 'var(--radius)', 
                    fontWeight: 800, 
                    fontSize: '1.2rem' 
                  }}
               >
                 {loading && <Loader2 className="animate-spin" />}
                 {loading ? 'جاري الحفظ...' : 'تأكيد الحجز وحفظ في Supabase'}
               </button>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
          {step > 1 && (
            <button onClick={() => setStep(step - 1)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}>
              <ChevronRight size={20} /> السابق
            </button>
          )}
          <div></div>
          {step < 3 && (
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>الخطوة {step} من 3</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Booking;
