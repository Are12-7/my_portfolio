import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";

import Image1 from "../assets/portfolio-img1.png";
import Image2 from "../assets/portfolio-img2.png";
import Image3 from "../assets/portfolio-img3.png";
import { Link } from "react-scroll";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My latest <br /> work
              </h2>
              <p className="max-w-sm mb-16">
                In this section you can find some of my most recent projects.
                Some of the programming languages and frameworks you will find
                here are Python, Django, Java, MySQL, Mongo, Express, React, and
                NodeJs. In my github repository you can find more projects I've
                worked on.
              </p>
              <button className="btn btn-sm">
                <a href="https://github.com/Are12-7" target="blank">
                  Visit github repositories
                </a>
              </button>
            </div>
            {/* Image 1 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-x1">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img1 */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Image1}
                alt="Image1"
              />
              {/* pre-title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">
                  <a href="https://youtu.be/96xHbv1AGWk" target="_blank">
                    E-commerce app demo
                  </a>
                </span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">
                  Python & Django{" "}
                  <a
                    href="https://github.com/Are12-7/e-commerce_app_py.git"
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/* Image 2 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-x1">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img2 */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Image2}
                alt="Image1"
              />
              {/* pre-title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">
                  <a href="https://youtu.be/XZgBq3MZUQc" target="blank">
                    Library system demo
                  </a>
                </span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">
                  Java & MySQL
                  <a
                    href="https://github.com/Are12-7/library_management_system.git"
                    target="blank"
                  >
                    <FaGithub />
                  </a>
                </span>
              </div>
            </div>
            {/* Image 3 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-x1">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img3 */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Image3}
                alt="Image1"
              />
              {/* pre-title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">
                  <a href="https://youtu.be/IxbUPRdLy8w" target="_blank">
                    Transaction management demo
                  </a>
                </span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">
                  MERN STACK
                  <a
                    href="https://github.com/Are12-7/transaction_management_app.git"
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
