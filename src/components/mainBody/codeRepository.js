import React, { useState, useEffect } from "react";
import EditCode from "./editCode";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CodeRepository = ({ loggedInUserId, handleCodePosted }) => {
  const baseUrl = `https://debug-doodles-default-rtdb.firebaseio.com/users/${loggedInUserId}/code-repo`;

  const [editMode, setEditMode] = useState(false);
  const [selectedCode, setSelectedCode] = useState(null);
  const [codes, setCodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleIconBoxClick = (code) => {
    setSelectedCode(code);
    setEditMode(true);
  };

  useEffect(() => {
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

    if (handleCodePosted) {
      fetchData();
    }
  }, [baseUrl, handleCodePosted]);

  const handleDeleteCode = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/${id}.json`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete code");
      }
      toast.success("Code deleted successfully!");
      setCodes(codes.filter((code) => code.id !== id));
      setEditMode(false); // Exit edit mode after deleting
    } catch (error) {
      toast.error("Error deleting the code.");
    }
  };

  const handleUpdateCode = async (id, updatedData) => {
    try {
      const response = await fetch(`${baseUrl}/${id}.json`, {
        method: "PATCH",
        body: JSON.stringify(updatedData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to update code");
      }
      setCodes(
        codes.map((code) =>
          code.id === id ? { ...code, ...updatedData } : code
        )
      );
      setEditMode(false); // Exit edit mode after updating
      toast.success("Code updated successfully!");
    } catch (error) {
      toast.error("Error while updating code");
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
              {codes.length > 0 ? (
                codes.map((code, index) => (
                  <div
                    key={index}
                    className="col-6 col-md-6 col-lg-6 d-flex align-items-stretch mt-4 mt-lg-0"
                  >
                    <div
                      className="icon-box mt-4"
                      style={{ minWidth: "25vw" }}
                      data-aos="zoom-in"
                      data-aos-delay={100 * index}
                      onClick={() => handleIconBoxClick(code)}
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
      <ToastContainer />
    </section>
  );
};

export default CodeRepository;
