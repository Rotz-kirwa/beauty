import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

export default function Home({ onNavigate }) {
  const [hoveredBtn, setHoveredBtn] = useState(null);

  const categories = [
    { name: 'Skincare', image: 'https://i.pinimg.com/736x/07/1d/b3/071db3824939667672566be9394333df.jpg', desc: 'Transform your skin with our premium skincare collection. From hydrating serums to anti-aging treatments, discover products that nourish, protect, and reveal your natural radiance.' },
    { name: 'Makeup', image: 'https://i.pinimg.com/736x/27/6e/f3/276ef331f2dfa51b1cb35ebaed5cb42d.jpg', desc: 'Express yourself with our stunning makeup range. High-quality foundations, vibrant eyeshadows, and long-lasting lipsticks to create any look from natural to glamorous.' },
    { name: 'Hair Care', image: 'https://i.pinimg.com/736x/67/54/71/675471bd39136507a46dc81605a7daf8.jpg', desc: 'Achieve healthy, beautiful hair with our professional hair care products. Nourishing treatments, styling essentials, and repair solutions for every hair type.' },
    { name: 'Fragrances', image: 'https://i.pinimg.com/736x/ea/22/dc/ea22dce31900821f639ffacc198b223d.jpg', desc: 'Find your signature scent from our exquisite fragrance collection. Elegant perfumes and body mists that leave a lasting impression wherever you go.' },
    { name: 'Bath & Body', image: 'https://i.pinimg.com/736x/43/74/11/437411f0f393b9d18fe4225eb6f3e5a3.jpg', desc: 'Pamper yourself with luxurious bath and body products. Moisturizing lotions, refreshing scrubs, and soothing treatments for silky smooth skin.' }
  ];

  return (
    <>
      <section id="home" style={styles.hero}>
        <div style={styles.heroContent}>
          <button 
            style={{...styles.ctaBtn, ...(hoveredBtn === 'cta' ? {transform: 'scale(1.05)'} : {})}}
            onMouseEnter={() => setHoveredBtn('cta')}
            onMouseLeave={() => setHoveredBtn(null)}
            onClick={() => onNavigate('shop')}
          >
            Shop Now
          </button>
        </div>
      </section>

      <div style={styles.container}>
        <section id="featured" style={styles.section}>
          <h2 style={styles.sectionTitle}>✨ Shop by Category</h2>
          <p style={styles.sectionSubtitle}>Discover our curated beauty collections</p>
          <div style={styles.categoryGrid}>
            {categories.map((cat, idx) => (
              <div 
                key={idx} 
                style={{...styles.categoryCard, ...(hoveredBtn === `card-${idx}` ? styles.categoryCardHover : {})}}
                onMouseEnter={() => setHoveredBtn(`card-${idx}`)}
                onMouseLeave={() => setHoveredBtn(null)}
              >
                <div style={styles.imageWrapper}>
                  <img src={cat.image} alt={cat.name} style={{...styles.categoryImage, ...(hoveredBtn === `card-${idx}` ? styles.categoryImageHover : {})}} />
                  <div style={styles.imageOverlay}></div>
                </div>
                <div style={styles.categoryContent}>
                  <h3 style={styles.categoryName}>{cat.name}</h3>
                  <p style={styles.categoryDesc}>{cat.desc}</p>
                  <button 
                    style={{...styles.categoryBtn, ...(hoveredBtn === `btn-${idx}` ? {background: '#c026d3', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(217, 70, 239, 0.4)'} : {})}}
                    onMouseEnter={() => setHoveredBtn(`btn-${idx}`)}
                    onMouseLeave={() => setHoveredBtn(null)}
                    onClick={() => onNavigate('shop')}
                  >
                    Shop {cat.name} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

const styles = {
  hero: {
    width: '100%',
    height: '60vh',
    backgroundImage: 'url(https://i.pinimg.com/1200x/2d/db/55/2ddb55c21c901302f1cee1157807f581.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: '2rem',
    position: 'relative'
  },
  heroContent: { zIndex: 1 },
  heroTitle: { fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', margin: '0 0 1.5rem', color: '#fff', fontWeight: '800', lineHeight: '1.2', textShadow: '2px 2px 10px rgba(0,0,0,0.7)' },
  heroSubtitle: { fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', color: '#fff', margin: '0 0 2.5rem', lineHeight: '1.6', fontWeight: '300', textShadow: '1px 1px 5px rgba(0,0,0,0.7)' },
  ctaBtn: { background: '#d946ef', color: '#fff', border: 'none', padding: '0.8rem 2rem', borderRadius: '30px', fontSize: '0.95rem', fontWeight: '600', cursor: 'pointer', boxShadow: '0 4px 15px rgba(217, 70, 239, 0.4)', transition: 'all 0.3s', textTransform: 'uppercase', letterSpacing: '0.5px' },
  container: { maxWidth: '1400px', margin: '0 auto', padding: '3rem 1rem', width: '100%' },
  section: { marginBottom: '4rem' },
  sectionTitle: { fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', textAlign: 'center', marginBottom: '0.5rem', color: '#333', fontWeight: '700' },
  sectionSubtitle: { fontSize: '1.1rem', textAlign: 'center', color: '#666', marginBottom: '3rem' },
  categoryGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' },
  categoryCard: { background: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.08)', transition: 'all 0.4s ease', cursor: 'pointer' },
  categoryCardHover: { transform: 'translateY(-12px)', boxShadow: '0 16px 40px rgba(217, 70, 239, 0.2)' },
  imageWrapper: { position: 'relative', overflow: 'hidden', height: '280px' },
  categoryImage: { width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' },
  categoryImageHover: { transform: 'scale(1.1)' },
  imageOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 100%)', pointerEvents: 'none' },
  categoryContent: { padding: '2rem' },
  categoryName: { fontSize: '1.6rem', fontWeight: '700', color: '#333', marginBottom: '1rem', background: 'linear-gradient(135deg, #d946ef 0%, #c026d3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
  categoryDesc: { fontSize: '0.95rem', color: '#666', lineHeight: '1.7', marginBottom: '1.5rem', minHeight: '80px' },
  categoryBtn: { background: 'linear-gradient(135deg, #d946ef 0%, #c026d3 100%)', color: '#fff', border: 'none', padding: '0.9rem 1.5rem', borderRadius: '12px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s ease', width: '100%', boxShadow: '0 4px 15px rgba(217, 70, 239, 0.3)' }
};
