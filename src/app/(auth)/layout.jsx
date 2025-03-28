import AuthNavbar from "@/components/navbar/account/accountNavbar";

export const metadata = {
  title: "فروشگاه iPlay",
  description: "دنیای اسباب بازی برای همه سنین",
};

export default function AuthLayout({ children }) {
  return (
      <div>
         <AuthNavbar />
         {children}
      </div>
  );
}
