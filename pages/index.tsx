import type { NextPage } from "next";
import { motion, Variants } from "framer-motion";

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const circleVariants: Variants = {
  start: {
    opacity: 0,
    y: -10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const Home: NextPage = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-pink-500 to-pink-400 flex justify-center items-center">
      <motion.div
        variants={boxVariants}
        initial="start"
        animate="animate"
        className="w-64 h-64 bg-pink-500 opacity-90 shadow-lg rounded-3xl grid grid-cols-2"
      >
        <motion.div
          variants={circleVariants}
          className="shadow-md place-self-center w-16 h-16 bg-gray-50 rounded-full"
        ></motion.div>

        <motion.div
          variants={circleVariants}
          className="shadow-md place-self-center w-16 h-16 bg-gray-50 rounded-full"
        ></motion.div>

        <motion.div
          variants={circleVariants}
          className="shadow-md place-self-center w-16 h-16 bg-gray-50 rounded-full"
        ></motion.div>

        <motion.div
          variants={circleVariants}
          className="shadow-md place-self-center w-16 h-16 bg-gray-50 rounded-full"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
