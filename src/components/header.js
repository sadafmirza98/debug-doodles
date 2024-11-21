import React, { useEffect, useState } from "react";

const Header = ({ isUserLoggedIn, onLogout }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false); // State to toggle dropdown visibility

  const handleProfileClick = () => {
    // Toggle the dropdown visibility when the profile is clicked
    setDropdownVisible((prev) => !prev);
  };

  const handleLogout = () => {
    onLogout(); // Call the logout function passed via props
    setDropdownVisible(false); // Close the dropdown after logout
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("#header");
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add("header-scrolled");
        } else {
          header.classList.remove("header-scrolled");
        }
      }

      const position = window.scrollY + 200;
      const navbarLinks = document.querySelectorAll("#navbar .scrollto");
      navbarLinks.forEach((link) => {
        if (!link.hash) return;
        const section = document.querySelector(link.hash);
        if (section) {
          if (
            position >= section.offsetTop &&
            position <= section.offsetTop + section.offsetHeight
          ) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container">
        <div className="header-container d-flex align-items-center justify-content-between">
          <div className="logo">
            <h1 className="text-light">
              <a href="#home">
                <h3>Debug Doodles</h3>
              </a>
            </h1>
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
              {isUserLoggedIn && (
                <>
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
                </>
              )}
              {!isUserLoggedIn ? (
                <li>
                  <a className="getstarted scrollto" href="#login-signup">
                    Get Started
                  </a>
                </li>
              ) : (
                <li className="profile-dropdown">
                  <a href="#profile" onClick={handleProfileClick}>
                    <i className="bi bi-person-circle"></i> Profile
                  </a>
                  {dropdownVisible && (
                    <ul className="dropdown-menu">
                      <li>
                        <button
                          onClick={handleLogout}
                          className="dropdown-item"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  )}
                </li>
              )}
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
