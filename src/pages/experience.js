import * as React from "react";
import Header from "../components/header";
import "./styles/experience.css";
import { Link } from "gatsby";

export default function Experience() {
  return (
    <>
      <Header />
      <main>
        <h1>About Me</h1>
        <p>
          Hi there! I'm the proud creator of this site, which I built with
          Gatsby.
        </p>
      </main>
    </>
  );
}
