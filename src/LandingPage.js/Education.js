import React from "react";
import "../Style/Education.css";
import { FaArrowRight } from "react-icons/fa";

function Education() {
  return (
    <div className="body">
      <p>
        <h1>Education</h1>
      </p>
      <section className="section">
        <div className="card1">
          <h2>Christ School</h2>
          <p>Percentage : 86%</p>
          <p>Bengaluru-29</p>
        </div>
        <FaArrowRight className="arrow" />
        <div className="card1">
          <h2>Christ PU Colege</h2>
          <p>Course : PCMB</p>
          <p>Percentage : 81%</p>
          <p>Bengaluru-29</p>
        </div>
        <FaArrowRight className="arrow" />
        <div className="card1">
          <h2>AMC Engineering Colege</h2>
          <p>Course : CSE</p>
          <p>CGPA : 8.56</p>
          <p>Bengaluru-29</p>
        </div>
      </section>
    </div>
  );
}

export default Education;
