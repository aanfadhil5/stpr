import { motion } from "framer-motion";
import { ArrowUpRightSquare } from "lucide-react";
import Link from "next/link";
type Props = {
  title: string;
  description: string;
  variant: string;
  href: string;
};

const CardHero = (props: Props) => {
  const variant = props.variant;

  let backgroundColor = "";
  switch (variant) {
    case "primary":
      backgroundColor = "bg-[#a0eef3]";
      break;
    case "secondary":
      backgroundColor = "bg-[#e3ccf5]";
      break;
    case "tertiary":
      backgroundColor = "bg-[#ce3227]";
      break;
    case "quaternary":
      backgroundColor = "bg-black";
      break;
    default:
      backgroundColor = "bg-gray-300";
      break;
  }

  return (
    <motion.div className={`rounded-2xl w-96 ${backgroundColor} `}>
      <motion.div
        className={`py-4 px-6`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        <h1 className="text-2xl">{props.title}</h1>
        <motion.div
          className="flex flex-grow items-end justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-end mt-40">
            <Link href={props.href}>
              <ArrowUpRightSquare size={60} />
            </Link>
          </div>
          <div className="flex items-center w-56">
            <p className="text-base text-right">{props.description}</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CardHero;
