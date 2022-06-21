import { NextPage } from "next";
import { motion } from "framer-motion";
import Link from "next/link";

const boxVariant = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
};

const Gesture: NextPage = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-pink-600 to-pink-500 flex justify-center items-center flex-col">
      <motion.div
        variants={boxVariant}
        whileHover="hover"
        whileTap="click"
        className="w-72 h-72 bg-white rounded-md shadow-lg"
      ></motion.div>
      <div className="mt-10">
        <Link href={"/drag"}>
          <a>drag &rarr;</a>
        </Link>
      </div>
    </div>
  );
};

export default Gesture;
