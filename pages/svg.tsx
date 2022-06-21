import { NextPage } from "next";
import {
  motion,
  useMotionValue,
  Variants,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useEffect, useRef } from "react";
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

const svg = {
  start: { pathLength: 0, fill: "rgba(255,255,255,0)" },
  animate: {
    pathLength: 1,
    fill: "rgba(255,255,255,1)",
  },
};

const Gesture: NextPage = () => {
  // value가 바뀌어도 다시 랜더링 되지 않는다.
  const x = useMotionValue(0);
  const { scrollYProgress } = useViewportScroll();

  return (
    <motion.div className="w-full h-screen bg-gradient-to-r from-pink-600 to-pink-500 flex justify-center items-center flex-col">
      <motion.svg
        className="h-64 w-64"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        strokeWidth="1"
      >
        <motion.path
          variants={svg}
          initial="start"
          animate="animate"
          transition={{
            default: { duration: 5 },
            fill: { duration: 2, delay: 5 },
          }}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
        />
      </motion.svg>

      <div className="absolute top-0 mt-10">
        <Link href={"/svg"}>
          <a>svg &rarr;</a>
        </Link>
      </div>
    </motion.div>
  );
};

export default Gesture;
