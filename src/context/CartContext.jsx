import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem('beauty_cart');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });
  const [wishlist, setWishlist] = useState(() => {
    try {
      const raw = localStorage.getItem('beauty_wishlist');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) return prev.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item);
      return [...prev, {...product, quantity: 1}];
    });
  };

  const clearCart = () => setCart([]);

  const cartCount = () => cart.reduce((s, i) => s + (i.quantity || 0), 0);
  const KSH_RATE = 130; // USD -> KSh conversion
  const cartTotal = () => cart.reduce((s, i) => s + (i.price || 0) * (i.quantity || 0) * KSH_RATE, 0);

  const removeFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id));
  const updateQuantity = (id, quantity) => setCart(prev => prev.map(item => item.id === id ? {...item, quantity} : item));
  const toggleWishlist = (product) => setWishlist(prev => prev.find(item => item.id === product.id) ? prev.filter(item => item.id !== product.id) : [...prev, product]);

  // persist cart and wishlist
  useEffect(() => {
    try {
      localStorage.setItem('beauty_cart', JSON.stringify(cart));
    } catch (e) {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('beauty_wishlist', JSON.stringify(wishlist));
    } catch (e) {}
  }, [wishlist]);

  return (
    <CartContext.Provider value={{ cart, wishlist, addToCart, removeFromCart, updateQuantity, toggleWishlist, clearCart, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};
