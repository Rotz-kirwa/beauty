import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(() => {
    const saved = sessionStorage.getItem('currentPage');
    return saved || 'home';
  });

  const handleNavigate = (page) => {
    setCurrentPage(page);
    sessionStorage.setItem('currentPage', page);
    window.scrollTo(0, 0);
  };

  const whatsappStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '60px',
    height: '60px',
    background: '#25D366',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    zIndex: 1000,
    textDecoration: 'none',
    fontSize: '2rem'
  };

  return (
    <CartProvider>
      <div style={{ minHeight: '100vh', background: '#fafafa' }}>
        <Header onCartClick={() => setCartOpen(true)} onNavigate={handleNavigate} />
        {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
        {currentPage === 'shop' && <Shop />}
        {currentPage === 'about' && <About />}
        {currentPage === 'contact' && <Contact />}
        <Footer onNavigate={handleNavigate} />
        <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        <a href="https://wa.me/254762677591" target="_blank" rel="noopener noreferrer" style={whatsappStyle}>
          💬
        </a>
      </div>
    </CartProvider>
  );
}

export default App;
