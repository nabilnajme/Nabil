import React from "react";
//countup
import CountUp from "react-countup";
//instersection observer hok
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0, 6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[680px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0, 5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent ">About me.</h2>
            <h3 className="h3 mb-4">
              Im'a Freelance Front-End Developer with over 2years of experience
            </h3>
            <p className="mb-5">
              I am FrontEnd developer with experience building websites and web
              application.I specialize in JavaScript, React Js, CSS,Tailwind
              Css.and HTML .and i'm ready and able to take any challenge
              presented to me
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="font-tertiary text-[40px] text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={5} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of
                  <br />
                  Experience
                </div>
              </div>

              <div>
                <div className="font-tertiary text-[40px] text-gradient mb-2">
                  {inView ? <CountUp start={0} end={50} duration={4} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects
                  <br />
                  Complete
                </div>
              </div>

              <div>
                <div className="font-tertiary text-[40px] text-gradient mb-2">
                  {inView ? <CountUp start={0} end={50} duration={5} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied
                  <br />
                  Clients
                </div>
              </div>
            </div>
            <div className="flex max-w-max gap-x-6 items-center mb-6 mx-auto lg:mx-0">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
