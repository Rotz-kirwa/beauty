import { useCart } from '../context/CartContext';

export default function Header({ onCartClick, onNavigate }) {
  const { cart, wishlist } = useCart();

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={{...styles.logo, cursor: 'pointer'}} onClick={() => onNavigate('home')}>✨ BeautyShop</h1>
        <nav style={styles.nav}>
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
      </div>
    </header>
  );
}

const styles = {
  header: { background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', boxShadow: 'none', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, width: '100%' },
  container: { maxWidth: '1400px', margin: '0 auto', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' },
  logo: { fontSize: '1.5rem', fontWeight: 'bold', color: '#d946ef', margin: 0 },
  nav: { display: 'flex', gap: '2rem', alignItems: 'center', flex: 1, justifyContent: 'flex-end' },
  navLink: { textDecoration: 'none', color: '#333', fontSize: '1rem', fontWeight: '500', transition: 'color 0.2s', background: 'none', border: 'none', cursor: 'pointer' },
  icons: { display: 'flex', gap: '0.5rem', alignItems: 'center' },
  iconBtn: { background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', position: 'relative', padding: '0.5rem', color: '#333' },
  badge: { position: 'absolute', top: 0, right: 0, background: '#d946ef', color: '#fff', borderRadius: '50%', width: 18, height: 18, fontSize: '0.7rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }
};
