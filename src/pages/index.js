import * as React from "react";
import { Link } from "gatsby";
import Header from "../components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  );
}

export const Head = () => <title>Dan Castle</title>;
