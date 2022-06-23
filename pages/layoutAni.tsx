import { NextPage } from "next";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import cls from "../libs/cls";

const LayoutAni: NextPage = () => {
  const [id, setId] = useState<string | null>(null);

  return (
    <motion.div className="flex justify-center items-center w-full h-screen from-pink-600 to-pink-500 bg-gradient-to-r">
      <motion.div className="w-[50vw] grid grid-cols-3 first:col-span-2 last:col-span-2 m-auto gap-[10px]">
        {[1, 2, 3, 4].map((n) => (
          <motion.div
            onClick={() => setId(n + "")}
            key={n}
            layoutId={n + ""}
            className={cls(
              "w-[150px] h-[150px] bg-slate-100 rounded-lg shadow-lg flex "
            )}
          />
        ))}
      </motion.div>

      {/* overlayout */}
      <AnimatePresence>
        {id ? (
          <motion.div
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0,0,0,0)" }}
            animate={{ backgroundColor: "rgba(0,0,0,0.8)" }}
            exit={{ backgroundColor: "rgba(0,0,0,0)" }}
            className="w-full h-full bg-black  absolute flex justify-center items-center"
          >
            <motion.div
              layoutId={id}
              className={cls(
                " w-[150px] h-[150px] bg-white rounded-lg shadow-lg"
              )}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
};

export default LayoutAni;
