import styles from './pro.module.css';

// Generate static paths for dynamic routes (optional, but included for completeness)
export async function generateStaticParams() {
  const API_URL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3400/data'
    : 'https://iplay-backend.onrender.com/data';

  try {
    const response = await fetch(API_URL, { next: { revalidate: 60 } });
    if (!response.ok) {
      throw new Error('Failed to fetch products for static params');
    }
    const data = await response.json();
    const products = data.productions || [];
    return products.map((product) => ({
      pro: product.id.toString(),
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function Pro({ params }) {
  const { pro } = await params; // No await needed, params is a plain object

  const API_URL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3400/data'
    : 'https://iplay-backend.onrender.com/data';

  try {
    const response = await fetch(API_URL, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error('Failed to fetch product data');
    }
    const data = await response.json();
    const productions = data.data?.productions || [];

    // Convert pro to a number and find the product by id
    const productId = parseInt(pro, 10);
    const production = productions.find((p) => p.id === productId);

    // If production is not found, render a fallback
    if (!production) {
      return (
        <div className={styles.container}>
          <h1>محصول یافت نشد</h1>
          <p>محصولی با این شناسه وجود ندارد.</p>
        </div>
      );
    }

    return (
      <div className={styles.container}>
        <h1>{production.name}</h1>
        {/* Add more product details as needed */}
      </div>
    );
  } catch (error) {
    return (
      <div className={styles.container}>
        <h1>خطا</h1>
        <p>{error.message}</p>
      </div>
    );
  }
}

export default Pro;