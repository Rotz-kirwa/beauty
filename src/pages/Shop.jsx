import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products, categories, categoryDetails } from '../data/products';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('skincare');
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const filtered = products.filter(p => p.category === selectedCategory);

  return (
    <div style={styles.wrapper} className="shop-wrapper">
      <aside style={styles.sidebar} className="shop-sidebar">
        <h2 style={styles.sidebarTitle}>Categories</h2>
        <div style={styles.categoryList} className="categoryList">
          {categories.filter(cat => cat !== 'all').map(cat => (
            <div key={cat} style={styles.categoryGroup}>
              <button onClick={() => { setSelectedCategory(cat); setSelectedSubcategory(null); }} style={{...styles.sidebarBtn, ...(selectedCategory === cat ? styles.sidebarBtnActive : {})}}>
                {categoryDetails[cat]?.name}
              </button>
            </div>
          ))}
        </div>
      </aside>
      <main style={styles.main}>
        <h1 style={styles.title}>Shop All Products</h1>
        <div style={styles.products}>
          {filtered.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </main>
    </div>
  );
}

const styles = {
  wrapper: { display: 'flex', maxWidth: '1600px', margin: '0 auto', gap: '2rem', padding: '2rem', minHeight: '100vh', flexDirection: 'row' },
  sidebar: { width: '280px', background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', height: 'fit-content', position: 'sticky', top: '100px', alignSelf: 'flex-start' },
  '@media (max-width: 768px)': { wrapper: { flexDirection: 'column', padding: '1rem' }, sidebar: { width: '100%', position: 'static' } },
  sidebarTitle: { fontSize: '1.5rem', marginBottom: '1.5rem', color: '#333', fontWeight: '700' },
  categoryList: { display: 'flex', flexDirection: 'column', gap: '0.5rem' },
  categoryGroup: { marginBottom: '0.5rem' },
  sidebarBtn: { width: '100%', textAlign: 'left', padding: '0.75rem 1rem', background: 'none', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem', fontWeight: '500', color: '#333', transition: 'all 0.2s' },
  sidebarBtnActive: { background: '#f3e8ff', color: '#d946ef', fontWeight: '600' },
  subcategoryGroup: { paddingLeft: '1rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' },
  subcategoryBtn: { width: '100%', textAlign: 'left', padding: '0.5rem 0.75rem', background: 'none', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', color: '#666', transition: 'all 0.2s' },
  subcategoryBtnActive: { background: '#f9f9f9', color: '#d946ef', fontWeight: '500' },
  main: { flex: 1, minHeight: '100vh', paddingBottom: '4rem' },
  title: { fontSize: '2.5rem', marginBottom: '2rem', color: '#333' },
  products: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', paddingBottom: '3rem' }
};
