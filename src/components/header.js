import React from "react";

const Header = () => {
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container">
        <div className="header-container d-flex align-items-center justify-content-between">
          <div className="logo">
            <h1 className="text-light">
              <a href="index.html">
                <h3>Debug Doodles</h3>
              </a>
            </h1>
            {/* Uncomment below if you prefer to use an image logo */}
            {/* <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#code-repo">
                  Code Repository
                </a>
              </li>
              <li>
                <a className="getstarted scrollto" href="#about">
                  Get Started
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
