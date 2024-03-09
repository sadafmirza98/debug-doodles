import React from "react";

function Home() {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container text-center position-relative"
        data-aos="fade-in"
        data-aos-delay="200"
      >
        <h1>Your one-stop solution</h1>
        <h2>for managing code snippets</h2>
        <a href="#about" className="btn-get-started scrollto">
          Get Started
        </a>
      </div>
    </section>
  );
}

export default Home;
