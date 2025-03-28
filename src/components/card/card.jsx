import styles from './card.module.css'
import Link from 'next/link'
import Image from 'next/image'



function Card({id, src, alt, name, priceLabel}){




   return(
      <>
         <Link href={`/productions/${id}`} className={styles.proCard}>
            <div className={styles.imageHolder}>
               <Image className={styles.pic}
                  src={src}
                  alt={alt}
                  fill
                  priority
               />
            </div>
            <div className={styles.proInfo}>
               <h1 className={styles.name}>{name}</h1>
               <div className={styles.priceArea}>
                  <div className={styles.availibility}>موجود</div>
                  <div className={styles.priceHolder}>
                     <p className={styles.price}>{priceLabel}</p>
                     <p className={styles.currency}>تومان</p>
                  </div>
               </div>
            </div>
         </Link>
      </>
   )
}

export default Card;