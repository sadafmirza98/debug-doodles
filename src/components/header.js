import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const navbarlinksActive = () => {
      let position = window.scrollY + 200;
      const navbarlinks = document.querySelectorAll("#navbar .scrollto");
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        let section = document.querySelector(navbarlink.hash);
        if (!section) return;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarlink.classList.add("active");
        } else {
          navbarlink.classList.remove("active");
        }
      });
    };

    /*     const scrollto = (el) => {
      let header = document.querySelector("#header");
      let offset = header.offsetHeight;

      let elementPos = document.querySelector(el).offsetTop;
      window.scrollTo({
        top: elementPos - offset,
        behavior: "smooth",
      });
    }; */

    const selectHeader = document.querySelector("#header");
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };

    window.addEventListener("load", navbarlinksActive);
    window.addEventListener("load", headerScrolled);
    window.addEventListener("scroll", navbarlinksActive);
    window.addEventListener("scroll", headerScrolled);

    return () => {
      window.removeEventListener("load", navbarlinksActive);
      window.removeEventListener("load", headerScrolled);
      window.removeEventListener("scroll", navbarlinksActive);
      window.removeEventListener("scroll", headerScrolled);
    };
  }, []);
  useEffect(() => {
    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };

    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all);
      if (selectEl) {
        if (all) {
          selectEl.forEach((e) => e.addEventListener(type, listener));
        } else {
          selectEl.addEventListener(type, listener);
        }
      }
    };

    const onscroll = (el, listener) => {
      el.addEventListener("scroll", listener);
    };

    const headerScrolled = () => {
      let selectHeader = select("#header");
      if (selectHeader) {
        if (window.scrollY > 100) {
          selectHeader.classList.add("header-scrolled");
        } else {
          selectHeader.classList.remove("header-scrolled");
        }
      }
    };

    const mobileNavToggle = (e) => {
      select("#navbar").classList.toggle("navbar-mobile");
      e.target.classList.toggle("bi-list");
      e.target.classList.toggle("bi-x");
    };

    const mobileNavDropdownsActivate = (e) => {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        e.target.nextElementSibling.classList.toggle("dropdown-active");
      }
    };

    const scrollToElement = (e) => {
      if (select(e.target.hash)) {
        e.preventDefault();
        let navbar = select("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        let hash = e.target.hash;
        window.scrollTo({
          top: select(hash).offsetTop - select("#header").offsetHeight,
          behavior: "smooth",
        });
      }
    };

    const scrollToHashLink = () => {
      if (window.location.hash) {
        let hash = window.location.hash;
        if (select(hash)) {
          window.scrollTo({
            top: select(hash).offsetTop - select("#header").offsetHeight,
            behavior: "smooth",
          });
        }
      }
    };

    headerScrolled();
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);

    on("click", ".mobile-nav-toggle", mobileNavToggle);
    on("click", ".navbar .dropdown > a", mobileNavDropdownsActivate, true);
    on("click", ".scrollto", scrollToElement, true);
    window.addEventListener("load", scrollToHashLink);

    return () => {
      window.removeEventListener("load", headerScrolled);
      window.removeEventListener("load", scrollToHashLink);
      window.removeEventListener("scroll", headerScrolled);
    };
  }, []);

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
                <a className="nav-link scrollto active" href="#home">
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
                <a className="nav-link scrollto" href="#post-code">
                  Post Code
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
