import React from "react";
import Link from "next/link";
import {Github, Home , Linkedin, Notebook, Twitter,Palette, Phone ,User,Star, Pen,HandHelping,Medal, Ticket} from 'lucide-react'

const getIcon = (icon) => {
    switch(icon){
        case "home":
            return <Home className = "w-full h-auto" strokeWidth = {1.5}/>
        case "about":
            return <User className = "w-full h-auto" strokeWidth = {1.5}/>
                
        case "projects":
            return <Palette className = "w-full h-auto" strokeWidth = {1.5}/>
        
        //case "contact":
          //  return <Phone className = "w-full h-auto" strokeWidth = {1.5}/>
        case "github":
             return <Github className = "w-full h-auto" strokeWidth = {1.5}/>
            
        case "linkedin":
            return <Linkedin className = "w-full h-auto" strokeWidth = {1.5}/>
        
        case "resume":
            return <Notebook className = "w-full h-auto" strokeWidth = {1.5}/>
        
        case "certifications":
            return <Star className = "w-full h-auto" strokeWidth = {1.5} />
        
        case "blog":
            return <Pen className = "w-full h-auto" strokeWidth = {1.5} />
        

        
    }
}

const NavButton = ({x,y,label,link,icon,newTab}) => {
    return(
        <div className="absolute cursor-pointer z-50"
        style={{transform : `translate(${x},${y})`}}
        >
            <Link href = {link} 
            target = {newTab? '_blank' :'_self'} 
            className = 'text-foreground rounded-full flex items-center justify-center bg-background/20 border border-accent/30 border-solid background-blur-[6-px] shadow-glass-inset hover:shadow-glass-sm' aria-label = {label} name = {label}>
            <span className="relative peer w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause group-hover:text-accent">
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"/>
                <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translte-y-1/2
            bg-background text-foreground text-sm rounded-md showdow-lg whitespace-nowrap">
                {label}
            </span>
            </span>
           
            </Link>
        </div>
    )
}

export default NavButton;