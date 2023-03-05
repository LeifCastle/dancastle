import React from "react";
import "./styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <div id="left-content">
        <div id="dcLogo">
          <p id="dcLogo-text">DC</p>
        </div>
        <small>&copy; 2019 by The Human Factor</small>
      </div>
      <div id="right-content">
        <img
          id="Link"
          width="38px"
          height="38px"
          src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
          alt="logo"
        />
        <img
          width="28px"
          height="28px"
          src="https://cdn-icons-png.flaticon.com/512/1346/1346836.png"
          alt="logo"
        />
        <img
          width="28px"
          height="28px"
          src="https://cdn-icons-png.flaticon.com/512/3194/3194367.png"
          alt="logo"
        />
      </div>
    </footer>
  );
}
