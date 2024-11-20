

import { RiReactjsLine  } from "react-icons/ri";
import {  TbBrandNextjs } from "react-icons/tb";
import {SiMongodb} from "react-icons/si";
 import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoPython } from "react-icons/bi";
import { SiMysql } from "react-icons/si";

import { RiTailwindCssFill } from "react-icons/ri";
import { SiLangchain } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { TbBrandDjango } from "react-icons/tb";


export default function Skills() {
    return(

        <div className="border-b border-neutral-800 pb-24">
            
            <h2 className="my-20 text-center text-4xl">
                Technical Skills

            </h2>

            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4" >
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4" >
                    <TbBrandNextjs className="text-7xl"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4" >
                    <SiMongodb className="text-7xl text-green-500"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4" >
                    <FaNodeJs className="text-7xl text-green-500"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4" >
                    <BiLogoPostgresql className="text-7xl text-sky-700"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4" >
                    <BiLogoPython className="text-7xl"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4" >
                    <SiMysql className="text-7xl text-sky-400"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4" >
                    <RiTailwindCssFill className="text-7xl text-cyan-400"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4" >
                    <SiLangchain className="text-7xl "/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4" >
                    <TbBrandTypescript className="text-7xl text-sky-600 "/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4" >
                    <BsGithub className="text-7xl text-white "/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4" >
                    <TbBrandDjango className="text-7xl text-green-800"/>
                </div>
            </div>


        </div>

    )
}