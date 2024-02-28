import { Onest } from "next/font/google"
import { Poppins } from "next/font/google";
import Image from "next/image";

const onest = Onest({ subsets: ['latin'], weight: ['900', '600', '700', '500', '400'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['900', '600', '700', '500', '400'] });

export default function Header() {
   
    
    const Items = ["Home", "Proyects", "Contact"]
    return (
        <>
      <header className="flex m-auto w-full max-w-[1124px] items-center justify-between pt-4 ">
            <div className="text-center flex items-center justify-center gap-4">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Purple_Circle.png" width={30} height={30} alt="logo" />
                <p className= {`${onest.className} font-bold text-3xl`}>Kostas</p>
            </div>
                <nav>
                    <ul className="flex justify-center gap-10 px-4">
                        {Items.map((item, index) => (
                        <li key={index} className="">
                        <a href="#!" className={`${poppins.className} font-semibold text-gray-400 hover:outline px-3 rounded-lg`}>{item}</a>
                        </li>
                    ))}
                    </ul>
                </nav>
      </header>
      </>

    );
  }
  