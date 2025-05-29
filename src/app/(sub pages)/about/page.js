
import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import { Suspense } from "react";
import clsx from "clsx";
import RenderModel from "@/components/RenderModel";
import Hat from "@/components/models/Hat";
import AboutDetails from "@/components/about";


export default function Home() {
  return (
   <>
      <Image src = {bg} alt = "background"  className = "-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"/>
     {/* <div className="w-full h-screen absolute top-1/3 -translate-y-1/2 left-0">
     <RenderModel>
      <Hat/>
     </RenderModel>
     </div> */}
     <div className="relative w-full h-screen justify-center">
     <div className="absolute flex flex-col  text-center left-[200px] top-[200px] -translate-y-1/2 -translate-x-1/2">
      <h1 className="font-bold text-6xl text-accent">Hii!!</h1>
      <h2 className="font-bold text-4xl text-accent left-[250px]">I'm Bagavati</h2>
     </div>
     </div>
     
     <AboutDetails/>
  </>
  );
}
