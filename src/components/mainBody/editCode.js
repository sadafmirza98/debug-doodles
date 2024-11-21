import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import "@fortawesome/fontawesome-free/css/all.min.css";

const EditCode = ({ codeData, onDelete, onUpdate }) => {
  const [code, setCode] = useState(codeData?.code || "");

  const handleUpdate = () => {
    const updatedData = {
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      code: code,
    };

    if (onUpdate) {
      onUpdate(codeData.id, updatedData);
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(codeData.id);
    }
  };

  if (!codeData) {
    return <p>No code data available</p>;
  }

  return (
    <section id="edit-code" className="post-code">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-title" data-aos="fade-right">
              <h2>Edit Code</h2>
              <p style={{ fontSize: "20px" }}>
                Make changes to existing codes, problem statements, and modify
                with ease.
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
                    <i className="bx bxs-edit"></i>
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
                      defaultValue={codeData.title}
                      required
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
                      defaultValue={codeData.description}
                      required
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label className="input-label" htmlFor="code">
                      Code:
                      <div className="info-icon-wrapper">
                        <i
                          className="fa-solid fa-circle-info info-icon"
                          data-tooltip="This IDE currently only supports JavaScript."
                        ></i>
                      </div>
                    </label>
                    <CodeMirror
                      value={code}
                      extensions={[javascript()]}
                      theme={oneDark}
                      height="150px"
                      onChange={(value) => setCode(value)}
                    />
                  </div>
                  <button
                    className="button"
                    type="submit"
                    onClick={handleUpdate}
                  >
                    UPDATE
                  </button>
                  <button className="button" onClick={handleDelete}>
                    DELETE
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

export default EditCode;
