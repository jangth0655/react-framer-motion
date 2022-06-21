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

const Gesture: NextPage = () => {
  // value가 바뀌어도 다시 랜더링 되지 않는다.
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-400, 400], [-360, +360]);
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  return (
    <motion.div className="w-full h-[500vh] bg-gradient-to-r from-pink-600 to-pink-500 flex justify-center items-center flex-col">
      <button onClick={() => x.set(200)}>Click me</button>
      <motion.div
        variants={boxVariant}
        drag
        dragSnapToOrigin
        className="w-52 h-52 bg-white rounded-md shadow-lg"
        style={{ x, rotateZ, scale }}
      ></motion.div>

      <div className="absolute top-0 mt-10">
        <Link href={"/svg"}>
          <a>svg &rarr;</a>
        </Link>
      </div>
    </motion.div>
  );
};

export default Gesture;
