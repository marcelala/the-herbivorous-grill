import { Link } from "react-router-dom";
import React from "react";

export const ErrorComponent = (
  <p>
    Oops, something went wrong. Please return to the home page and try again{" "}
    <Link to="/">Go home</Link>
  </p>
);
