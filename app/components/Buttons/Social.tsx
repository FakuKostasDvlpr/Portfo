"use client";
import React from "react";
import {Tooltip} from "@nextui-org/react";
import Linkedin from "../icons/Linkedin";
import GitHub from "../icons/GitHub";
import Link from "next/link";


export function AnimatedTooltipPreview() {
  return (
    <>
    <div className="px-4 flex gap-3">
      <Tooltip content="Linkedin" closeDelay={100} className="bg-blue-600 text-white px-3 rounded-xl ">
        <Link href="https://www.linkedin.com/in/facundo-costas-tealdi/" target="_blank" className="p-2 m-auto"><Linkedin/></Link>
      </Tooltip>
      <Tooltip content="GiHub" closeDelay={100} className="bg-black text-white px-3 rounded-xl">
        <Link className="p-2 m-auto"  href="https://github.com/FakuKostasDvlpr" target="_blank"><GitHub/></Link>
      </Tooltip>
    </div>
    </>

  );
}