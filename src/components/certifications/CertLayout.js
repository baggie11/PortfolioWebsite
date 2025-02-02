import { motion } from "framer-motion";
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

// Animation configurations
const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const CertLayout = ({ name, issuedBy, link }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Certificate Card */}
      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        className="w-[380px] min-h-[400px] mt-[0px] bg-transparent custom-bg rounded-lg shadow-lg p-4"
      >
        <div className="flex flex-col items-center">
          {/* Clickable Certificate Image */}
          <img 
            src={link} 
            alt={name} 
            className="w-full h-60 object-cover rounded-t-lg cursor-pointer mb-4"
            onClick={() => setIsOpen(true)} // Open modal on click
          />

          {/* Certificate Name */}
          <h2 className="text-3xl font-bold text-accent mb-2">{name}</h2>

          {/* Issued By */}
          <p className="text-sm text-gray-400 mb-4">Issued by {issuedBy}</p>
        </div>
      </motion.div>

      {/* Modal - Enlarged Certificate View */}
      {isOpen && (
        <motion.div 
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl">
            {/* Close Button */}
            <button 
              className="absolute top-2 right-2 text-gray-700 hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon fontSize="large" />
            </button>

            {/* Full-Sized Certificate Image */}
            <img src={link} alt={name} className="w-full h-auto rounded-lg" />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default CertLayout;
