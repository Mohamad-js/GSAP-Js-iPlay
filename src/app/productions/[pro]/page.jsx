import styles from './pro.module.css'




async function Pro({ params }){

   const response = await fetch("http://localhost:3400/data", {cache: 'no-store'})
   const data = await response.json()

   
   const { pro } = await params
   
   const production = data.productions[pro - 1];


   return(
      <>
         <div className={styles.container}>
            {
               production.name
            }
         </div>
      </>
   )
}

export default Pro;