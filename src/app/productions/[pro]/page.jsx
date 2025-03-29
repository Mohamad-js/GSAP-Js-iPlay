import styles from './pro.module.css';

// Generate static paths for dynamic routes (optional, but included for completeness)
export async function generateStaticParams() {
   const API_URL = 'https://iplay-backend.onrender.com/data'
   const jsonApi = 'http://localhost:3400/productions'
 

  try {

   if(process.env.NODE_ENV === 'development'){
      const response = await fetch(API_URL, {cache: 'no-store'})
      console.log(response.status);
      const data = await response.json();
      console.log('API Response:', data.productions); //


   } else {

      const response2 = await fetch(jsonApi, {cache: 'no-store'})
      console.log(response2.status);
      const data2 = await response2.json();
      console.log('API Response2:', data2); //

   }


    return products.map((product) => ({
      pro: product.id.toString(),
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function Pro({ params }) {
   let productions = []

  const { pro } = await params; // No await needed, params is a plain object

  const API_URL = 'https://iplay-backend.onrender.com/data'
  const jsonApi = 'http://localhost:3400/productions'


  try {
      if(process.env.NODE_ENV === 'development'){
      const response = await fetch(API_URL, {cache: 'no-store'})
      console.log(response.status);
      const data = await response.json();
      console.log('API Response:', data.productions); //
      productions = data.productions
      
   } else {
      
      const response2 = await fetch(jsonApi, {cache: 'no-store'})
      console.log(response2.status);
      const data2 = await response2.json();
      console.log('API Response2:', data2); //
      productions = data2
      }

    // Convert pro to a number and find the product by id
    const productId = parseInt(pro);
    const production = productions.find((p) => p.id == productId);

    console.log(production);

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