import { motion } from "framer-motion";
import React, { useState } from "react";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Public } from "@mui/icons-material";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1]
    }
  },
  hover: {
    transition: { staggerChildren: 0.1 }
  }
};

const floatElement = {
  hidden: { y: 10, opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1]
    }
  }),
  hover: { 
    y: -5,
    transition: { duration: 0.3 }
  }
};

const ProjectLayout = ({ name, description, demoLink, visitLink, tools, time }) => {
  const [isHovered, setIsHovered] = useState(false);
  const toolsArray = typeof tools === 'string' ? tools.split(',').map(tool => tool.trim()) : tools;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="show"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative w-full rounded-2xl overflow-hidden mt-[50px]"
    >
      {/* Glass background */}
      <div className="absolute inset-0  backdrop-blur-md border border-gray-700 border-opacity-50 rounded-2xl" />
      
      {/* Floating gradient blob */}
      <motion.div 
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-accent/10 to-slate-800/30"
        animate={{
          x: isHovered ? 10 : 0,
          y: isHovered ? 10 : 0,
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ duration: 0.8, type: "spring" }}
      />
      
      <div className="relative p-8 h-full flex flex-col">
        {/* Header with floating effect */}
        <motion.div 
          className="mb-6"
          variants={floatElement}
          custom={0}
        >
          <div className="flex justify-between items-start">
            <h2 className="text-3xl font-bold text-accent drop-shadow-md">{name}</h2>
            {time && (
              <span className="px-3 py-1 bg-slate-800/80 text-accent text-sm rounded-full">
                {time}
              </span>
            )}
          </div>
          <motion.div
            className="h-px bg-gradient-to-r from-accent/50 to-transparent mt-3"
            initial={{ width: "30%" }}
            animate={{ width: isHovered ? "80%" : "30%" }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>

        {/* Description with staggered words */}
        <motion.div 
          className="mb-8 flex-grow"
          variants={floatElement}
          custom={1}
        >
          <p className="text-gray-300 leading-relaxed">
            {description.split('.').map((sentence, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={floatElement}
                className="block mb-3 last:mb-0"
              >
                {sentence.trim() + (i < description.split('.').length - 1 ? '.' : '')}
              </motion.span>
            ))}
          </p>
        </motion.div>

        {/* Tech stack floating bubbles */}
        <motion.div 
          className="mb-8"
          variants={floatElement}
          custom={2}
        >
          <h3 className="text-accent/80 text-sm font-semibold mb-3">TECH STACK</h3>
          <div className="flex flex-wrap gap-3">
            {toolsArray.map((tool, i) => (
              <motion.div
                key={i}
                custom={i + 3}
                variants={floatElement}
                whileHover={{ 
                  y: -3,
                  backgroundColor: "rgba(240, 180, 41, 0.15)",
                  borderColor: "rgba(240, 180, 41, 0.5)"
                }}
                className="px-4 py-2 bg-slate-800/50 border border-gray-700 rounded-full text-sm text-gray-300 cursor-default"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action buttons with depth */}
        <motion.div 
          className="flex gap-4"
          variants={floatElement}
          custom={toolsArray.length + 3}
        >
          {demoLink && (
            <motion.a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-slate-800/70 hover:bg-slate-800 rounded-lg backdrop-blur-sm border border-gray-700 text-accent"
            >
              <GitHubIcon sx={{ fontSize: 20 }} />
              <span>View Code</span>
            </motion.a>
          )}
          
          {visitLink && (
            <motion.a
              href={visitLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-accent/10 hover:bg-accent/20 rounded-lg backdrop-blur-sm border border-accent/30 text-accent"
            >
              <Public sx={{ fontSize: 20 }} />
              <span>Live Demo</span>
            </motion.a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectLayout;