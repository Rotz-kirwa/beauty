import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function Header({ onCartClick, onNavigate }) {
  const { cart, wishlist } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={{...styles.logo, cursor: 'pointer'}} onClick={() => onNavigate('home')}>✨ BeautyShop</h1>
        
        {/* Desktop Navigation */}
        <nav style={styles.desktopNav}>
          <button onClick={() => onNavigate('home')} style={styles.navLink}>Home</button>
          <button onClick={() => onNavigate('shop')} style={styles.navLink}>Shop</button>
          <button onClick={() => onNavigate('about')} style={styles.navLink}>About</button>
          <button onClick={() => onNavigate('contact')} style={styles.navLink}>Contact</button>
          <div style={styles.icons}>
            <button style={styles.iconBtn}>🔍</button>
            <button style={styles.iconBtn}>❤️ {wishlist.length > 0 && <span style={styles.badge}>{wishlist.length}</span>}</button>
            <button style={styles.iconBtn} onClick={onCartClick}>🛒 {cart.length > 0 && <span style={styles.badge}>{cart.length}</span>}</button>
          </div>
        </nav>

        {/* Mobile Hamburger Button */}
        <button className="mobile-hamburger" style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="mobile-nav" style={styles.mobileNav}>
            <button onClick={() => { onNavigate('home'); setMenuOpen(false); }} style={styles.mobileNavLink}>Home</button>
            <button onClick={() => { onNavigate('shop'); setMenuOpen(false); }} style={styles.mobileNavLink}>Shop</button>
            <button onClick={() => { onNavigate('about'); setMenuOpen(false); }} style={styles.mobileNavLink}>About</button>
            <button onClick={() => { onNavigate('contact'); setMenuOpen(false); }} style={styles.mobileNavLink}>Contact</button>
            <div style={styles.mobileIcons}>
              <button style={styles.mobileIconBtn}>🔍</button>
              <button style={styles.mobileIconBtn}>❤️ {wishlist.length > 0 && <span style={styles.badge}>{wishlist.length}</span>}</button>
              <button style={styles.mobileIconBtn} onClick={onCartClick}>🛒 {cart.length > 0 && <span style={styles.badge}>{cart.length}</span>}</button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

const styles = {
  header: { background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, width: '100%', height: '70px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' },
  container: { maxWidth: '1400px', margin: '0 auto', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', position: 'relative', height: '100%' },
  logo: { fontSize: '1.5rem', fontWeight: 'bold', color: '#d946ef', margin: 0, whiteSpace: 'nowrap' },
  hamburger: { display: 'none', background: 'none', border: 'none', fontSize: '1.8rem', cursor: 'pointer', color: '#333', padding: '0.5rem', zIndex: 101 },
  desktopNav: { display: 'flex', gap: '2rem', alignItems: 'center', flex: 1, justifyContent: 'flex-end' },
  navLink: { textDecoration: 'none', color: '#333', fontSize: '1rem', fontWeight: '500', transition: 'color 0.2s', background: 'none', border: 'none', cursor: 'pointer' },
  icons: { display: 'flex', gap: '0.5rem', alignItems: 'center' },
  iconBtn: { background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', position: 'relative', padding: '0.5rem', color: '#333' },
  badge: { position: 'absolute', top: -5, right: -5, background: '#d946ef', color: '#fff', borderRadius: '50%', width: 18, height: 18, fontSize: '0.7rem', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  mobileNav: { position: 'fixed', top: '70px', right: 0, width: '75%', maxHeight: 'calc(100vh - 70px)', background: 'linear-gradient(135deg, #fff 0%, #f9f3ff 100%)', boxShadow: '-4px 0 20px rgba(217, 70, 239, 0.15)', display: 'flex', flexDirection: 'column', padding: '1.5rem', gap: '0.5rem', zIndex: 99, overflowY: 'auto' },
  mobileNavLink: { width: '100%', textAlign: 'left', padding: '0.85rem 1.2rem', fontSize: '1.1rem', background: 'none', border: 'none', color: '#333', fontWeight: '500', cursor: 'pointer', borderRadius: '8px', transition: 'all 0.2s ease', borderLeft: '3px solid transparent' },
  mobileIcons: { display: 'flex', gap: '1rem', alignItems: 'center', paddingTop: '1.5rem', borderTop: '2px solid rgba(217, 70, 239, 0.2)', marginTop: '1rem' },
  mobileIconBtn: { flex: 1, padding: '0.8rem', fontSize: '1rem', borderRadius: '8px', background: 'rgba(217, 70, 239, 0.1)', color: '#d946ef', border: 'none', cursor: 'pointer', position: 'relative' }
};
