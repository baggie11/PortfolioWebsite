
import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/components/projects";
import { Suspense } from "react";
import clsx from "clsx";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import Wizard from "@/components/models/Wizard";
import Staff from "@/components/models/Staff";

export default function Home() {
  return (
   <>
      <Image src = {bg} alt = "background"  className = "-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"/>
      <h1 className="text-4xl text-accent">The Alchemist’s Log of Experiments </h1>
      <br/>
      <br/>
     <div className="flex items-center justify-center fixed top-20 -left-24 h-screen">

     </div>
     
  </>
  );
}
