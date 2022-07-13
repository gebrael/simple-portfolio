import React, { useState } from "react";
import "./nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg  text-uppercase fixed-top py-4">
        <div className="container justify-content-between">
          <a className="navbar-brand text-white fw-bold fs-2" href="#home">
            Simple Portfolio
          </a>

          <button
            className="navbar-toggler menu-btn py-2 px-3 shadow-none"
            type="button"
            onClick={handleClick}
          >
            {open ? (
              <span className="d-flex align-items-center ">
                <p className="fs-6 mb-0 me-2">close</p>
                <i className="fas fa-times  text-white"></i>
              </span>
            ) : (
              <span className="d-flex align-items-center ">
                <p className="fs-6 mb-0 me-2">Menu</p>
                <i className="fas fa-bars text-white"></i>
              </span>
            )}
          </button>
          {open && (
            <div className="position-relative test w-100">
              <ul className=" mt-3 nav-sm">
                <li className="nav-item">
                  <a
                    className="nav-link text-white fw-bold fs-6"
                    href="#portfolio"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white fw-bold fs-6" href="#about">
                    about
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white fw-bold fs-6"
                    href="#contact"
                  >
                    contact
                  </a>
                </li>
              </ul>

              <i
                class="fa-solid fa-angles-up up-icon text-white"
                onClick={handleClick}
              ></i>
            </div>
          )}

          <ul className="nav d-none d-sm-flex">
            <li className="nav-item">
              <a className="nav-link text-white fw-bold fs-6" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-bold fs-6" href="#about">
                about
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-bold fs-6" href="#contact">
                contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
