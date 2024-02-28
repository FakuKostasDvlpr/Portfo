"use client"
import { Onest } from "next/font/google"
import { data } from "./data"
import Button from "./Buttons/Button";
import { AnimatedTooltipPreview } from "./Buttons/Social";

export const onest = Onest({ subsets: ['latin'], weight: ['900', '600', '700', '500', '400'] })

export default function Template({ }) {
    return (
        <>
            <div className='grid grid-cols-3 gap-10 p-3'>
                {data.map((item, i) => (
                    <div
                        key={i}
                        className={`cardStyle${i} ${
                            (i === 0 ) && 'md:col-span-2'
                            }`}
                    >
                        {i === 0 &&
                            <div className="flex bg-gradient-to-r from-amber-50 to-yellow-400 flex-col rounded-xl gap-[19px] p-10">
                                    <h2 
                                        style={{ fontFamily: 'Open Sauce One,-apple-system,SF Pro,sans-serif' }}
                                        className={`text-6xl w-[600px] text-black py-3  ${i === 0 ? 'specialTitle text-black font-[700] font onest' : ''}`}>
                                        {item.title}
                                    </h2>
                                    <p>{item.subtitle}</p>
                                    <p className='font-bold text-2xl'>{item.value}</p>
                                    <div className="flex items-center">
                                        <Button />
                                        <AnimatedTooltipPreview />
                                    </div>

                            </div>
                        }
                        {
                            i === 1 &&
                            
                            <img className="cardImage rounded-xl" src="https://scontent.faep8-1.fna.fbcdn.net/v/t39.30808-6/338847974_1211820532780783_7430589805348026732_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeH5EZdHVSA59e09bqNyWg_jijkj3llUQA2KOSPeWVRADZ7lYJm4o0ON-m8Mhp1UgMWHk5JtOK8NSzg-lnmU5feV&_nc_ohc=_m5D15PNSjgAX89-hll&_nc_ht=scontent.faep8-1.fna&oh=00_AfDk2vNh7rcTU9CURG08iYZDQBBMd__xnD5bVQp44xr7Og&oe=65E3785C" alt="" />
                        }
                        {
                            i === 2 &&
                            <img className="cardImage rounded-xl w-[900px]" src="https://scontent.faep8-1.fna.fbcdn.net/v/t39.30808-6/338847974_1211820532780783_7430589805348026732_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeH5EZdHVSA59e09bqNyWg_jijkj3llUQA2KOSPeWVRADZ7lYJm4o0ON-m8Mhp1UgMWHk5JtOK8NSzg-lnmU5feV&_nc_ohc=_m5D15PNSjgAX89-hll&_nc_ht=scontent.faep8-1.fna&oh=00_AfDk2vNh7rcTU9CURG08iYZDQBBMd__xnD5bVQp44xr7Og&oe=65E3785C" alt="" />
                        }
                        {
                            i === 3 &&
                            <img className="cardImage rounded-xl" src="https://scontent.faep8-1.fna.fbcdn.net/v/t39.30808-6/338847974_1211820532780783_7430589805348026732_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeH5EZdHVSA59e09bqNyWg_jijkj3llUQA2KOSPeWVRADZ7lYJm4o0ON-m8Mhp1UgMWHk5JtOK8NSzg-lnmU5feV&_nc_ohc=_m5D15PNSjgAX89-hll&_nc_ht=scontent.faep8-1.fna&oh=00_AfDk2vNh7rcTU9CURG08iYZDQBBMd__xnD5bVQp44xr7Og&oe=65E3785C" alt="" />
                        }
                        {
                            i === 4 &&
                            <img className="cardImage rounded-xl" src="https://scontent.faep8-1.fna.fbcdn.net/v/t39.30808-6/338847974_1211820532780783_7430589805348026732_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeH5EZdHVSA59e09bqNyWg_jijkj3llUQA2KOSPeWVRADZ7lYJm4o0ON-m8Mhp1UgMWHk5JtOK8NSzg-lnmU5feV&_nc_ohc=_m5D15PNSjgAX89-hll&_nc_ht=scontent.faep8-1.fna&oh=00_AfDk2vNh7rcTU9CURG08iYZDQBBMd__xnD5bVQp44xr7Og&oe=65E3785C" alt="" />
                        }
                    </div>
                ))}
            </div>
        </>
    );
};
