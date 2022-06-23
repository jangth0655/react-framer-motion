import { NextPage } from "next";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const boxVariant: Variants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
    transition: {
      type: "tween",
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    y: 20,
  },
};

const Gesture: NextPage = () => {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => {
    console.log(showing);
    setShowing((prev) => !prev);
  };
  return (
    <motion.div className="w-full h-screen bg-gradient-to-r from-pink-600 to-pink-500 flex justify-center items-center flex-col">
      <button onClick={toggleShowing} className="bg-slate-200 rounded-lg p-2">
        Click
      </button>

      <AnimatePresence>
        {showing ? (
          <motion.div
            variants={boxVariant}
            initial="initial"
            animate="visible"
            exit="exit"
            className="absolute top-[100px] shadow-lg bg-white w-52 h-52 rounded-lg"
          ></motion.div>
        ) : null}
      </AnimatePresence>

      <div className="absolute top-0 mt-10">
        <Link href={"/presence"}>
          <a>presence &rarr;</a>
        </Link>
      </div>
    </motion.div>
  );
};

export default Gesture;
