import React from "react";
// @ts-ignore
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <Link to="/">
          <li>
            <img className="logo" src={logo} alt="background" />
          </li>
        </Link>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/menu">
          <li>Menu</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
