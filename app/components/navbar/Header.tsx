"use client"
import Image from "next/image";
import { RevealWrapper } from  'next-reveal'

export default function Header() {
    return (
        <>
            <RevealWrapper delay={300} distance="50px" duration={1000} easing='cubic-bezier(0.5, 0, 0, 1)' origin="right" reset={true}> 
                <header className="mt-5 flex m-auto w-full items-center justify-between pt-4 reveal">
                    <div className="flex items-center">
                        <div className="px-5 text-center flex items-center gap-4">
                            <Image src="/logo-yellow.png" width={30} height={30} alt="logo" />
                            <p className="text-white font-bold text-3xl">Kostas</p>
                        </div>
                    </div>
                    <nav>
                        <ul className="flex text-white">
                            <li className="flex">
                                <a href="#project" className="hover:text-yellow-500 font-bold hover:bg-white px-4 rounded-xl">Project</a>
                                <a href="#contact" className="hover:text-yellow-500 font-bold hover:bg-white px-4 rounded-xl">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </header>
            </RevealWrapper>
        </>
    );
}

  