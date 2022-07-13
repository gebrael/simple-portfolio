import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

const Index = () => {
  return (
    <div className="mt-5 mb-0 w-100 text-center">
      <div className="footer row m-0 justify-content-center">
        <div className="col-md-3 mb-5 mb-md-0 d-flex flex-column justify-content-between">
          <h2 className="mb-4 fw-bolder fs-1">LOCATION</h2>
          <>
            <p className="mb-1 fw-bolder fs-5">2215 John Daniel Drive</p>
            <p className="mb-1 fw-bolder fs-5">Clark, MO 65243</p>
          </>
        </div>

        <div className="col-md-3 mb-5 mb-md-0 d-flex flex-column justify-content-between">
          <h2 className="mb-4 fw-bolder fs-1">AROUND THE WEB</h2>
          <div className="d-flex justify-content-center">
            <div className="icon ">
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div className="icon">
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div className="icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
            <div className="icon me-0">
              <i className="fa-brands fa-dribbble"></i>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-5 mb-md-0 d-flex flex-column justify-content-between">
          <h2 className="mb-4 fw-bolder fs-1">ABOUT FREELANCER</h2>
          <p className="mb-1 fw-bolder fs-5">Freelance is a free to use,</p>
          <p className="mb-1 fw-bolder fs-5">
            MIT licensed Bootstrap theme created by Route
          </p>
        </div>
      </div>

      <div className="Copyright py-5">
        <p className="mb-0">Copyright © Your Website 2021</p>
      </div>
    </div>
  );
};

export default Index;
