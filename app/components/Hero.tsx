"use client"

import Proyects from "./Proyects";
import Template from "./Template";

export default function Header() {
    return (
    <section className="flex flex-col m-auto w-full max-w-[1124px] items-center justify-center">
        <Template/>
        <Proyects/>
    </section>
    );
}