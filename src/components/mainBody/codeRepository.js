import React, { useState, useEffect } from "react";
import EditCode from "./editCode"; // Import your EditCode component

const CodeRepository = () => {
  const baseUrl = "https://debug-doodles-default-rtdb.firebaseio.com/code-repo";

  const [editMode, setEditMode] = useState(false);
  const [selectedCode, setSelectedCode] = useState(null);
  const [codes, setCodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleIconBoxClick = (code) => {
    setSelectedCode(code);
    setEditMode(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}.json`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      const codesArray = Object.keys(data || {}).map((key) => ({
        id: key,
        ...data[key],
      }));
      setCodes(codesArray);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteCode = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/${id}.json`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete code");
      }
      // Remove the deleted code from the codes state
      setCodes(codes.filter((code) => code.id !== id));
      setEditMode(false); // Exit edit mode after deleting
    } catch (error) {
      console.error("Error deleting code:", error);
    }
  };

  const handleUpdateCode = async (id, updatedData) => {
    try {
      const response = await fetch(`${baseUrl}/${id}.json`, {
        method: "PATCH", // Use PATCH method for partial updates
        body: JSON.stringify(updatedData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to update code");
      }
      // Update the code in the codes state with the updated data
      setCodes(
        codes.map((code) =>
          code.id === id ? { ...code, ...updatedData } : code
        )
      );
      setEditMode(false); // Exit edit mode after updating
    } catch (error) {
      console.error("Error updating code:", error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section id="code-repo" className="code-repo">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-title" data-aos="fade-right">
              <h2>Code Repository</h2>
              <p style={{ fontSize: "20px" }}>
                Browse the Coding Listings to explore a variety of coding
                solutions and projects submitted by our community
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              {/* Map over the array of icon boxes */}
              {codes.length > 0 ? (
                codes.map((code, index) => (
                  <div
                    key={index}
                    className="col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
                  >
                    <div
                      className="icon-box mt-4"
                      style={{ minWidth: "25vw" }}
                      data-aos="zoom-in"
                      data-aos-delay={100 * index}
                      onClick={() => handleIconBoxClick(code)} // Pass the code data to handleIconBoxClick
                      key={code.id}
                    >
                      <a href="#edit-code">
                        <div className="icon">
                          <i className="bi bi-file-earmark-code"></i>
                        </div>
                        <h4 style={{ color: "black" }}>{code.title}</h4>
                        <p style={{ color: "black" }}>{code.description}</p>
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center">
                  <p>
                    No codes available at the moment. Start sharing your
                    brilliant solutions!
                  </p>
                  <a href="#post-code" className="button">
                    PUBLISH NEW CODE
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {editMode && (
        <EditCode
          codeData={selectedCode}
          onDelete={handleDeleteCode}
          onUpdate={handleUpdateCode}
        />
      )}
    </section>
  );
};

export default CodeRepository;
