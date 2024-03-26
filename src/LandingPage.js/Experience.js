import React, { useState } from "react";
import "../Style/EXperience.css";
import MARSLOGO from "../Style/MARSLOGO.jpeg";
import Tequed2 from "../Style/Tequed2.jpg";
import tequedcerti from "../Style/tequedcerti.jpeg";
import intership from "../Style/intership.jpeg";

function Experience() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal1 = () => {
    setIsModalOpen1(true);
  };

  const closeModal1 = () => {
    setIsModalOpen1(false);
  };

  return (
    <div className="main">
      <p className="items-start">
        <h1 class="heading">Experience</h1>
      </p>
      <ul className="cards">
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img src={Tequed2} alt="Tequed2 " className="h-[26vh]" />
            </div>
            <div className="card_content">
              <h2 className="card_title">
                TEQUED LAB -<span>September-2023 to October-2023</span>
              </h2>
              <hr />
              <div className="card_text">
                <p>
                  <span className="span-green">
                    {" "}
                    Artifical Intelligence and Machine Learning
                  </span>
                </p>
                <p>
                  I specialize in Artificial Intelligence and Machine Learning,
                  with practical experience in analyzing Bengaluru house prices
                  during an internship.
                </p>
                <span
                  className="view-certificate cursor-pointer text-blue-500"
                  onClick={openModal}>
                  View Certificate
                </span>
              </div>
            </div>
          </div>
        </li>

        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img
                src={MARSLOGO}
                alt="MARSLOGO"
                className="h-[26vh] w-[500px]"
              />
            </div>

            <div className="card_content">
              <h2 className="card_title">
                MARSTRACK TECHNOLOGIES -<span>March-23 to July-23</span>
              </h2>
              <hr />{" "}
              <p>
                <span className="span-green">
                  Full stack web Development <span>(Intern)</span>
                </span>
              </p>
              <p>
                Skilled in React with internship experience, dedicated to
                crafting high-quality web applications for seamless user
                experiences.
              </p>
              <span
                className="view-certificate cursor-pointer text-blue-500"
                onClick={openModal1}>
                View Certificate
              </span>
            </div>
          </div>
        </li>

        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img
                src={MARSLOGO}
                alt="MARSLOGO"
                className="h-[26vh] w-[500px]"
              />
            </div>

            <div className="card_content">
              <h2 className="card_title">
                MARSTRACK TECHNOLOGIES -<span>July-23 </span>
              </h2>
              <hr />{" "}
              <p>
                <span className="span-green">
                  Full stack web Development <span>(Current)</span>
                </span>
              </p>
              <p>
                Currently working and skilled in CSS, HTML, React, JavaScript,
                Node.js, Redux, and Data Structures and Algorithms (DSA), with
                internship experience. Dedicated to crafting high-quality web
                applications for seamless user experiences.
              </p>
            </div>
          </div>
        </li>
      </ul>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-auto bg-gray-900 bg-opacity-50">
          <div className="relative bg-white max-w-md mx-auto p-8 rounded-lg shadow-lg">
            <img
              src={tequedcerti}
              alt="Tequed Certificate"
              className="w-full"
            />
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
      {isModalOpen1 && (
        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-auto bg-gray-900 bg-opacity-50">
          <div className="relative bg-white max-w-md mx-auto p-8 rounded-lg shadow-lg">
            <img src={intership} alt="Tequed Certificate" className="w-full" />
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              onClick={closeModal1}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Experience;
