import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Public } from "@mui/icons-material";

// Animation configurations
const item = {
  hidden: { opacity: 0, y: 100 }, // Start from bottom to top
  show: { opacity: 1, y: 0 },
};

const ProjectLayout = ({ name, description,demoLink, visitLink ,tools,time}) => {
  return (
    <motion.div 
      variants={item} 
      initial="hidden" 
      animate="show" 
      className="max-w-sm w-full bg-transparent custom-bg rounded-lg shadow-lg p-4 h-[400px] top-[0px]"
    >
      <div className="flex flex-col">
        {/* Project Name */}
        <h2 className="text-3xl font-bold text-accent mb-4">{name}</h2>

        <p className="text-accent italic">{tools}</p>

        <br/>

        {time && (
          <p className="text-accent">{time}</p>
        )}

        <br/>

        {/* Project Description */}
        <p className="text-white-700 mb-4">{description}</p>

        {/* GitHub & Live Demo Links */}
        <div className="mb-[0px]">
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <IconButton
                className="p-3 rounded-full bg-transparent hover:bg-transparent-200 transition-all duration-300 "
                aria-label="View GitHub Repo"
              >
                <GitHubIcon sx={{ fontSize: 30, color: "rgb(var(--accent))" }} />
              </IconButton>
            </a>

          {visitLink && (
            <a href={visitLink} target="_blank" rel="noopener noreferrer">
              <IconButton
                className="p-3 rounded-full bg-transparent transition-all duration-300"
                aria-label="Visit Live Demo"
              >
                <Public sx={{ fontSize: 30, color: "rgb(var(--accent))" }} />
              </IconButton>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectLayout;
