import React, { useState } from "react";
import CodeRepository from "./codeRepository";
import Cta from "./cta";
import PostCode from "./postCode";
import About from "./about";
import Login from "./login";

function MainBody({ isUserLoggedIn, loggedInUserId, onLogin, onLogout }) {
  // eslint-disable-next-line no-unused-vars
  const [codes, setCodes] = useState([]);

  // Function to trigger the refresh of the code list
  const handleCodePosted = () => {
    console.log("Refreshing the code list...");
    // Fetch the updated list of codes after posting
    fetchData();
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://debug-doodles-default-rtdb.firebaseio.com/users/${loggedInUserId}/code-repo.json`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch codes");
      }
      const data = await response.json();
      const codesArray = Object.keys(data || {}).map((key) => ({
        id: key,
        ...data[key],
      }));
      setCodes(codesArray);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <main id="main">
      <About />
      {!isUserLoggedIn ? (
        <Login onLogin={onLogin} />
      ) : (
        <>
          <CodeRepository
            loggedInUserId={loggedInUserId}
            handleCodePosted={handleCodePosted} // Pass this function down to CodeRepository
          />
          <PostCode
            loggedInUserId={loggedInUserId}
            onCodePosted={handleCodePosted} // Pass this function down to PostCode
          />
        </>
      )}
      <Cta />
    </main>
  );
}

export default MainBody;
