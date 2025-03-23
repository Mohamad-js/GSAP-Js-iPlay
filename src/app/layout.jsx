import "./global.css";

export const metadata = {
  title: "فروشگاه iPlay",
  description: "دنیای اسباب بازی برای همه سنین",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        {children}
      </body>
    </html>
  );
}
