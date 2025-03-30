'use client'
import styles from './productions.module.css'
import { useState, useEffect } from 'react'
import Card from '@/components/card/card'
import { FaGreaterThan } from "react-icons/fa6";
import Loading from '../loading';


function Productions(){
   const [products, setProducts] = useState([]);
   const [filteredProducts, setFilteredProducts] = useState([]);
   const [searchName, setSearchName] = useState('');
   const [searchPrice, setSearchPrice] = useState(0);
   const [closed,setClosed] = useState(false)



   // TO RUN IN SERVER
  const API_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3400/data'
  : 'https://iplay-backend.onrender.com/data';


   useEffect(() => {
      async function fetchProducts() {
         try {
            const response = await fetch(API_URL, {cache: 'no-store'})
            console.log(response.status);
            const data = await response.json();
            console.log('API Response:', data); //
            setProducts(data?.productions || []);
            setFilteredProducts(data?.productions || []);

         } catch (error) {
            console.error(error);
         }
      }
   
      fetchProducts();
   }, [])


// TO RUN IN DEV WITH JSON
// const API_URL = process.env.NODE_ENV === 'development'
// ? 'http://localhost:3400/productions'
// : 'https://iplay-backend.onrender.com/data';


//  useEffect(() => {
//     async function fetchProducts() {
//        try {
//           const response = await fetch(API_URL, {cache: 'no-store'})
//           console.log(response.status);
//           const data = await response.json();
//           console.log('API Response:', data); //
//           setProducts(data || []);
//           setFilteredProducts(data || []);

//        } catch (error) {
//           console.error(error);
//        }
//     }
 
//     fetchProducts();
//  }, [])
   

   // Filter products based on search inputs
   useEffect(() => {
   const filtered = products.filter((product) => {
     const matchesName = product.name.toLowerCase().includes(searchName.toLowerCase());
     const matchesPrice = searchPrice ? product.price <= parseFloat(searchPrice) : true;
     return matchesName && matchesPrice;
   });

   setFilteredProducts(filtered);
 }, [searchName, searchPrice, products]);

   const sideToggle = () => {
      setClosed(!closed)
   }

   return(
      <>
         <div className={styles.container}>

            <div className={`${styles.filterHolder} ${closed ? styles.closed : null}`}>
               <div className={styles.filter}>
                  <div className={`${styles.close} ${closed ? styles.open : null}`} onClick={sideToggle}>
                     <FaGreaterThan style={{fontSize:'13px'}} />
                  </div>
                  <h1 className={styles.title}>صفحه ی کالاها</h1>


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
            </div>

            <div className={filteredProducts?.length > 0 ? styles.productionsHolder : styles.notFound}>
               <div className={styles.productions}>

                  {
                     filteredProducts.length > 0 ?
                     filteredProducts.map((pro, index) => (
                        <Card 
                           key={index}
                           id={pro.id}
                           src={pro.images.main.url}
                           alt={pro.images.main.alt}
                           name={pro.name}
                           send = {pro.send}
                           remains={pro.remains}
                           memory={pro.info.memory}
                           ram={pro.info.ram}
                        />
                     ))
                     : <Loading />
                  }

               </div>
            </div>
         </div>
      </>
   )
}

export default Productions;