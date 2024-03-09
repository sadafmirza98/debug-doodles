import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="row content">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h2>What is Debug Doodle?</h2>
              <h3>
                Debug Doodle is a straightforward code dumping website designed
                for developers who need a fast and efficient way to share code
                snippets and find solutions.
              </h3>
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <p>Debug Doodle is as simple as 1-2-3.</p>
              <ul>
                <li>
                  <i className="ri-check-double-line"></i>{" "}
                  <strong>Navigate to the 'Post Code' Section: </strong>Enter
                  your 'Problem Statement' and fill in the details.Share your
                  ingenious solution and watch your solution come to life on
                  Debug Doodle!
                </li>
                <li>
                  <i className="ri-check-double-line"></i>{" "}
                  <strong>Navigate to the 'Code Repository' section: </strong>
                  Checkout different problems and their solutions posted by
                  other users.
                </li>
                <li>
                  <i className="ri-check-double-line"></i>{" "}
                  <strong>Connect with me: </strong>
                  Share your code, feedback and insights with me. Join our
                  coders community.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="why-us" className="why-us">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 d-flex align-items-stretch"
              data-aos="fade-right"
            >
              <div className="content">
                <h3>Did you happen to know ?</h3>
                <p>
                  In the early days of computing, computer programmers were
                  often referred to as 'hackers.' However, far from its modern
                  connotation, being called a hacker was a badge of honor,
                  indicating someone who was skilled at tinkering with complex
                  systems to make them work in unconventional ways. Today,
                  hacking has evolved into a broader term, encompassing both
                  ethical and unethical practices in the digital realm.
                </p>
                <div className="text-center">
                  <a href="www.google.com" className="more-btn">
                    Learn More <i className="bx bx-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-flex align-items-stretch">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <div
                    className="col-xl-4 d-flex align-items-stretch"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-receipt"></i>
                      <h4>Post Code</h4>
                      <p>
                        Submit Your Coding Challenge and Share its Solution with
                        the community.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 d-flex align-items-stretch"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-cube-alt"></i>
                      <h4>Explore Code Repository</h4>
                      <p>
                        Browse the Coding Listings to explore a variety of
                        coding solutions and projects submitted by our
                        community.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 d-flex align-items-stretch"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-images"></i>
                      <h4>Connect with the community</h4>
                      <p>
                        Engage with the community to collaborate, share
                        knowledge, and build connections with fellow coding
                        enthusiasts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
