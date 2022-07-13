import React from "react";
import "./about.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import StarLine from "../StarLine/starLine";

export default function about() {
  return (
    <>
      <div
        id="about"
        className="w-100 hero py-5 overflow-hidden d-flex justify-content-center align-items-center flex-column"
      >
        <div className="py-5 text-center position-relative">
          <h1>about</h1>
          <StarLine line="light" text="light" />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-4 px-5 text-start">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-4 px-5 text-start">
                <p>
                  You can create your own custom avatar for the masthead, change
                  the icon in the dividers, and add your email address to the
                  contact form to make it fully functional!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
