import styles from './card.module.css'
import Link from 'next/link'
import Image from 'next/image'



function Card({id, src, alt, name, remains, memory, ram, send}){




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
               <div className={styles.softwareInfo}>
                  <div className={styles.ramHolder}>
                     <div className={styles.ramTitle}>رم گوشی:</div>
                     <div className={styles.ram}>
                        {
                           ram.map((ram, index) => (<p key={index} className={styles.ramNumber}>{ram}</p>))
                        }
                     </div>
                  </div>
                  <div className={styles.memoryHolder}>
                     <div className={styles.memoryTitle}>حافظه:</div>
                     <div className={styles.memory}>
                        {                           
                           memory.map((ram, index) => (<p key={index} className={styles.memoryNumber}>{ram}</p>))
                        }
                     </div>
                  </div>
               </div>
               <div className={styles.priceArea}>
                  <div className={styles.availibility}>
                     {
                        remains > 0 ?
                        <div className={styles.bottomCard}>
                           <div className={styles.avalHolder}>
                              <p className={styles.remainsNumber}>{remains}</p>
                              <p className={styles.remainsTitle}>مانده</p>
                           </div>
                           <div className={styles.sendHolder}>
                              <p className={styles.sendTitle}>ارسال</p>
                              <p className={styles.sendDate}>{send}</p>
                           </div>
                        </div>
                        : <p className={styles.finished}>ناموجود</p>
                     }
                  </div>
               </div>
            </div>
         </Link>
      </>
   )
}

export default Card;