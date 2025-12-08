export default function About() {
  return (
    <div style={styles.container} className="about-page">
      <h1 style={styles.title}>About BeautyShop</h1>
      <div style={styles.content}>
        <p style={styles.text}>Welcome to BeautyShop, your premier destination for high-quality beauty products in Kenya. We are passionate about helping you discover and embrace your unique beauty.</p>
        <h2 style={styles.subtitle}>Our Mission</h2>
        <p style={styles.text}>To provide authentic, premium beauty products that empower individuals to look and feel their best every day.</p>
        <h2 style={styles.subtitle}>Why Choose Us</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>✓ 100% Authentic Products</li>
          <li style={styles.listItem}>✓ Fast Delivery Across Kenya</li>
          <li style={styles.listItem}>✓ Expert Beauty Advice</li>
          <li style={styles.listItem}>✓ Competitive Prices</li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth: '900px', margin: '0 auto', padding: '3rem 1rem' },
  title: { fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#333', marginBottom: '2rem', textAlign: 'center' },
  content: { background: '#fff', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' },
  subtitle: { fontSize: '1.5rem', color: '#d946ef', marginTop: '2rem', marginBottom: '1rem' },
  text: { fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '1.5rem' },
  list: { listStyle: 'none', padding: 0 },
  listItem: { fontSize: '1.1rem', color: '#666', marginBottom: '0.75rem' }
};
