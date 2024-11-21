import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

const PostCode = ({ loggedInUserId, onCodePosted }) => {
  const baseUrl = `https://debug-doodles-default-rtdb.firebaseio.com/users/${loggedInUserId}/code-repo`;

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    code: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
  });

  const [output, setOutput] = useState(""); // To store the output of executed code

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
        await response.json();
        onCodePosted();

        // Reset the form after successful submission
        setFormData({ title: "", description: "", code: "" });

        toast.success("Code posted successfully!");
      }
    } catch (error) {
      console.error("Error creating data:", error);
      toast.error("Error while posting code");
    }
  };

  const runCode = () => {
    try {
      // Run the code and capture the output
      const result = eval(formData.code);
      setOutput(result || "Code executed successfully (no output)");
    } catch (error) {
      setOutput(`Error: ${error.message}`);
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
                concise problem statement. Once you've outlined the problem
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
                      required
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
                      required
                    ></textarea>
                    {errors.description && (
                      <div className="error-text">{errors.description}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="input-label" htmlFor="code">
                      Code:{" "}
                      <div className="info-icon-wrapper">
                        <i
                          className="fa-solid fa-circle-info info-icon"
                          data-tooltip="This IDE currently only supports JavaScript."
                        ></i>
                      </div>
                    </label>
                    <CodeMirror
                      value={formData.code}
                      extensions={[javascript()]}
                      theme={oneDark}
                      height="150px"
                      onChange={(value) =>
                        setFormData({ ...formData, code: value })
                      }
                    />
                  </div>
                  <button className="button" type="button" onClick={runCode}>
                    RUN
                  </button>
                  <button className="button" type="button" onClick={postData}>
                    PUBLISH
                  </button>
                  <div className="output">
                    <h5>Output:</h5>
                    <pre>{output}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default PostCode;
