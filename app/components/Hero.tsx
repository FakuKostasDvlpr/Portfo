"use client"

import Proyects from "./Proyects";
import { Techs } from "./Techs";
import Template from "./Template";

export default function Header() {
    return (
    <section className="flex flex-col m-auto w-full items-center justify-center">
        <Template/>
        <div className="w-full items-center justify-center text-center">
        <Techs/>
        </div>
        <Proyects/>
    </section>
    );
}