'use client'
import styles from './accountNavbar.module.css'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


function AuthNavbar(){

   const pathname = usePathname();

   const links = [
      {href:'/account', label:'حساب کاربری'},
      {href:'/login', label:'ورود به حساب'}
   ]


   return(
      <>
         <div className={styles.container}>
            {
               links.map(({href, label}) => (
                  <Link key={href} href={href} className={pathname === href ? styles.active : styles.option}>
                     {label}
                  </Link>
               ))
            }
         </div>
      </>
   )
}

export default AuthNavbar;