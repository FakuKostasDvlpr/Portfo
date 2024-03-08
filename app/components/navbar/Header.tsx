"use client"
import { Onest } from "next/font/google"
import Image from "next/image";
import Script from "next/script";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export const onest = Onest({
  adjustFontFallback: false,
  display: 'swap',
  subsets: ['latin'],
});

export default function Header() {
    return (
      <>
      <header className="mt-5 flex m-auto w-full max-w-[1124px] items-center justify-between pt-4 reveal ">
          <div className="px-10 text-center flex items-center justify-center gap-4 ">
              <Image src="/logo-yellow.png" width={30} height={30} alt="logo" />
              <p className= {`${onest.className} text-white font-bold text-3xl`}>Kostas</p>
          </div>
          <nav className="px-10">
            <ul className="flex text-white gap-5 ">
                <li className="flex gap-10">
                  <a href="#!" className="hover:text-yellow-500 font-bold hover:bg-white px-4 rounded-xl">Home</a>
                  <a href="#project" className="hover:text-yellow-500 font-bold hover:bg-white px-4 rounded-xl">Project</a>
                  <a href="#contact" className="hover:text-yellow-500 font-bold hover:bg-white px-4 rounded-xl">Contact</a>
                </li>
            </ul>
          </nav>
      </header>
      </>

    );
  }
  