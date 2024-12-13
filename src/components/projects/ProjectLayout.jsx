import { motion } from "framer-motion";
import Link from "next/link";
import React, { forwardRef } from "react";


const item = {
  hidden : {opacity :0 , y: 100}, //start from bottom to top
  show :{opacity:1 , y:0}
}
// Wrap Link with forwardRef to make it compatible with motion

const NavLink = motion(Link);

const ProjectLayout = ({ name, description, date, demoLink }) => {
  return (
    <NavLink
    variants = {item}
    href={demoLink}
    target={"_blank"}
    className="flex items-center relative rounded-lg overflow-hidden p-6 custom-bg h-20 w-full"
  >
    <div className="flex w-full items-center space-x-4">
      {/* Project Name */}
      <h2 className="text-foreground flex-shrink-0 w-1/4">{name}</h2>
      {/* Project Description */}
      <p className="text-muted text-foreground flex-grow">{description}</p>
    </div>
  </NavLink>

  );
};

export default ProjectLayout;
