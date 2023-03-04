import { Link } from "gatsby";
import React from "react";

export default function Header() {
  return (
    <header>
      <div className="dcLogo">
        <p className="dcLogo-text">DC</p>
      </div>
      <nav>
        <Link to="/">Home</Link>
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
