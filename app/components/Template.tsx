import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { data } from "./data";
import Button from "./Buttons/Button";
import { AnimatedTooltipPreview } from "./Buttons/Social";
import Image from "next/image";

export default function Template() {
  useEffect(() => {
    // Configuración para la animación desde la derecha
    ScrollReveal().reveal('.reveal-right', {
      delay: 300,
      distance: '50px',
      duration: 2500,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      origin: 'right',
      reset: true,
    });

    // Configuración para la animación desde abajo
    ScrollReveal().reveal('.reveal-bottom', {
      delay: 300,
      distance: '50px',
      duration: 1000,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      origin: 'bottom',
      reset: true,
    });
  }, []);

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 md:m-10 m-10'>
        {data.map((item, i) => (
          <div key={i} className={`cardStyle${i} ${i === 0 && 'md:col-span-2 reveal-right'}`}>
            {i === 0 && (
              <div className="col-start-1 flex bg-gradient-to-r from-amber-50 to-yellow-400 flex-col rounded-xl gap-[19px] p-10">
                <h2 style={{ fontFamily: 'Open Sauce One,-apple-system,SF Pro,sans-serif' }} className={`text-3xl md:text-6xl w-full text-black py-3 ${i === 0 ? 'specialTitle text-black font-[700]' : ''}`}>
                  {item.title}
                </h2>
                <p>{item.subtitle}</p>
                <div className="flex items-center">
                  <Button />
                  <AnimatedTooltipPreview />
                </div>
              </div>
            )}
            {i === 1 && (
              <div className="flex items-center justify-center w-full h-full reveal-bottom">
                <img className="rounded-xl object-cover md:w-[640px]" src="/myIcon.png" width={700} height={700} alt="icono"/>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
