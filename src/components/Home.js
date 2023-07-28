import React from "react";
import "../index.css";
import Image from "../assets/profile.jpg";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text*/}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[90px]"
            >
              CARLOS <span>ARELLLANO</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[38px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Commercial Engineer",
                  2000,
                  "Security+ Certified",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Dedicated and passionate recent graduate in computer programming
              and analysis, CompTIA Security+ certified, and commercial engineer
              with professional experience in accounting, finance, marketing,
              and administration. Seeking to leverage my diverse skillset and
              knowledge to develop comprehensive and effective technical
              solutions, combining programming expertise with a strong
              understanding of business requirements.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">
                <Link to="work">My portfolio</Link>
              </button>
              <button className="text-gradient btn-link">
                <Link to="contact">Contact me</Link>
              </button>
            </motion.div>
            {/* Social media */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://www.linkedin.com/in/carlos-arellano-ca/"
                target="blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://github.com/Are12-7" target="blank">
                <FaGithub />
              </a>
              <a href="https://youtube.com/@carlosarellano7897" target="blank">
                <FaYoutube />
              </a>
            </motion.div>
          </div>
          {/* Profile Image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="Profile" className="profile-image"></img>
          </motion.div>
          <br></br>
          <br></br>
        </div>
      </div>
    </section>
  );
};

export default Home;
