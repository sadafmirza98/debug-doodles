import React from "react";

const EditCode = ({ codeData, onDelete }) => {
  console.log("codeData", codeData);
  if (!codeData) {
    return <p>No code data available</p>;
  }

  const handleDelete = () => {
    // Call the onDelete function passed from the parent component
    if (onDelete) {
      onDelete(codeData.id); // Pass the id of the code to be deleted
    }
  };

  return (
    <section id="edit-code" className="post-code">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-title" data-aos="fade-right">
              <h2>Edit Code</h2>
              <p style={{ fontSize: "20px" }}>
                Make changes to existing codes, problem statements and make
                modifications with ease.
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
                      defaultValue={codeData.title} // Populate title field with existing data
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
                      defaultValue={codeData.description} // Populate description field with existing data
                      required
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
                      rows="6"
                      defaultValue={codeData.code} // Populate code field with existing data
                    ></textarea>
                  </div>
                  <button className="button" type="submit">
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
