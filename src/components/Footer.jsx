export default function Footer({ onNavigate }) {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div style={styles.column}>
            <h3 style={styles.heading}>BeautyShop</h3>
            <p style={styles.text}>Your trusted beauty destination in Kenya</p>
          </div>
          <div style={styles.column}>
            <h4 style={styles.subheading}>Quick Links</h4>
            <button onClick={() => onNavigate('home')} style={styles.link}>Home</button>
            <button onClick={() => onNavigate('shop')} style={styles.link}>Shop</button>
            <button onClick={() => onNavigate('about')} style={styles.link}>About</button>
            <button onClick={() => onNavigate('contact')} style={styles.link}>Contact</button>
          </div>
          <div style={styles.column}>
            <h4 style={styles.subheading}>Contact</h4>
            <p style={styles.text}>📞 +254 762 677 591</p>
            <p style={styles.text}>📧 info@beautyshop.co.ke</p>
          </div>
        </div>
        <div style={styles.bottom}>
          <p style={styles.copyright}>© 2024 BeautyShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: { background: '#1a1a1a', color: '#fff', marginTop: '4rem' },
  container: { maxWidth: '1400px', margin: '0 auto', padding: '3rem 1rem 1rem' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' },
  column: { display: 'flex', flexDirection: 'column', gap: '0.75rem' },
  heading: { fontSize: '1.5rem', color: '#d946ef', margin: 0 },
  subheading: { fontSize: '1.1rem', margin: 0 },
  text: { fontSize: '0.9rem', color: '#ccc', margin: 0 },
  link: { background: 'none', border: 'none', color: '#ccc', textAlign: 'left', cursor: 'pointer', fontSize: '0.9rem', padding: 0, transition: 'color 0.2s' },
  bottom: { borderTop: '1px solid #333', paddingTop: '1.5rem', textAlign: 'center' },
  copyright: { fontSize: '0.85rem', color: '#999', margin: 0 }
};
