import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const [hovered, setHovered] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  const isWished = wishlist.find(item => item.id === product.id);

  return (
    <div 
      style={{...styles.card, ...(hovered ? {transform: 'translateY(-8px)', boxShadow: '0 8px 24px rgba(0,0,0,0.15)'} : {})}}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={styles.imageContainer}>
        <img src={product.image} alt={product.name} style={styles.image} loading="lazy" />
        <button onClick={() => toggleWishlist(product)} style={{...styles.wishBtn, color: isWished ? '#d946ef' : '#999'}}>❤️</button>
      </div>
      <div style={styles.content}>
        <p style={styles.brand}>{product.brand}</p>
        <h3 style={styles.name}>{product.name}</h3>
        {product.description && <p style={styles.description}>{product.description}</p>}
        <div style={styles.rating}>⭐ {product.rating} ({product.reviews})</div>
        <div style={styles.footer}>
          <span style={styles.price}>KSh {(product.price * 130).toLocaleString()}</span>
          <button 
            onClick={() => addToCart(product)} 
            style={{...styles.addBtn, ...(btnHovered ? {background: '#c026d3'} : {})}}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: { background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', transition: 'all 0.3s ease' },
  imageContainer: { position: 'relative', paddingTop: '100%', overflow: 'hidden' },
  image: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', background: '#f9f9f9', loading: 'lazy' },
  wishBtn: { position: 'absolute', top: 10, right: 10, background: '#fff', border: 'none', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', fontSize: '1.2rem' },
  content: { padding: '1rem' },
  brand: { color: '#666', fontSize: '0.85rem', margin: '0 0 0.25rem' },
  name: { fontSize: '1rem', margin: '0 0 0.5rem', color: '#333' },
  description: { fontSize: '0.8rem', color: '#777', margin: '0 0 0.5rem', lineHeight: '1.4' },
  rating: { fontSize: '0.85rem', color: '#666', marginBottom: '0.75rem' },
  footer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  price: { fontSize: '1.25rem', fontWeight: 'bold', color: '#d946ef' },
  addBtn: { background: '#d946ef', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.9rem', transition: 'background 0.2s' }
};
