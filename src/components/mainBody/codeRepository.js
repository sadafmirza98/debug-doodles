import React from "react";

const CodeRepository = () => {
  // Array of objects containing data for each box
  const iconBoxes = [
    {
      iconClass: "bx bxl-dribbble",
      title: "Lorem Ipsum",
      description:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
    },
    {
      iconClass: "bx bx-file",
      title: "Sed ut perspiciatis",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    },
    {
      iconClass: "bx bx-tachometer",
      title: "Magni Dolores",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
    },
    {
      iconClass: "bx bx-world",
      title: "Nemo Enim",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    },
  ];

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
              {iconBoxes.length > 0 ? (
                iconBoxes.map((box, index) => (
                  <div
                    key={index}
                    className="col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
                  >
                    <div
                      className="icon-box mt-4"
                      data-aos="zoom-in"
                      data-aos-delay={100 * index}
                    >
                      <div className="icon">
                        <i className="bi bi-file-earmark-code"></i>
                      </div>
                      <h4>
                        <a href="">{box.title}</a>
                      </h4>
                      <p>{box.description}</p>
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
    </section>
  );
};

export default CodeRepository;
