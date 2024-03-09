import React, { useState, useEffect } from "react";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleBackToTop = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleBackToTop);

    return () => {
      window.removeEventListener("scroll", toggleBackToTop);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`d-flex align-items-center justify-content-center back-to-top ${
        isVisible ? "active" : ""
      }`}
      onClick={scrollToTop}
    >
      <i className="bi bi-arrow-up-short"></i>
    </button>
  );
}

export default BackToTop;
