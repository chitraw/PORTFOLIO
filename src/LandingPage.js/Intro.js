import React from "react";
import "../Style/Navbar.css";
import { Link } from "react-scroll";
import hireme from "../Style/hireme.jpeg";
import bgPhoto from "../Style/bgPhoto.png";

function Intro() {
  return (
    <section id="intro">
      <div className="introcontent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm<span className="introName"> Chitra </span>
          <br />
          Full Stack Developer
        </span>
        <p className="intoPara">
          Boosting Innovation with Smart Design, Quick Development, and a
          Competitive Edge: <br />
          Using Coding Skills to Drive Technology Forward with Passion and
          Precision.{" "}
        </p>
        <p className="flex align-center gap-4">
          <Link>
            {" "}
            <button className="btn">
              <img src={hireme} alt="hireme" className="btnImg"></img>Hire Me!
            </button>
          </Link>
          <Link>
            {" "}
            <button className="btn">
              <img src={hireme} alt="hireme" className="btnImg"></img>Download
              Resume!
            </button>
          </Link>
        </p>
      </div>
      <img src={bgPhoto} alt="bgPhoto" className="bg"></img>
    </section>
  );
}

export default Intro;
