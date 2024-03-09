import React, { useState } from "react";

const PostCode = () => {
  const baseUrl = "https://debug-doodles-default-rtdb.firebaseio.com/code-repo";

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    code: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when input changes
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const postData = async () => {
    try {
      if (validateForm()) {
        const response = await fetch(`${baseUrl}.json`, {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to create data entry");
        }
        const data = await response.json();
        console.log("Data created successfully:", data);
        // Handle success response here
      }
    } catch (error) {
      console.error("Error creating data:", error);
      // Handle error here
    }
  };
  return (
    <section id="post-code" className="post-code">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-title" data-aos="fade-right">
              <h2>Post a New Code</h2>
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
                      value={formData.title}
                      placeholder="Enter title"
                      onChange={handleChange}
                      required // Add required attribute for form validation
                    />
                    {errors.title && (
                      <div className="error-text">{errors.title}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="input-label" htmlFor="description">
                      Description:
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      value={formData.description}
                      placeholder="Enter description"
                      onChange={handleChange}
                      required // Add required attribute for form validation
                    ></textarea>
                    {errors.description && (
                      <div className="error-text">{errors.description}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="input-label" htmlFor="code">
                      Code:
                    </label>
                    <textarea
                      className="form-control"
                      id="code"
                      name="code"
                      value={formData.code}
                      placeholder="Enter code"
                      rows="2"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button className="button" type="button" onClick={postData}>
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
