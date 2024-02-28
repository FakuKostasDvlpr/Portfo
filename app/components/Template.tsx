"use client"
import { Onest } from "next/font/google"
import { data } from "./data"
import Button from "./Buttons/Button";
import { AnimatedTooltipPreview } from "./Buttons/Social";
import { CardMenu } from "./Buttons/CardMenu";

export const onest = Onest({ subsets: ['latin'], weight: ['900', '600', '700', '500', '400'] })

export default function Template({ }) {
    const boxStyle =
        'bg-transparent border-2 rounded-xl p-2 flex flex-col items-center justify-center';
    return (
        <>
            <div className='grid grid-cols-3 gap-10'>
                {data.map((item, i) => (
                    <div
                        key={i}
                        className={`${boxStyle} ${
                            (i === 0 || i === 4 || i === 5 || i === 6) && 'md:col-span-2'
                            }`}
                    >
                        {i === 0 &&
                            <div className="flex flex-col gap-4 mx-8 ">
                                    <h2 style={{ fontFamily: 'Open Sauce One,-apple-system,SF Pro,sans-serif' }}
                                        className={`text-6xl text-black py-3  ${i === 0 ? 'specialTitle text-black font-[700] ' : ''}`}>
                                        {item.title}
                                    </h2>
                                    <p>{item.subtitle}</p>
                                    <p className='font-bold text-2xl'>{item.value}</p>
                                    
                                        <div className="flex items-center gap-5">
                                            <Button />
                                            <AnimatedTooltipPreview />
                                        </div>
                            </div>
                        }
                        {
                            i===1 &&
                                <CardMenu />
                        }
                    </div>
                ))}
            </div>
        </>
    );
};
