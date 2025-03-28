'use client'
import styles from './mainNavbar.module.css'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


function MainNavbar(){

   const pathname = usePathname();

   const links = [
      {href:'/', label:'صفحه نخست'},
      {href:'/productions', label:'محصولات'}
   ]


   return(
      <>
         <div className={styles.container}>
            {
               links.map(({href, label}) => (
                  <Link key={href} href={href} className={href === '/' ? (pathname === href ? styles.active : styles.option) : pathname.startsWith(href) ? styles.active : styles.option}>
                     {label}
                  </Link>
               ))
            }
         </div>
      </>
   )
}

export default MainNavbar;