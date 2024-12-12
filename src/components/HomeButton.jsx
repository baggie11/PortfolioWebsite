import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";

const HomeButton = () => {
    return(
        <Link href = {"/"} 
            target = {'_self'} 
            className = 'text-foreground rounded-full flex items-center justify-center custom-bg fixed top-4 left-4 w-fit self-start' aria-label = {"home"} name = {"home"}>
            <span className="relative peer w-14 h-14 p-4  group-hover:pause group-hover:text-accent">
                <Home className="w-full h-auto" strokeWidth = {1.5}/>
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"/>
                <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translte-y-1/2
            bg-background text-foreground text-sm rounded-md showdow-lg whitespace-nowrap">
                {"home"}
            </span>
            </span>
           
            </Link>
    )
}

export default HomeButton;