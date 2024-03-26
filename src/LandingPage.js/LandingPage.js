import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./SideBar";
import Intro from "./Intro";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Contact from "./Contact";
function LandingPage() {
  return (
    <div>
      <>
        <Navbar />
      </>

      <>
        <Intro />
      </>
      <>
        <Experience />
      </>
      <>
        <Skills />
      </>
      <>
        <Education />
      </>
      <>
        <Contact />
      </>
    </div>
  );
}

export default LandingPage;
