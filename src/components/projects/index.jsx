"use client" //to make the animation work

import React from "react";
import ProjectLayout from "./ProjectLayout";
import { motion } from "framer-motion";


const container = {
  hidden : {opacity : 0},
  show : {
    opacity : 1,
    transition : {
      staggerChildren : 0.3,
      delayChildren : 1.5,
    }
  }
}

const ProjectList = ({ projects }) => {
  return (
    <motion.div 
  variants={container} 
  initial="hidden" 
  animate="show" 
  className="max-w px-6 ml-[100px]  items-center"
>
  
<div className="">
  {projects.map((project, index) => (
    <div key={project.id || index} className="w-full"> 
      <ProjectLayout {...project} />
    </div>
  ))}
</div>

</motion.div>

  

  );
};

export default ProjectList;
