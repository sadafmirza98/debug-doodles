import React from "react";
const PostCode = () => {
  return (
    <section id="post-code" className="post-code">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-title" data-aos="fade-right">
              <h2>Post Code</h2>
              <p style={{ fontSize: "20px" }}>
                Dive into the heart of your coding challenge by typing out a
                conscise problem statement. Once you've outlined the problem
                statement, share your ingenious solution. Then, with a simple
                click of the 'Publish' button, watch your solution come to life
                on Debug Doodle!
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-6 d-flex align-items-stretch">
                <div
                  className="icon-box"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="icon">
                    <i className="bx bx-file"></i>
                  </div>
                  <div className="form-group">
                    <label className="input-label" htmlFor="title">
                      Title:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      placeholder="Enter title"
                      required // Add required attribute for form validation
                    />
                  </div>
                  <div className="form-group">
                    <label className="input-label" htmlFor="description">
                      Description:
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      placeholder="Enter description"
                      required // Add required attribute for form validation
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label className="input-label" htmlFor="code">
                      Code:
                    </label>
                    <textarea
                      className="form-control"
                      id="code"
                      name="code"
                      placeholder="Enter code"
                      rows="2"
                    ></textarea>
                  </div>
                  <button className="button" type="submit">
                    PUBLISH
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PostCode;
