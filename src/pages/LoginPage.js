import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../styles/auth.css";

const LoginPage = () => {
  const [email, setEmail] = useState(""); // Email is now used instead of username
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const {login} = useAuth(); // Assuming this context has the login function to handle API calls
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);

      // Attempt to log in with email and password
      const token = await login(email, password); // Call the login function

      // Store the returned JWT token in localStorage
      localStorage.setItem("token", token); // Store token for future authenticated requests

      // Redirect to the dashboard upon successful login
      navigate("/dashboard");
    } catch (err) {
      setError("Failed to sign in. Please check your credentials.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h1>Welcome Back</h1>
        <p className="auth-subtitle">Sign in to your Moringa Pathway account</p>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Handle email input
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Handle password input
              required
            />
          </div>

          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="auth-redirect">
          Don't have an account?{" "}
          <Link to="/register" className="auth-link">
            Sign up
          </Link>
        </p>

        <div className="auth-demo-accounts">
          <p className="text-sm text-gray-600 mb-2">Demo Accounts:</p>
          <p className="text-xs text-gray-500">
            User: user@example.com / password
          </p>
          <p className="text-xs text-gray-500">
            Admin: admin@example.com / password
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
