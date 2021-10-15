import React from "react";
// @ts-ignore
import { NavLink } from "react-router-dom";
//project files
import logo from "../assets/images/logo.svg";

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <NavLink to="/">
          <li>
            <img className="logo" src={logo} alt="background" />
          </li>
        </NavLink>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/menu">
          <li>Menu</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </nav>
  );
}
