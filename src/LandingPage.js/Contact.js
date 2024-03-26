import React from "react";
import "../Style/Contac.css";

function Contact() {
  return (
    <div>
      <section id="contact">
        <h1 class="section-header">Contact</h1>

        <div class="contact-wrapper">
          <form id="contact-form" role="form">
            <div className="m-[10px]">
              <input
                placeholder="Name"
                className="rounded-sm border border-red-500  w-[400px] p-1"></input>
            </div>

            <div className="m-[10px]">
              <input
                placeholder="Email"
                className="rounded-sm border border-red-500  w-[400px] p-1"></input>
            </div>
            <div className="m-[10px]">
              <textarea
                className="rounded-sm border border-red-500 w-[400px] p-1"
                rows="10"
                placeholder="MESSAGE"
                name="message"
                required></textarea>
            </div>
            <button
              class="btn btn-primary send-button"
              id="submit"
              type="submit"
              value="SEND">
              <div class="alt-send-button">
                <i class="fa fa-paper-plane"></i>
                <span class="send-text">SEND</span>
              </div>
            </button>
          </form>

          <div class="direct-contact-container">
            <ul class="contact-list">
              <li class="list-item">
                <i class="fa fa-map-marker fa-2x">
                  <span class="contact-text place">City, Bangalor-29</span>
                </i>
              </li>

              <li class="list-item">
                <i class="fa fa-phone fa-2x">
                  <span class="contact-text phone">
                    <a href="tel:1-212-555-5555" title="Give me a call">
                      6362897554
                    </a>
                  </span>
                </i>
              </li>

              <li class="list-item">
                <i class="fa fa-envelope fa-2x">
                  <span class="contact-text gmail">
                    <a href="mailto:#" title="Send me an email">
                      chitraameneni03@gmail.com
                    </a>
                  </span>
                </i>
              </li>
            </ul>

            <hr />
            <ul class="social-media-list">
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <i class="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <i class="fa fa-codepen" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
            <hr />

            <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
