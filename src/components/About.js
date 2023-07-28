import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
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
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="h3 mb-4">
              I'm a Full Stack Developer and Commercial Engineer
            </h3>
            <p className="mb-6">
              I am a highly enthusiastic and driven professional, who finds
              immense passion in both programming and business administration.
              With a solid grasp of various programming languages and
              frameworks, my primary focus is on developing software solutions
              that not only align with current market trends but also cater
              specifically to the unique needs of customers. I have acquired
              expertise in a comprehensive range of services, encompassing
              software development, mobile development, web development, and
              cyber security. Additionally, I have gained foundational knowledge
              in data analysis and visualization using Pandas and NumPy, as well
              as machine learning. Effectively using various programming
              languages and frameworks like Python, Java, Node, Express,
              Bootstrap React, and Django, I have created different projects
              that you can find in my portfolio. Together, let us dare to push
              the boundaries and create remarkable solutions that leave an
              everlasting impact in the ever-evolving digital landscape.
            </p>
            {/* Stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={70} duration={3} /> : null}%
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Python <br />
                  Django
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={60} duration={3} /> : null}%
                </div>
                <div className="font-primary text-sm tracking-[2px]">Java</div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={70} duration={3} /> : null}%
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  MERN <br />
                  MySQL
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={60} duration={3} /> : null}%
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Linux <br />
                  Kali Linux
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
