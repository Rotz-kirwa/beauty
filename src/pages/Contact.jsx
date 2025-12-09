import { useState } from 'react';
import { SITE_PHONE } from '../config/site';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', productType: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', productType: '', message: '' });
  };

  return (
    <div style={styles.container} className="contact-page">
      <h1 style={styles.title}>Contact Us</h1>
      <div style={styles.grid}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2 style={styles.subtitle}>Send us a Message</h2>
          <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required style={styles.input} />
          <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required style={styles.input} />
          <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required style={styles.input} />
          <select value={formData.productType} onChange={(e) => setFormData({...formData, productType: e.target.value})} required style={styles.input}>
            <option value="">Select Product Type</option>
            <option value="skincare">Skincare</option>
            <option value="makeup">Makeup</option>
            <option value="haircare">Hair Care</option>
            <option value="fragrance">Fragrances</option>
            <option value="bathbody">Bath & Body</option>
          </select>
          <textarea placeholder="Your Message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required style={styles.textarea} rows="5"></textarea>
          <button type="submit" style={styles.submitBtn}>Send Message</button>
        </form>
        <div style={styles.content}>
          <h2 style={styles.subtitle}>Get in Touch</h2>
          <p style={styles.text}>We'd love to hear from you!</p>
          <div style={styles.contactItem}>
            <span style={styles.icon}>📞</span>
            <div>
              <strong>Phone:</strong>
              <p style={styles.detail}>{SITE_PHONE}</p>
            </div>
          </div>
          <div style={styles.contactItem}>
            <span style={styles.icon}>📧</span>
            <div>
              <strong>Email:</strong>
              <p style={styles.detail}>info@beautyshop.co.ke</p>
            </div>
          </div>
          <div style={styles.contactItem}>
            <span style={styles.icon}>📍</span>
            <div>
              <strong>Location:</strong>
              <p style={styles.detail}>Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth: '1200px', margin: '0 auto', padding: '3rem 1rem' },
  title: { fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#333', marginBottom: '2rem', textAlign: 'center' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' },
  content: { background: '#fff', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' },
  subtitle: { fontSize: '1.5rem', color: '#d946ef', marginBottom: '1rem' },
  text: { fontSize: '1rem', lineHeight: '1.6', color: '#666', marginBottom: '1.5rem' },
  contactItem: { display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem', padding: '1rem', background: '#f9f9f9', borderRadius: '12px' },
  icon: { fontSize: '1.5rem' },
  detail: { margin: '0.5rem 0 0', color: '#666', fontSize: '0.95rem' },
  form: { background: '#fff', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', gap: '1rem' },
  input: { padding: '0.9rem', border: '2px solid #e5e5e5', borderRadius: '8px', fontSize: '1rem', outline: 'none', transition: 'border 0.2s', background: '#fff', color: '#333' },
  textarea: { padding: '0.9rem', border: '2px solid #e5e5e5', borderRadius: '8px', fontSize: '1rem', outline: 'none', resize: 'vertical', fontFamily: 'inherit', transition: 'border 0.2s', background: '#fff', color: '#333' },
  submitBtn: { background: '#d946ef', color: '#fff', border: 'none', padding: '1rem', borderRadius: '8px', fontSize: '1.1rem', fontWeight: '600', cursor: 'pointer', transition: 'background 0.2s' }
};
