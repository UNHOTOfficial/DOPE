import Footer from "@/components/Footer";
import HeaderPrimary from "@/components/HeaderPrimary";
import HeaderSecondary from "@/components/HeaderSecondary";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <HeaderPrimary />
        <HeaderSecondary />
        {children}
        <Footer />
      </body>
    </html>
  );
}
