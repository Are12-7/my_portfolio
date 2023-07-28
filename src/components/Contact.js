import React, { useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateInput()) {
      return;
    }

    emailjs
      .sendForm(
        "service_xo063d6",
        "template_pbavno6",
        form.current,
        "O7NGoMGpsNt25jVhE"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success(
            "Thank you for your message. I have received it and will get back to you as soon as possible."
          );
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const validateInput = () => {
    const fullNameInput = form.current.from_name.value;
    const emailInput = form.current.from_email.value;
    const messageInput = form.current.message.value;

    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /\S+@\S+\.\S+/; // Basic email validation

    if (!nameRegex.test(fullNameInput)) {
      toast.error("Please enter a valid name.");
      return false;
    }

    if (!emailRegex.test(emailInput)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    form.current.from_name.value = sanitizeInput(fullNameInput);
    form.current.from_email.value = sanitizeInput(emailInput);
    form.current.message.value = sanitizeInput(messageInput);

    return true;
  };

  const sanitizeInput = (input) => {
    return input.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-x1 uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[60px] leading-none mb-12">
                Let's connect <br /> and <br /> harness our <br /> collective
                skills <br /> to fuel innovation!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1  flex flex-col gap-y-6 pb-24 p-6 items-start"
            required
          >
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Enter your full name"
              name="from_name"
              required
            />
            <input
              type="email"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Enter your email"
              name="from_email"
              required
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Enter your message"
              name="message"
              required
            ></textarea>
            <input type="submit" className="btn btn-lg" value="Send Message" />
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
