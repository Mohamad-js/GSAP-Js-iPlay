import styles from './loading.module.css'




function Loading(){




   return(
      <>
         <div className={styles.container}>
            <div className={styles.loader}></div>
            <div className={styles.loadingText}>درحال بارگیری</div>
         </div>
      </>
   )
}

export default Loading;