import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use for redirection
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Sign Up
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // Only used in signup
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const baseUrl = "https://debug-doodles-default-rtdb.firebaseio.com/users"; // Firebase Realtime DB URL

  const handleToggle = () => {
    setIsLogin((prev) => !prev);
    setError(""); // Reset error message when toggling
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      if (isLogin) {
        // Login Logic: Check email and password against Firebase Realtime Database
        const response = await fetch(`${baseUrl}.json`);
        const data = await response.json();

        if (data) {
          let userFound = false;
          for (let key in data) {
            const user = data[key];
            if (user.email === email && user.password === password) {
              userFound = true;
              onLogin(); // Set the user as logged in
              toast.success("User logged in successfully!");
              navigate("/dashboard"); // Redirect to dashboard or home page
              break;
            }
          }

          if (!userFound) {
            setError("Invalid email or password");
          }
        } else {
          setError("No users found in the database.");
        }
      } else {
        // Sign-Up Logic: Check if email already exists and create new user
        const response = await fetch(`${baseUrl}.json`);
        const data = await response.json();

        if (data) {
          let emailExists = false;
          for (let key in data) {
            if (data[key].email === email) {
              emailExists = true;
              break;
            }
          }

          if (emailExists) {
            setError("Email already exists. Please log in.");
          } else {
            // Create new user and save to the Firebase Realtime Database
            const newUser = {
              email: email,
              password: password,
              username: username,
              codes: [], // Initialize with empty codes
            };

            // Post new user data to Firebase Realtime Database
            const postResponse = await fetch(`${baseUrl}.json`, {
              method: "POST",
              body: JSON.stringify(newUser),
              headers: {
                "Content-Type": "application/json",
              },
            });

            if (postResponse.ok) {
              onLogin(); // Set the user as logged in
              toast.success("User logged in successfully!");
              navigate("/dashboard"); // Redirect to dashboard or home page
            } else {
              setError("Error creating user. Please try again.");
            }
          }
        } else {
          setError("Error reading users from the database.");
        }
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <section id="login-signup" className="post-code">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-title" data-aos="fade-right">
              <h2>{isLogin ? "Login" : "Sign Up"}</h2>
              <p style={{ fontSize: "20px" }}>
                {isLogin
                  ? "Welcome back! Please login to access your account and explore our features."
                  : "Join Debug Doodle to share your coding challenges and solutions with the community!"}
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="form-group">
                  <label className="input-label" htmlFor="username">
                    Username:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    required
                  />
                </div>
              )}
              <div className="form-group">
                <label className="input-label" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label className="input-label" htmlFor="password">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button className="button" type="submit">
                {isLogin ? "LOGIN" : "SIGN UP"}
              </button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="text-center mt-3">
              <p>
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}{" "}
                <button
                  className="toggle-button"
                  type="button"
                  onClick={handleToggle}
                >
                  {isLogin ? "Sign Up" : "Login"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;
