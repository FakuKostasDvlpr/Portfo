"use client";
import React from "react";
import {Tooltip} from "@nextui-org/react";
import Linkedin from "../icons/Linkedin";
import GitHub from "../icons/GitHub";
import Link from "next/link";
import Discord from "../icons/Discord";


export function AnimatedTooltipPreview() {
  return (
    <>
    <div className="flex gap-10 items-center justify-center">
      <Tooltip content="Linkedin" closeDelay={100} className="bg-blue-600 text-white px-3 rounded-xl ">
        <Link href="https://www.linkedin.com/in/facundo-costas-tealdi/" target="_blank" className="p-2 m-auto"><Linkedin/></Link>
      </Tooltip>
      <Tooltip content="GiHub" closeDelay={100} className="bg-black text-white px-3 rounded-xl">
        <Link className="p-2 m-auto"  href="https://github.com/FakuKostasDvlpr" target="_blank"><GitHub/></Link>
      </Tooltip>
      <Tooltip content="FakuuKostas#9467" closeDelay={100} className="bg-[#5865F2] text-white px-3 rounded-xl">
      <Link className="p-2 m-auto"  href=""><Discord/></Link>
      </Tooltip>

    </div>
    </>

  );
}