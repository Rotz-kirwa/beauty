import { useCart } from '../context/CartContext';

export default function Cart({ isOpen, onClose }) {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.cart} onClick={e => e.stopPropagation()}>
        <div style={styles.header}>
          <h2>Shopping Cart</h2>
          <button onClick={onClose} style={styles.closeBtn}>✕</button>
        </div>
        {cart.length === 0 ? (
          <p style={styles.empty}>Your cart is empty</p>
        ) : (
          <>
            <div style={styles.items}>
              {cart.map(item => (
                <div key={item.id} style={styles.item}>
                  <img src={item.image} alt={item.name} style={styles.itemImage} />
                  <div style={styles.itemInfo}>
                    <h4 style={styles.itemName}>{item.name}</h4>
                    <p style={styles.itemPrice}>${item.price}</p>
                    <div style={styles.quantity}>
                      <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} style={styles.qtyBtn}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={styles.qtyBtn}>+</button>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} style={styles.removeBtn}>🗑️</button>
                </div>
              ))}
            </div>
            <div style={styles.footer}>
              <div style={styles.total}>Total: <strong>${total.toFixed(2)}</strong></div>
              <button style={styles.checkoutBtn}>Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  overlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', justifyContent: 'flex-end', animation: 'fadeIn 0.2s ease' },
  cart: { background: '#fff', width: '400px', maxWidth: '90%', height: '100%', display: 'flex', flexDirection: 'column', animation: 'slideIn 0.3s ease' },
  header: { padding: '1.5rem', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  closeBtn: { background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' },
  empty: { padding: '2rem', textAlign: 'center', color: '#666' },
  items: { flex: 1, overflowY: 'auto', padding: '1rem' },
  item: { display: 'flex', gap: '1rem', marginBottom: '1rem', padding: '1rem', background: '#f9f9f9', borderRadius: '8px' },
  itemImage: { width: '80px', height: '80px', objectFit: 'cover', borderRadius: '6px' },
  itemInfo: { flex: 1 },
  itemName: { margin: '0 0 0.5rem', fontSize: '0.95rem' },
  itemPrice: { color: '#d946ef', fontWeight: 'bold', margin: '0 0 0.5rem' },
  quantity: { display: 'flex', gap: '0.5rem', alignItems: 'center' },
  qtyBtn: { background: '#eee', border: 'none', width: 24, height: 24, borderRadius: '4px', cursor: 'pointer' },
  removeBtn: { background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' },
  footer: { padding: '1.5rem', borderTop: '1px solid #eee' },
  total: { fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' },
  checkoutBtn: { width: '100%', background: '#d946ef', color: '#fff', border: 'none', padding: '1rem', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer', fontWeight: 'bold' }
};
