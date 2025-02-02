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
  className="max-w-6xl px-6 ml-[100px]  items-center"
>
  
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-40 justify-items-center">
  {projects.map((project, index) => (
    <div key={project.id || index} className="w-[450px]"> {/* Fixed width and height */}
      <ProjectLayout {...project} />
    </div>
  ))}
</div>

</motion.div>

  

  );
};

export default ProjectList;
