import React from "react";
import "./contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import StarLine from "../StarLine/starLine";
import Input from "../Input/index";

const Contact = () => {
  return (
    <div className="container p-5 " id="contact">
      <div className="row text-center">
        <h1>Contact Me</h1>
        <StarLine line="dark" text="dark" />
      </div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <Input label="Name" type="text" />
          <Input label="Email" type="Email" />
          <Input label="Phone Number" type="number" />
          <Input label="Message" type="textArea" />
          <button
            type="button"
            className="btn text-white shadow-none py-3 px-4"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
