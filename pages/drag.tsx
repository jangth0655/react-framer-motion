import { NextPage } from "next";
import { motion, Variants } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const boxVariant: Variants = {
  hover: { scale: 1.5, rotate: 90 },
  click: { scale: 1, borderRadius: "100px" },
  drag: {
    backgroundColor: "#4cd137",
    transition: {
      duration: 3,
    },
  },
};

const Gesture: NextPage = () => {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-pink-600 to-pink-500 flex justify-center items-center flex-col">
      <motion.div
        ref={biggerBoxRef}
        className="w-[600px] h-[600px] bg-slate-100 opacity-60 rounded-lg flex justify-center items-center "
      >
        <motion.div
          variants={boxVariant}
          drag
          dragSnapToOrigin
          dragElastic={0.5}
          dragConstraints={biggerBoxRef}
          whileHover="hover"
          whileTap="click"
          whileDrag="drag"
          className="w-52 h-52 bg-white rounded-md shadow-lg"
        ></motion.div>
        <div className="mt-10 absolute top-0">
          <Link href={"/value"}>
            <a>value &rarr;</a>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Gesture;
