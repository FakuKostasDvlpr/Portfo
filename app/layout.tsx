import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/navbar/Header";
import Footer from "./components/Footer";
import {Onest} from "next/font/google"

export const metadata: Metadata = {
  title: "Facundo Costas",
  description: "Generated by @kostas",
};
const font = Onest({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo-yellow.png" />
      <body className={font.className}>
          <Header/>
        {children}
        <Footer/>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></Script>
      </body>
    </html>
  );
}
