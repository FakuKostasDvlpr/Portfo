"use client";
import React from "react";
import "../../app/globals.css"

export function ThreeDCardDemo() {
  const projects = [
    {
      id: 1,
      title: "Polarsystem",
      description: "Nucba NFT",
      imageUrl: "https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2022/11/01/84b2c7ff-d5a7-48d8-af46-14f7a2fa094e_b6ff0769.jpg?itok=jiqsGL6Y&v=1667299410",
      buttonText1: "Ver ahora →",
      buttonText2: "Registrarse",
    },
    {
      id: 2,
      title: "Polarsystem",
      description: "Polarsystem",
      imageUrl: "https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2022/11/01/84b2c7ff-d5a7-48d8-af46-14f7a2fa094e_b6ff0769.jpg?itok=jiqsGL6Y&v=1667299410",
      buttonText1: "Ver ahora →",
      buttonText2: "Registrarse",
    },
    {
      id: 3,
      title: "Polarsystem",
      description: "Morty APP",
      imageUrl: "https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2022/11/01/84b2c7ff-d5a7-48d8-af46-14f7a2fa094e_b6ff0769.jpg?itok=jiqsGL6Y&v=1667299410",
      buttonText1: "Ver ahora →",
      buttonText2: "Registrarse",
    },
    {
      id: 4,
      title: "Proyecto 2",
      description: "Weather APP",
      imageUrl: "https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2022/11/01/84b2c7ff-d5a7-48d8-af46-14f7a2fa094e_b6ff0769.jpg?itok=jiqsGL6Y&v=1667299410",
      buttonText1: "Ver ahora →",
      buttonText2: "Registrarse",
    },
  ];

  return (
  <div className="md:w-[740px] grid md grid-cols-2 gap-5 m-5">
    {projects.map((project) => (
      <div className=" bg-red-200">
        <h1>{project.description}</h1>
        <div className="bg-blue-500">
          <img src={project.imageUrl} alt="" />
        </div>
      </div>
      ))}
    </div>
  );
}
