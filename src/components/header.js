import React from "react";
import { Link } from "gatsby";
import "./styles/header.css";
import { useState } from "react";
import { useRef, useEffect } from "react";

export default function Header() {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
  });
  const [onPage, setonPage] = useState(false);

  function handleLinkClick(props) {
    setonPage(props);
    //document.querySelector({ onPage }).classList.add("userOnPage");
  }
  return (
    <header>
      <div id="Logo">
        <p id="logoText">DC</p>
      </div>
      <nav>
        <Link
          id="#home"
          onClick={(e) => handleLinkClick(e.target.id)}
          className="navLink"
          to="/"
        >
          Home
        </Link>
        <hr className="verticalLine" />
        <Link
          id="#experience"
          onClick={(e) => handleLinkClick(e.target.id)}
          className="navLink"
          to="/experience"
        >
          Experience
        </Link>
        <hr className="verticalLine" />
        <Link className="navLink" to="/portfolio">
          Portfolio
        </Link>
        <hr className="verticalLine" />
        <Link className="navLink" to="/contact">
          Contact
        </Link>
        <hr className="verticalLine" />
        <Link className="navLink" to="/personal">
          Personal
        </Link>
      </nav>
    </header>
  );
}
