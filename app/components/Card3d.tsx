import "../../app/globals.css";
import React from "react";
import { CardBody, CardContainer, CardItem } from ".././components/ui/3d-card.tsx";
import ChipIcon from "./Chip";
import Image from "next/image";

export function ThreeDCardDemo() {
  const projects = [
    {
      id: 1,
      title: "NUCBA NFT",
      description: "E-Commerce",
      imageUrl: "https://s32679.pcdn.co/wp-content/uploads/2022/01/nft-free.jpg.optimal.jpg",
      buttonText1: "Ver ahora →",
      tecnologia: "react",
      vercelLink: "https://fakukostasdvlpr.github.io/NFTCommerce/"
    },
    {
      id: 2,
      title: "Polarsystem",
      description: "SPA",
      imageUrl: "/POLARSYSTEM.jpg",
      buttonText1: "Ver ahora →",
      tecnologia: "react",
      vercelLink: "https://polar-ultra.vercel.app/"
    },
    {
      id: 3,
      title: "Morty APP",
      description: "Fetch API Rick&Morty",
      imageUrl: "https://i.ytimg.com/vi/w26m0KzvZy4/maxresdefault.jpg",
      buttonText1: "Ver ahora →",
      tecnologia: "react",
      vercelLink: "https://fakukostasdvlpr.github.io/RandoMortyApp/"
    },
    {
      id: 4,
      title: "Weather APP",
      description: "Fetch API Weather",
      imageUrl: "/WEATHER.jpg",
      buttonText1: "Ver ahora →",
      vercelLink: "https://worldweathersite.vercel.app/"
    },
    {
      id: 5,
      title: "Hallowen Landing",
      description: "SPA",
      imageUrl: "/Hallowen.jpg",
      buttonText1: "Ver ahora →",
      vercelLink: "https://fakukostasdvlpr.github.io/Hallowen-Landing/"
    },
    {
      id: 6,
      title: "Hallowen Landing",
      description: "To-do App",
      imageUrl: "/TodoList.jpg",
      buttonText1: "Ver ahora →",
      vercelLink: "https://fakukostasdvlpr.github.io/ToDoList/"
    },
  ];

  return (
    <div className="grid gap-10 grid-cols-1 md:grid-cols-1 md:m-10 lg:grid-cols-2 xl:grid-cols-2">
      {projects.map(project => (
        <a key={project.id} href={project.vercelLink} target="_blank" rel="noopener noreferrer" className="hover:no-underline">
          <CardContainer className="inter-var">
            <CardBody className="cursor-pointer lg:w-[400px] md:w-[600px] w-[400px] bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-gradient-to-r from-amber-50 to-yellow-400 dark:border-white/[0.2] border-black/[0.1]sm:w-[39rem] h-auto rounded-xl p-6 border  ">
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
                <Image
                  src={project.imageUrl}
                  className="md:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
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
                  className="px-4 py-2 rounded-xl text-xs font-normal"
                >
                  {project.buttonText1}
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </a>
      ))}
    </div>
  );
}
