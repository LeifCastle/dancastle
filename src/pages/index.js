import * as React from "react";
import "./styles/index.css";
import Header from "../components/header";
import Footer from "../components/footer.js";
import "./styles/index.css";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="main-elements">
          <img
            id="danCastle-pic"
            src="https://static.wixstatic.com/media/67d009_53822902eed742efb38fc8494b6496d8~mv2.png/v1/fill/w_537,h_579,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/DC1.png"
            width="358"
            height="386"
            alt="Dan Castle"
          />
          <div id="main-text">
            <p id="first">
              I have been successfully applying UX design and research methods
              to product design for 30+ years (remote since 2005). I have
              significant expertise in usability engineering design strategy and
              methodology and have led teams at numerous Fortune 500 and smaller
              start-up companies to produce highly usable products.
            </p>
            <div class="two-grouped-elements">
              <p>
                With an M.S. degree in Human Factors Engineering (HCI focus), I
                have extensive experience in guiding teams to create a superb
                user experience.
              </p>
              <ol>
                <li>Collect & define user requirements</li>
                <li>Wireframe and mockup UI design alternatives</li>
                <li>Perform design trade-off analyses</li>
                <li>
                  Evaluate prototypes and released products via usability tests
                </li>
              </ol>
            </div>
            <p>
              I enjoy researching and designing products that support complex
              user tasks. I excel in leading small teams and teaching others
              about User-Centered-Design (UCD) methods, human factors, and
              usability. New domains that I have not yet worked in greatly
              interest me, as well as cross-device products.
            </p>
            <p>
              I encourage teams to follow UCD methods and enjoy leading both UX
              Research and UX Design efforts in a single project. I am a quick
              learner, creative, organized, process-orientated, consistent, and
              always striving to be proactive.
            </p>
          </div>
        </section>
        <hr />
        <section id="secondary-elements">
          <h2>Typical Deliverables</h2>
          <ul id="deliverables">
            <div>
              <li>User needs and requirements</li>
              <li>Task analysis & task flow diagrams</li>
              <li>Use model</li>
              <li>Tasks to features matrix (House of Quality)</li>
              <li>Navigational model (Wireframe)</li>
              <li>Customer profile (via survey data)</li>
              <li>User profiles and personas</li>
              <li>UCD process training classes</li>
              <li>Customer visit preparation classes</li>
            </div>
            <div>
              <li>UI design guidelines</li>
              <li>Wireframes</li>
              <li>Low to medium-fidelity Mockups (mainly Axure)</li>
              <li>Survey design</li>
              <li>Usability goals (set, measure & validate)</li>
              <li>Heuristic evaluations</li>
              <li>Cognitive walkthroughs</li>
              <li>Usability testing (formative & summative)</li>
              <li>Field evaluations</li>
            </div>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}

export function Head() {
  return (
    <>
      <html lang="en" />
      <body className="body" />
      <title>Dan Castle</title>
    </>
  );
}
