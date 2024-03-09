import React from "react";

function Footer() {
  return (
    <footer id="footer">
      <div className="container d-md-flex py-4">
        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            <div className="credits">Designed by</div>
            <strong>
              <span>Sadaf Mirza</span>
            </strong>
            &copy; 2024 . All Rights Reserved
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="mailto:sadafmirza98@gmail.com">
            <i className="bi bi-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/sadaf-mirza/">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/sadafmirza98/">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.hackerrank.com/profile/sadafmirza98">
            <i className="bi bi-code-slash"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
