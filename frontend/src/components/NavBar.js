import React from "react";
import "./style/nav.css";

function NavBar() {
  return (
    <>
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>Course</li>
          <li>About Us</li>
          <li>Contact Me</li>
        </ul>
        <ul>
          <li>Dashbord</li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
