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

const ProjectLayout = ({ name, description, demoLink, visitLink, tools, time }) => {
  return (
    <motion.div
      variants={item}
      initial="hidden"
      animate="show"
      className="max-w-sm w-full bg-transparent custom-bg rounded-lg shadow-lg p-4 h-[450px] flex flex-col justify-between"
    >
      {/* Project Name */}
      <h2 className="text-2xl font-bold text-accent">{name}</h2>

      <br/>

      {/* Tools Used */}
      <p className="text-accent italic">{tools}</p>

      <br/>

      {/* Duration */}
      {time && <p className="text-accent">{time}</p>}

      <br/>

      {/* Project Description */}
      <p className="text-white-700 flex-grow overflow-hidden text-ellipsis">{description}</p>

      {/* GitHub & Live Demo Links */}
      <div className="flex justify-start gap-4 mt-4">
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <IconButton
              className="p-3 rounded-full bg-transparent hover:bg-transparent transition-all duration-300"
              aria-label="View GitHub Repo"
            >
              <GitHubIcon sx={{ fontSize: 30, color: "rgb(var(--accent))" }} />
            </IconButton>
          </a>
        )}
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
    </motion.div>
  );
};

export default ProjectLayout;
