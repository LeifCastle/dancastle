import * as React from "react";
import "./styles/experience.css";
import { Link } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Experience() {
  return (
    <>
      <Header />
      <main>
        <h1>About Me</h1>
        <p>
          Hi there! I'm the proud creator of this site, which I built with React
          and Gatsby.
        </p>
      </main>
      <Footer />
    </>
  );
}
