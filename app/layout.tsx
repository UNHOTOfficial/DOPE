import Footer from "@/components/Footer";
import HeaderPrimary from "@/components/HeaderPrimary";
import HeaderSecondary from "@/components/HeaderSecondary";
import Script from "next/script";
import "./globals.css";
import Pwa from "./pwa";

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
        <div className="m-6">{children}</div>
        <Footer />
        <Pwa /> {/* Register Service Worker */}
        <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"
      />
      </body>
    </html>
  );
}
