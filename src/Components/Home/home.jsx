import React from "react";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import StarLine from "../StarLine/starLine";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="w-100 vh-100 hero overflow-hidden d-flex justify-content-center align-items-center"
      >
        <div className="row  justify-content-center align-items-center text-center">
          <img className="my-5" src="avataaars.svg" alt="" />
          <h1>simple portfolio</h1>
          <StarLine line="light" text="light" />
          <p className="text-white fs-4">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
