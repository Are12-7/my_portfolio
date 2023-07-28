import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            <img src={Logo} alt="logo" />
          </a>
          {/* Contact me button*/}
          <button className="btn btn-sm">
            <Link to="contact">Contact Me</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
