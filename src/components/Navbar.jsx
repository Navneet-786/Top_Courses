import React from "react";
import Logo from "../assets/Logo.svg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div id="navbar">
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div>
        <button id="login">log in</button>
        <button id="signup">sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
