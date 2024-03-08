"use client"
import { Onest } from "next/font/google"
import Image from "next/image";

export const onest = Onest({
  adjustFontFallback: false,
  display: 'swap',
  subsets: ['latin'],
});

export default function Header() {
   
    
    const Items = ["Home", "Proyects", "Contact"]
    return (
        <>
      <header className="mt-5 flex m-auto w-full max-w-[1124px] items-center justify-between pt-4 ">
          <div className="px-10 text-center flex items-center justify-center gap-4">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Disc_Plain_yellow_dark.svg/2153px-Disc_Plain_yellow_dark.svg.png" width={30} height={30} alt="logo" />
              <p className= {`${onest.className} text-white font-bold text-3xl`}>Kostas</p>
          </div>
          <nav className="px-10">
            <ul className="flex text-white gap-5 ">
              {Items.map((items,i) =>(
                <li key={i}>
                  <a href="">{items}</a>
                </li>
              ))}
            </ul>
          </nav>
      </header>
      </>

    );
  }
  