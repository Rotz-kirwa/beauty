import { SOCIALS } from '../config/site'

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
          <div style={styles.column}>
            <h4 style={styles.subheading}>Follow us</h4>
            <div style={styles.socialRow}>
              <a aria-label="Instagram" href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" style={{ ...styles.socialLink, color: '#E1306C' }}>
                {/* Instagram SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5z"/>
                  <path d="M12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5z"/>
                  <circle cx="17.5" cy="6.5" r="0.9" />
                </svg>
              </a>

              <a aria-label="Facebook" href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" style={{ ...styles.socialLink, color: '#1877F2' }}>
                {/* Facebook SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.4V12h2.4V9.8c0-2.4 1.4-3.7 3.5-3.7 1 0 2 .08 2 .08v2.2h-1.1c-1.1 0-1.4.68-1.4 1.4V12h2.4l-.4 2.9h-2v7A10 10 0 0 0 22 12z"/>
                </svg>
              </a>

              <a aria-label="TikTok" href={SOCIALS.tiktok} target="_blank" rel="noopener noreferrer" style={{ ...styles.socialLink, background: 'transparent', padding: 6 }}>
                {/* TikTok two-tone approximation: cyan, pink, then black center for depth */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden>
                  <path fill="#69C9D0" transform="translate(-0.5,0)" d="M16.5 3h2.25v2.25H16.5A4.5 4.5 0 1 1 12 9.75V7.5h1.5v6.75A4.5 4.5 0 1 1 18 9.75V3z" />
                  <path fill="#EE1D52" transform="translate(0.5,0)" d="M16.5 3h2.25v2.25H16.5A4.5 4.5 0 1 1 12 9.75V7.5h1.5v6.75A4.5 4.5 0 1 1 18 9.75V3z" />
                  <path fill="#010101" d="M16.5 3h2.25v2.25H16.5A4.5 4.5 0 1 1 12 9.75V7.5h1.5v6.75A4.5 4.5 0 1 1 18 9.75V3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div style={styles.bottom}>
          <p style={styles.copyright}>© 2025 BeautyShop. All rights reserved.</p>
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
  socialRow: { display: 'flex', gap: 12, alignItems: 'center', marginTop: 6 },
  socialLink: { color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 8, background: 'rgba(255,255,255,0.04)', textDecoration: 'none' },
  bottom: { borderTop: '1px solid #333', paddingTop: '1.5rem', textAlign: 'center' },
  copyright: { fontSize: '0.85rem', color: '#999', margin: 0 }
};
