import React from "react";
import { Link } from "gatsby";
import "./styles/header.css";

export default function Header() {
  return (
    <header>
      <div className="dcLogo">
        <p className="dcLogo-text">DC</p>
      </div>
      <nav>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/experience">Experience</Link>
        </p>
        <p>Portfolio</p>
        <p>Contact</p>
        <p>Personal</p>
      </nav>
    </header>
  );
}
