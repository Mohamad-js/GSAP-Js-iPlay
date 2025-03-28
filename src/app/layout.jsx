'use client'
import "./global.css";
import MainNavbar from "@/components/navbar/main/mainNavbar";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
   const pathname = usePathname()

   const isAuth = pathname.startsWith('/login') || pathname.startsWith('/account')
   
   return (
      <html lang="fa" dir="rtl">
         <body>
            {children}
            {
               !isAuth ?
               <>
                  <MainNavbar />
               
               </>
               : null

            }
         </body>
      </html>
   );
}
