import React from "react";
import "./starLine.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default function StarLine(props) {
  return (
    <div className="w-100 d-flex  justify-content-center">
      <div
        className={`
      star rounded ${props.line === "dark" ? "bg-dark" : "bg-light"}
      `}
      >
        <i
          className={`
        fa-solid fa-star
        ${props.text === "dark" ? "text-dark bg-light" : "text-white"}
        `}
        ></i>
      </div>
    </div>
  );
}
