import React from "react";

function Skills() {
  return (
    <section>
      <p className="">
        <h1 class="heading">My Skills</h1>
      </p>
      <div className="block lg:flex justify-center gap-[10px]">
        <div className="lg:w-[500px] w-[300px]  ">
          <li className="m-[20px]">
            <h3>HTML</h3>
            <span class="bar">
              <span class="html"></span>
            </span>
          </li>

          <li className="m-[20px]">
            <h3>CSS</h3>
            <span class="bar">
              <span class="css"></span>
            </span>
          </li>

          <li className="m-[20px]">
            <h3>JAVASCRIPT</h3>
            <span class="bar">
              <span class="javascript"></span>
            </span>
          </li>
          <li className="m-[20px]">
            <h3>SQL</h3>
            <span class="bar">
              <span class="sql"></span>
            </span>
          </li>

          <li className="m-[20px]">
            <h3>JQUERY</h3>
            <span class="bar">
              <span class="jquery"></span>
            </span>
          </li>
          <li className="m-[20px]">
            <h3>TYPESCRIPT</h3>
            <span class="bar">
              <span class="typescript"></span>
            </span>
          </li>
        </div>
        <div className="lg:w-[500px] w-[300px]  ">
          <li className="m-[20px]">
            <h3>GIT</h3>
            <span class="bar">
              <span class="git"></span>
            </span>
          </li>
          <li className="m-[20px]">
            <h3>DSA</h3>
            <span class="bar">
              <span class="dsa"></span>
            </span>
          </li>
          <li className="m-[20px]">
            <h3>NODE JS</h3>
            <span class="bar">
              <span class="node"></span>
            </span>
          </li>
          <li className="m-[20px]">
            <h3>NEXT JS</h3>
            <span class="bar">
              <span class="next"></span>
            </span>
          </li>
          <li className="m-[20px]">
            <h3>EXPRESS JS</h3>
            <span class="bar">
              <span class="dsa"></span>
            </span>
          </li>
          <li className="m-[20px]">
            <h3> MONGO DB</h3>
            <span class="bar">
              <span class="mongo"></span>
            </span>
          </li>
        </div>
      </div>
    </section>
  );
}

export default Skills;
