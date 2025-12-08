import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function Header({ onCartClick, onNavigate }) {
  const { cart, wishlist } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  const handleCartClick = () => {
    onCartClick();
    setMenuOpen(false);
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Logo */}
        <h1 style={{...styles.logo, cursor: 'pointer'}} onClick={() => handleNavClick('home')}>
          ✨ BeautyShop
        </h1>
        
        {/* Desktop Navigation */}
        <nav style={styles.desktopNav}>
          <button onClick={() => handleNavClick('home')} style={styles.navLink}>Home</button>
          <button onClick={() => handleNavClick('shop')} style={styles.navLink}>Shop</button>
          <button onClick={() => handleNavClick('about')} style={styles.navLink}>About</button>
          <button onClick={() => handleNavClick('contact')} style={styles.navLink}>Contact</button>
          <div style={styles.icons}>
            <button style={styles.iconBtn}>🔍</button>
            <button style={styles.iconBtn} title="Wishlist">
              ❤️ {wishlist.length > 0 && <span style={styles.badge}>{wishlist.length}</span>}
            </button>
            <button style={styles.iconBtn} onClick={handleCartClick} title="Shopping Cart">
              🛒 {cart.length > 0 && <span style={styles.badge}>{cart.length}</span>}
            </button>
          </div>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className="mobile-hamburger" 
          style={styles.hamburger} 
          onClick={() => setMenuOpen(!menuOpen)}
          title={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div style={styles.mobileMenuOverlay} onClick={() => setMenuOpen(false)} />
        )}

        {/* Mobile Menu */}
        <nav style={{...styles.mobileNav, ...(menuOpen ? styles.mobileNavOpen : {})}} className="mobile-nav">
          <div style={styles.mobileMenuContent}>
            <button 
              onClick={() => handleNavClick('home')} 
              style={styles.mobileNavLink}
            >
              🏠 Home
            </button>
            <button 
              onClick={() => handleNavClick('shop')} 
              style={styles.mobileNavLink}
            >
              🛍️ Shop
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              style={styles.mobileNavLink}
            >
              ℹ️ About
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              style={styles.mobileNavLink}
            >
              📞 Contact
            </button>
            
            {/* Mobile Icons Section */}
            <div style={styles.mobileIconsSection}>
              <button style={styles.mobileIconBtn} title="Search">
                🔍
              </button>
              <button style={styles.mobileIconBtn} title="Wishlist">
                ❤️ {wishlist.length > 0 && <span style={styles.badge}>{wishlist.length}</span>}
              </button>
              <button 
                style={styles.mobileIconBtn} 
                onClick={handleCartClick}
                title="Shopping Cart"
              >
                🛒 {cart.length > 0 && <span style={styles.badge}>{cart.length}</span>}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: { 
    background: 'rgba(255,255,255,0.98)', 
    backdropFilter: 'blur(10px)', 
    position: 'fixed', 
    top: 0, 
    left: 0, 
    right: 0, 
    zIndex: 100, 
    width: '100%', 
    height: '70px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
  },
  container: { 
    maxWidth: '1400px', 
    margin: '0 auto', 
    padding: '1rem 2rem', 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    width: '100%', 
    position: 'relative', 
    height: '100%'
  },
  logo: { 
    fontSize: '1.5rem', 
    fontWeight: 'bold', 
    color: '#d946ef', 
    margin: 0, 
    whiteSpace: 'nowrap',
    transition: 'transform 0.2s'
  },
  hamburger: { 
    display: 'none', 
    background: 'none', 
    border: 'none', 
    fontSize: '1.8rem', 
    cursor: 'pointer', 
    color: '#333', 
    padding: '0.5rem', 
    zIndex: 102
  },
  desktopNav: { 
    display: 'flex', 
    gap: '2rem', 
    alignItems: 'center', 
    flex: 1, 
    justifyContent: 'flex-end'
  },
  navLink: { 
    color: '#333', 
    fontSize: '1rem', 
    fontWeight: '500', 
    transition: 'color 0.2s', 
    background: 'none', 
    border: 'none', 
    cursor: 'pointer',
    padding: '0.5rem 1rem'
  },
  icons: { 
    display: 'flex', 
    gap: '1rem', 
    alignItems: 'center'
  },
  iconBtn: { 
    background: 'none', 
    border: 'none', 
    fontSize: '1.5rem', 
    cursor: 'pointer', 
    position: 'relative', 
    padding: '0.5rem', 
    color: '#333',
    transition: 'transform 0.2s'
  },
  badge: { 
    position: 'absolute', 
    top: -5, 
    right: -5, 
    background: '#d946ef', 
    color: '#fff', 
    borderRadius: '50%', 
    width: 18, 
    height: 18, 
    fontSize: '0.65rem', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  mobileMenuOverlay: {
    position: 'fixed',
    top: '70px',
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.3)',
    zIndex: 98
  },
  mobileNav: { 
    position: 'fixed', 
    top: '70px', 
    right: '-100%',
    width: '75%', 
    height: 'calc(100vh - 70px)', 
    background: 'linear-gradient(135deg, #fff 0%, #f9f3ff 100%)',
    boxShadow: '-4px 0 20px rgba(217, 70, 239, 0.2)',
    zIndex: 99, 
    transition: 'right 0.3s ease-in-out',
    overflowY: 'auto'
  },
  mobileNavOpen: {
    right: 0
  },
  mobileMenuContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5rem 0',
    gap: 0
  },
  mobileNavLink: { 
    width: '100%',
    textAlign: 'left',
    padding: '1rem 1.5rem', 
    fontSize: '1.1rem', 
    background: 'none', 
    border: 'none', 
    color: '#333', 
    fontWeight: '500', 
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    borderLeft: '4px solid transparent',
    borderBottom: '1px solid rgba(217, 70, 239, 0.1)'
  },
  mobileIconsSection: { 
    display: 'flex', 
    gap: '1rem', 
    alignItems: 'center', 
    paddingTop: '1.5rem', 
    paddingBottom: '1rem',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    borderTop: '2px solid rgba(217, 70, 239, 0.2)',
    marginTop: '1rem',
    justifyContent: 'space-around'
  },
  mobileIconBtn: { 
    flex: 1, 
    padding: '0.8rem', 
    fontSize: '1rem', 
    borderRadius: '8px', 
    background: 'rgba(217, 70, 239, 0.1)', 
    color: '#d946ef', 
    border: 'none', 
    cursor: 'pointer', 
    position: 'relative',
    transition: 'all 0.2s ease',
    fontWeight: '500'
  }
};
