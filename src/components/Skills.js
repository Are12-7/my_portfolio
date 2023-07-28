import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const skills = [
  {
    name: "Full Stack",
    description:
      "Seamless and efficient web solutions that meet the unique needs of clients and users. I can build different solutions in programming languages such as Python, Java, JavaScript, and frameworks like React. I am also well-versed in server-side technologies such as Node.js and Django, along with database management systems like MySQL and MongoDB.",
  },
  {
    name: "Cyber security (Security+ Certified)",
    description:
      "Comprehensive understanding of the principles and practices pertaining to information security. Additionally, I have acquired knowledge in areas such as network security, vulnerability management, cryptography, risk assessment, identifying security threats, conducting risk analysis, as well as ensuring compliance with applicable regulations.",
  },
  {
    name: "Business Administration",
    description:
      "Analyze complex business processes, identify areas for optimization, and develop innovative software solutions that improve operational efficiency. With a comprehensive understanding of business principles and advanced programming skills, I can bridge the gap between technology and business goals. I'm good at translating business requirements into precise technical specifications and delivering solutions that drive growth and success.",
  },
];

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">
              HOW MAY I ASSIST YOUR BUSINESS?
            </h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Front-end/Back-end/Business Administration/Cybersecurity
            </h3>
          </motion.div>
          {/* skills */}
          <br></br>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <br></br>
            {/*List */}
            <div>
              {skills.map((skill, index) => {
                const { name, description } = skill;
                return (
                  <div
                    className="border-b border-white/20 h-[200px] mb-[38px] flex "
                    key={index}
                  >
                    <div className="max-w-[890px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
