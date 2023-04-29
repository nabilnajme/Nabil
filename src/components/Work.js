import React from "react";
//motion
import { motion } from "framer-motion";
//variatns
import { Variant, fadeIn } from "../variants";
//img
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";
import { Button } from "react-scroll";
const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* text */}
            <motion.div
              variants={fadeIn("right", 0, 3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-sm mb-16">
                I am FrontEnd developer with experience building websites and
                web application.I specialize in JavaScript, React Js,
                CSS,TailwindCss.and HTML .and i'm ready and able to take any
                challenge presented to me
              </p>
              <button className="btn btn-sm">View all Projects </button>
            </motion.div>
            {/* image */}
            <motion.div
              variants={fadeIn("right", 0, 6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute transition-all z-40 duration-500"></div>
              {/* image */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full group-hover:bottom-24 left-12 transtion-all z-50 duration-500">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="absolute bottom-full group-hover:bottom-14 left-12 transtion-all z-50 duration-700">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("left", 0, 2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex flex-col gap-y-24 "
          >
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute transition-all z-40 duration-500"></div>
              {/* image */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full group-hover:bottom-24 left-12 transtion-all z-50 duration-500">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="absolute bottom-full group-hover:bottom-14 left-12 transtion-all z-50 duration-700">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute transition-all z-40 duration-500"></div>
              {/* image */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full group-hover:bottom-24 left-12 transtion-all z-50 duration-500">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="absolute bottom-full group-hover:bottom-14 left-12 transtion-all z-50 duration-700">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
