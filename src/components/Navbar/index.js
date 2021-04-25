import React from "react";
import { Login, NavLink } from "./NavElements";
import "./Navbar.css";
import { IoLanguageSharp } from "react-icons/io5";

function Navbar(props) {
  return (
    <div className="Navbar">
      <NavLink text="Home" />
      <NavLink text="About us" />
      <NavLink text="Pizzas" />
      <Login className="login" onClick={props.onLogin} />
      <NavLink icon={IoLanguageSharp} text="English" />
    </div>
  );
}

export default Navbar;
