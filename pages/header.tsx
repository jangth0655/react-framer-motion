import {
  motion,
  Variants,
  useAnimation,
  useViewportScroll,
} from "framer-motion";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import TypeIt from "typeit-react";

const logVariants: Variants = {
  normal: {
    fillOpacity: 1,
  },
  active: {
    fillOpacity: [0, 1, 0],
    transition: {
      repeat: Infinity,
    },
  },
};

const navVariant = {
  top: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  scroll: {
    backgroundColor: "rgba(0,0,0,1)",
  },
};

const Header: NextPage = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [match, setMatch] = useState(false);
  const inputAnimation = useAnimation();
  const navAnimation = useAnimation();
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start("scroll");
      } else {
        navAnimation.start("top");
      }
    });
  }, [navAnimation, scrollY]);

  const toggleSearch = () => {
    if (searchOpen) {
      inputAnimation.start({
        scaleX: 0,
      });
    } else {
      inputAnimation.start({
        scaleX: 1,
      });
    }
    setSearchOpen((prev) => !prev);
  };
  return (
    <div className="">
      <motion.nav
        variants={navVariant}
        animate={navAnimation}
        initial="top"
        className="px-2  flex justify-between items-center  w-full"
      >
        <motion.div className="flex justify-center items-center text-white">
          <motion.svg
            variants={logVariants}
            initial="normal"
            whileHover="active"
            className="w-20 h-20"
            xmlns="http://www.w3.org/2000/svg"
            width="1024"
            height="276.742"
            viewBox="0 0 1024 276.742"
            fill="red"
          >
            <motion.path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z" />
          </motion.svg>

          <motion.ul className="ml-10 space-x-4 flex">
            <li className="relative flex flex-col justify-center">
              <span className="cursor-pointer" onClick={() => setMatch(true)}>
                home
              </span>
              {match && (
                <motion.span
                  layoutId="circle"
                  className="absolute  -bottom-2 left-0 right-0 my-0 mx-auto w-[5px] h-[5px] bg-blue-400 rounded-full"
                />
              )}
            </li>
            <li className="relative flex flex-col justify-center">
              <span className="cursor-pointer" onClick={() => setMatch(false)}>
                movie
              </span>
              {!match && (
                <motion.span
                  layoutId="circle"
                  className="absolute -bottom-2 left-0 right-0 my-0 mx-auto  w-[5px] h-[5px] bg-blue-400 rounded-full"
                />
              )}
            </li>
          </motion.ul>
        </motion.div>

        <div>
          <div
            onClick={toggleSearch}
            className="px-10 py-2  flex items-center relative "
          >
            <motion.svg
              animate={{ x: searchOpen ? -185 : 0 }}
              transition={{ type: "linear" }}
              className="h-5 w-5 cursor-pointer z-20 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </motion.svg>
            <motion.input
              initial={{ scaleX: 0 }}
              animate={inputAnimation}
              /* animate={{ scaleX: searchOpen ? 1 : 0 }} */
              transition={{ type: "linear" }}
              type="text"
              className="origin-right absolute -left-[150px] rounded-md pl-8 py-1 placeholder:text-sm placeholder:text-gray-500 bg-gray-900 border-white border-[1px]"
              placeholder="Search for movie or TV show."
            />
          </div>
        </div>
      </motion.nav>

      <div className="p-4 border-2 mt-96 bg-slate-300">
        <div>
          <TypeIt
            options={{
              strings: ["This is will be typed!"],
              speed: 10,
              waitUntilVisible: true,
            }}
          />
        </div>
        <TypeIt
          getBeforeInit={(instance) => {
            instance
              .type("Hi, I'm Alxe")
              .pause(750)
              .delete(5)
              .pause(500)
              .type("ex!")
              .go();

            // Remember to return it!
            return instance;
          }}
        />
      </div>
    </div>
  );
};

export default Header;
