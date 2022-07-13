import React from "react";
import "./portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import StarLine from "../StarLine/starLine";

const Portfolio = () => {
  return (
    <>
      <div className="container py-5" id="portfolio">
        <div className="row justify-content-center">
          <div className="col-md-12 d-flex justify-content-center align-items-center flex-column  m-5">
            <h1>Portfolio</h1>
            <StarLine line="dark" text="dark" />
          </div>
        </div>
        <div className="row ">
          <div className="col-md-4  mb-5 px-4  overflow-hidden position-relative">
            <div className="card-container">
              <img src="1.png" className="w-100 " />
              <div className="layer">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>

          <div className="col-md-4  mb-5 px-4  overflow-hidden position-relative">
            <div className="card-container">
              <img src="2.png" className="w-100 " />
              <div className="layer">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>

          <div className="col-md-4  mb-5 px-4  overflow-hidden position-relative">
            <div className="card-container">
              <img src="3.png" className="w-100 " />
              <div className="layer">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>

          <div className="col-md-4  mb-5 px-4  overflow-hidden position-relative">
            <div className="card-container">
              <img src="4.png" className="w-100 " />
              <div className="layer">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>

          <div className="col-md-4  mb-5 px-4  overflow-hidden position-relative">
            <div className="card-container">
              <img src="5.png" className="w-100 " />
              <div className="layer">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>

          <div className="col-md-4  mb-5 px-4  overflow-hidden position-relative">
            <div className="card-container">
              <img src="6.png" className="w-100 " />
              <div className="layer">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
