"use client" //to make the animation work

import React from "react";
import ProjectLayout from "../projects/ProjectLayout";
import { motion } from "framer-motion";
import CertLayout from "./CertLayout";


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

const CertificationsList = ({ certifications }) => {
  return (
    <motion.div 
  variants={container} 
  initial="hidden" 
  animate="show" 
  className="w-6xl ml-[100px]  px-16 items-center"
>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-40 justify-items-center">
  {certifications.map((cert, index) => (
    <div key={cert.id || index} className=""> {/* Fixed width and height */}
      <CertLayout {...cert} />
    </div>
  ))}
</div>

</motion.div>

  

  );
};

export default CertificationsList;
