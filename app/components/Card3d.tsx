import "../../app/globals.css";
import React, { useEffect } from "react";
import { CardBody, CardContainer, CardItem } from ".././components/ui/3d-card.tsx";
import ChipIcon from "./Chip";
import ScrollReveal from "scrollreveal";
import { RevealList, RevealWrapper } from "next-reveal";

export function ThreeDCardDemo() {
  // useEffect(() => {
  //   ScrollReveal().reveal('.reveal', {
  //     delay: 300,
  //     distance: '50px',
  //     duration: 1000,
  //     easing: 'cubic-bezier(0.5, 0, 0, 1)',
  //     origin: 'right',
  //     reset: true,
  //   });

  //   ScrollReveal().reveal('.reveal-left', {
  //     delay: 300,
  //     distance: '50px',
  //     duration: 1000,
  //     easing: 'cubic-bezier(0.5, 0, 0, 1)',
  //     origin: 'left',
  //     reset: true,
  //   });
  // }, []);
  
  const projects = [
    {
      id: 1,
      title: "NUCBA NFT",
      description: "E-Commerce",
      imageUrl: "/NFT_NUCBA.jpg",
      buttonText1: "Ver ahora",
      tecnologia: "react",
      vercelLink: "https://fakukostasdvlpr.github.io/NFTCommerce/"
    },
    {
      id: 2,
      title: "Polarsystem",
      description: "SPA",
      imageUrl: "/POLARSYSTEM.jpg",
      buttonText1: "Ver ahora",
      tecnologia: "react",
      vercelLink: "https://polar-ultra.vercel.app/"
    },
    {
      id: 3,
      title: "Morty APP",
      description: "Fetch API Rick&Morty",
      imageUrl: "/rickymorty.jpg",
      buttonText1: "Ver ahora",
      tecnologia: "react",
      vercelLink: "https://fakukostasdvlpr.github.io/RandoMortyApp/"
    },
    {
      id: 4,
      title: "Weather APP",
      description: "Fetch API Weather",
      imageUrl: "/WEATHER.jpg",
      buttonText1: "Ver ahora",
      vercelLink: "https://worldweathersite.vercel.app/"
    },
    {
      id: 5,
      title: "Hallowen Landing",
      description: "SPA",
      imageUrl: "/Hallowen.jpg",
      buttonText1: "Ver ahora",
      vercelLink: "https://fakukostasdvlpr.github.io/Hallowen-Landing/"
    },
    {
      id: 6,
      title: "Hallowen Landing",
      description: "To-do App",
      imageUrl: "/TodoList.jpg",
      buttonText1: "Ver ahora",
      vercelLink: "https://fakukostasdvlpr.github.io/ToDoList/"
    },
  ];
  return (
    <div className="grid gap-10 grid-cols-1 md:grid-cols-1 md:m-10 lg:grid-cols-2 xl:grid-cols-2 mt-10">
      {projects.map(project => (
        <CardContainer className="inter-var" key={project.id}>
          <RevealWrapper delay={300} distance="50px" duration={1000} easing='cubic-bezier(0.5, 0, 0, 1)' origin="bottom" reset={true}> 
            <CardBody className="cursor-pointer reveal lg:w-[400px] md:w-[400px] w-[280px] bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-gradient-to-r from-amber-50 to-yellow-400 dark:border-white/[0.2] border-black/[0.1]sm:w-[39rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-gray-700 "
                >
                {project.title}
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-gray-600 text-sm max-w-sm mt-2"
                >
                {project.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={project.imageUrl}
                  className="md:h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                  />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-green-500 bg-gradient-to-r from-[#e2ff53] text-xs font-bold"
                  >
                  <ChipIcon/>
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal items-center justify-center"
                  >
                  <a href={project.vercelLink} target="_blank"><span className="hover:bg-white rounded-xl hover:text-black hover:font-bold p-3 ease-out duration-75 border-2 border-dashed">{project.buttonText1}</span></a>
                </CardItem>
              </div>
            </CardBody>
          </RevealWrapper>
          </CardContainer>
      ))}
    </div>
  );
}
