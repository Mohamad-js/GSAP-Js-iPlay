'use client'
import styles from './productions.module.css'
import { useState, useEffect } from 'react'
import Card from '@/components/card/card'

function Productions(){
   const [products, setProducts] = useState([]);
   const [filteredProducts, setFilteredProducts] = useState([]);
   const [searchName, setSearchName] = useState('');
   const [searchPrice, setSearchPrice] = useState(0);


   useEffect(() => {
      async function fetchProducts() {
         try {
            const response = await fetch("https://iplaystore.onrender.com", {cache: 'no-store'})
            const data = await response.json();
            setProducts(data.productions);
            setFilteredProducts(data.productions);

         } catch (error) {
            console.error(error);
         }
      }
   
      fetchProducts();
   }, [])
   

   // Filter products based on search inputs
   useEffect(() => {
   const filtered = products.filter((product) => {
     const matchesName = product.name.toLowerCase().includes(searchName.toLowerCase());
     const matchesPrice = searchPrice ? product.price <= parseFloat(searchPrice) : true;
     return matchesName && matchesPrice;
   });

   setFilteredProducts(filtered);
 }, [searchName, searchPrice, products]);

   return(
      <>
         <div className={styles.container}>
            <h1 className={styles.title}>صفحه ی کالاها</h1>

            <div className={styles.searchField}>
               <input className={styles.searchName}
                  type="text"
                  placeholder="جستجو کنید..."
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
               />
               <input className={styles.searchPrice}
                  type="range"
                  value={searchPrice}
                  min={0}
                  max={200000000}
                  step={500000}
                  onChange={(e) => setSearchPrice(e.target.value)}
               />
               <p>{searchPrice}</p>
            </div>

            <div className={filteredProducts.length > 0 ? styles.productions : styles.notFound}>
               {
                  filteredProducts.length > 0 ?
                  filteredProducts.map((pro, index) => (
                     <Card 
                        key={index}
                        id={pro.id}
                        src={pro.images.main.url}
                        alt={pro.images.main.alt}
                        name={pro.name}
                        priceLabel = {pro.priceLabel}
                     />
                  ))
                  : <p>کالایی یافت نشد</p>
               }
            </div>
         </div>
      </>
   )
}

export default Productions;