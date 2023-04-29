import React from "react";
//icons
import { BsArrowUpRight } from "react-icons/bs";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
//services data
const services = [
  {
    name: "UI/UX Design",
    description:
      "As a UI/UX designer for a mobile app development company, my main responsibility was to ensure that the app we were developing was user-friendly, intuitive, and visually appealing.",
    Link: "Learn more...",
  },

  {
    name: "Development",
    description:
      "I am FrontEnd developer with experience building websites and web application.I specialize in JavaScript, React Js, CSS,TailwindCss.and HTML .and i'm ready and able to take any challenge presented to me",
    Link: "Learn more...",
  },
  {
    name: "Economique student",
    description:
      "Studying economics has been fascinating. I've learned about money, markets, and the global economy. It's challenging, but I love being able to apply what I've learned to real-world situations",
    Link: "Learn more...",
  },
];

const Services = () => {
  return (
    <div className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & images*/}
          <motion.div
            variants={fadeIn("right", 0, 6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 lg:bg-services bg-no-repeat lg:bg-bottom mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="h3 mb-16 max-w-[455px]">
              Im a Front-End Developer with over 2 years of experience{" "}
            </h3>
            <button className="btn btn-sm">See my Work</button>
          </motion.div>
          {/* services  */}
          <motion.div
            variants={fadeIn("left", 0, 6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            {/* services list */}
            <div className="flex-1">
              {services.map((service, index) => {
                //destricture services
                const { name, description, Link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="leading-tight  font-secondary">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-1 flex-col items-end">
                      <a
                        href="#"
                        className=" btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm -mb-5">
                        {Link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
