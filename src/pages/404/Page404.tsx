import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
  //phrase  from http://www.free404.com
  //nuts from unsplash
  return (
    <main className="page-404">
      <div className="text-box">
        <h1>Ah, nuts!</h1>
        <p>
          We were unable to find the page you were looking for, but we'll get
          cracking on the problem.
        </p>
      </div>

      <Link to={"/"} className={"btn btn-secondary"}>
        Go Home
      </Link>
    </main>
  );
}
