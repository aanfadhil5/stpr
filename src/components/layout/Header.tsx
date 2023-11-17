import React from "react";
import LinkButton from "../ui/LinkButton";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  return (
    <motion.div className="flex justify-between w-full px-96">
      <LinkButton href="/">website</LinkButton>
      <LinkButton href="/">branding</LinkButton>
      <LinkButton href="/">marketing</LinkButton>
      <LinkButton href="/">work</LinkButton>
      <LinkButton href="/">us</LinkButton>
    </motion.div>
  );
};

export default Header;
