import React from "react";
import { Link } from "gatsby";
import "./styles/header.css";

export default function Header() {
  return (
    <header>
      <div id="Logo">
        <p id="logoText">DC</p>
      </div>
      <nav>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/experience">Experience</Link>
        </p>
        <p>
          <Link to="/portfolio">Portfolio</Link>
        </p>
        <p>
          <Link to="/portfolio">Contact</Link>
        </p>
        <p>
          <Link to="/portfolio">Personal</Link>
        </p>
      </nav>
    </header>
  );
}
