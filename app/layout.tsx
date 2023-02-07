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
        <Script src="/assets/scripts/flowbite.min.js" />
        <HeaderPrimary />
        {/* <HeaderSecondary /> */}
        <div className="m-6">{children}</div>
        <Footer />
        <Pwa /> {/* Register Service Worker */}
      </body>
    </html>
  );
}
