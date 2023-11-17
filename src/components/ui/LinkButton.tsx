import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

type Props = {
  children: ReactNode;
  href: string;
};

const LinkButton = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link href={props.href}>
      <motion.div
        className="flex rounded-full hover:bg-[#ce3227] hover:text-white px-4 py-2 text-xl duration-700 transition-all"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        layout
      >
        {props.children}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="flex items-center ml-2"
          >
            <MoveRight size={16} />
          </motion.div>
        )}
      </motion.div>
    </Link>
  );
};

export default LinkButton;
