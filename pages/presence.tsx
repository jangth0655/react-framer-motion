import { NextPage } from "next";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const box: Variants = {
  entry: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
    },
  },
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.7,
    },
  }),
};

const Presence: NextPage = () => {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  console.log(back);
  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };

  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  return (
    <motion.div className="w-full h-screen bg-gradient-to-r from-pink-600 to-pink-500 flex justify-center items-center flex-col">
      <AnimatePresence exitBeforeEnter custom={back}>
        <motion.div
          custom={back}
          variants={box}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
          className="w-[200px] h-[100px] bg-slate-100 rounded-lg shadow-lg flex justify-center items-center mx-2 absolute top-48 m-auto"
        >
          {visible}
        </motion.div>
      </AnimatePresence>
      <button onClick={() => nextPlease()} className="mt-10 p-2 bg-slate-300">
        next
      </button>
      <button onClick={() => prevPlease()} className="mt-10 p-2 bg-slate-300">
        prev
      </button>

      <div className="absolute top-0 mt-10">
        <Link href={"/layoutAni"}>
          <a>Layout Animation &rarr;</a>
        </Link>
      </div>
    </motion.div>
  );
};

export default Presence;
