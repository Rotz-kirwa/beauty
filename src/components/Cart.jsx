import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { SITE_PHONE } from '../config/site';

export default function Cart({ isOpen, onClose }) {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const total = cartTotal();

  const currency = (v) => {
    try {
      return new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', maximumFractionDigits: 0 }).format(v);
    } catch (e) {
      return `KSh ${Math.round(v).toLocaleString()}`;
    }
  };

  if (!isOpen) return null;

  const handleRemove = (id) => {
    if (confirm('Remove this item from your cart?')) removeFromCart(id);
  };

  const startCheckout = () => setCheckoutOpen(true);

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      alert('Please fill name, email and phone to proceed');
      return;
    }

    // build order message
    const waNumber = String(SITE_PHONE).replace(/[^0-9]/g, '');
    let msg = `New order from ${form.name}\n`;
    msg += `Email: ${form.email}\nPhone: ${form.phone}\n\n`;
    msg += `Items:\n`;
    cart.forEach(it => {
      const priceKsh = Math.round((it.price || 0) * 130);
      const lineTotal = priceKsh * (it.quantity || 1);
      msg += `- ${it.name} x ${it.quantity} @ KSh ${priceKsh.toLocaleString()} = KSh ${lineTotal.toLocaleString()}\n`;
    });
    msg += `\nTotal: ${currency(total)}\n`;
    msg += `\nPlease contact to confirm payment and delivery details.`;

    // open WhatsApp with prefilled message
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');

    // After opening WhatsApp, clear cart and close modal
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      clearCart();
      setCheckoutOpen(false);
      onClose();
    }, 700);
  };

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
                    <p style={styles.itemPrice}>{currency((item.price || 0) * 130)}</p>
                    <div style={styles.quantity}>
                      <button
                        aria-label={`Decrease quantity of ${item.name}`}
                        title="Decrease"
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        style={styles.qtyBtn}
                      >
                        −
                      </button>
                      <input value={String(item.quantity)} onChange={(e)=>{
                        const v = parseInt(e.target.value || '0', 10);
                        if (!isNaN(v) && v > 0) updateQuantity(item.id, v);
                      }} style={styles.qtyInput} aria-label={`Quantity of ${item.name}`} />
                      <button
                        aria-label={`Increase quantity of ${item.name}`}
                        title="Increase"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={styles.qtyBtn}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button onClick={() => handleRemove(item.id)} style={styles.removeBtn}>🗑️</button>
                </div>
              ))}
            </div>
            <div style={styles.footer}>
              <div style={styles.total}>Total: <strong>{currency(total)}</strong></div>
              {!checkoutOpen ? (
                <>
                  <div style={{display:'flex', gap: '0.5rem'}}>
                    <button style={styles.secondaryBtn} onClick={()=>{ if(confirm('Clear your cart?')) clearCart();}}>Clear Cart</button>
                    <button style={styles.checkoutBtn} onClick={startCheckout}>Proceed to Checkout</button>
                  </div>
                </>
              ) : (
                <div>
                  <div style={styles.orderSummary}>
                    <h4 style={{margin: '0 0 0.5rem'}}>Order summary</h4>
                    <div style={{maxHeight: 140, overflowY: 'auto'}}>
                      {cart.map(it => {
                        const priceKsh = Math.round((it.price || 0) * 130);
                        const lineTotal = priceKsh * (it.quantity || 1);
                        return (
                          <div key={it.id} style={styles.summaryRow}>
                            <div style={styles.summaryItemName}>{it.name} x {it.quantity}</div>
                            <div style={styles.summaryItemAmount}>{currency(lineTotal)}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div style={{marginTop: 8, fontWeight: 700, fontSize: '1.05rem', color: '#d946ef'}}>Total: {currency(total)}</div>
                  </div>

                  <form onSubmit={handleCheckout} style={styles.checkoutForm}>
                    <label style={styles.label}>Full name</label>
                    <input placeholder="Full name" value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} style={styles.input} required />
                    <label style={styles.label}>Email</label>
                    <input placeholder="Email" type="email" value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} style={styles.input} required />
                    <label style={styles.label}>Phone</label>
                    <input placeholder="Phone" value={form.phone} onChange={(e)=>setForm({...form, phone: e.target.value})} style={styles.input} required />
                    <button type="submit" style={styles.checkoutBtn} disabled={processing}>{processing ? 'Opening WhatsApp...' : 'Confirm Order via WhatsApp'}</button>
                  </form>
                </div>
              )}
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
  qtyBtn: { background: '#fff', border: '1px solid #e5e5e5', width: 36, height: 36, borderRadius: 8, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', color: '#333', fontWeight: 600, transition: 'background 0.15s, transform 0.08s' },
  qtyInput: { width: 52, textAlign: 'center', border: '1px solid #e5e5e5', borderRadius: 8, padding: '6px 8px', margin: '0 0.4rem', fontSize: '1rem' },
  removeBtn: { background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' },
  footer: { padding: '1.5rem', borderTop: '1px solid #eee' },
  total: { fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' },
  checkoutBtn: { width: '100%', background: '#d946ef', color: '#fff', border: 'none', padding: '1rem', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer', fontWeight: 'bold' }
  ,
  secondaryBtn: { background: '#fff', border: '1px solid #e5e5e5', padding: '0.9rem 1rem', borderRadius: 8, cursor: 'pointer' },
  checkoutForm: { display: 'flex', flexDirection: 'column', gap: '0.6rem' },
  input: { padding: '0.8rem', border: '1px solid #e5e5e5', borderRadius: 8 }
  ,
  orderSummary: { background: '#fff', border: '1px solid #f0f0f0', padding: '0.75rem', borderRadius: 8, marginBottom: '0.8rem' },
  summaryRow: { display: 'flex', justifyContent: 'space-between', padding: '0.35rem 0', borderBottom: '1px solid rgba(0,0,0,0.04)' },
  summaryItemName: { fontSize: '0.95rem', color: '#333', fontWeight: 500 },
  summaryItemAmount: { fontSize: '0.95rem', color: '#d946ef', fontWeight: 700 },
  label: { fontSize: '0.85rem', color: '#444', marginBottom: 6 }
};
