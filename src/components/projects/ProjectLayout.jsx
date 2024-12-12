import { motion } from "framer-motion";
import Link from "next/link";
import React, { forwardRef } from "react";



// Wrap Link with forwardRef to make it compatible with motion


const ProjectLayout = ({ name, description, date, demoLink }) => {
  return (
    <Link
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
  </Link>

  );
};

export default ProjectLayout;
