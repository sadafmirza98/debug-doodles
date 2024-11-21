import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter to enable routing
import Header from "./components/header";
import Home from "./components/home";
import MainBody from "./components/mainBody/mainBody";
import Footer from "./components/footer";
import BackToTop from "./components/backToTop";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [loggedInUserId, setLoggedInUserId] = useState(null); // Add state for logged-in user ID

  const handleLogin = (userId) => {
    setIsUserLoggedIn(true);
    setLoggedInUserId(userId); // Set the logged-in user ID
  };

  const handleLogout = () => {
    setIsUserLoggedIn(false);
    setLoggedInUserId(null); // Clear the logged-in user ID
  };

  return (
    <Router>
      <div>
        <Header isUserLoggedIn={isUserLoggedIn} onLogout={handleLogout} />
        <Home />
        <MainBody
          isUserLoggedIn={isUserLoggedIn}
          loggedInUserId={loggedInUserId}
          onLogin={handleLogin}
          onLogout={handleLogout}
        />
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
