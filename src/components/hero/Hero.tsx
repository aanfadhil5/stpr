import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const renderH1 = () => {
    return [1, 2, 3, 4, 5].map((number) => (
      <motion.h1
        key={number}
        variants={textVariants}
        transition={{ duration: 0.5 }}
      >
        STPR
      </motion.h1>
    ));
  };

  return (
    <div className="flex flex-row items-center gap-6 text-7xl">
      <motion.div
        className="-space-y-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {renderH1()}
      </motion.div>
      <motion.div
        className="-space-y-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {renderH1()}
      </motion.div>
      <motion.div
        className="-space-y-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {renderH1()}
      </motion.div>
    </div>
  );
};

export default Hero;
