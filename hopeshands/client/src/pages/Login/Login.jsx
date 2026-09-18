import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

import { useAuth } from "../../context/AuthContext";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      console.log("Login response:", data);

      if (!response.ok) {
        setMessage(
          data.message || "Login failed"
        );

        return;
      }

      // Make sure backend returned JWT
      if (!data.token) {
        setMessage(
          "Login successful, but token was not received."
        );

        return;
      }

      // Update AuthContext
      login(data.token, data.user);

      console.log(
        "Authentication successful"
      );

      console.log(
        "Token:",
        localStorage.getItem("token")
      );

      // Go to dashboard
      navigate("/dashboard", {
        replace: true,
      });

    } catch (error) {
      console.error(
        "Login Error:",
        error
      );

      setMessage(
        "Unable to connect to server"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        {/* Header */}

        <div className="login-header">

          <h1>
            Welcome Back
          </h1>

          <p>
            Login to your HopeHands account
          </p>

        </div>

        {/* Form */}

        <form onSubmit={handleSubmit}>

          {/* Email */}

          <div className="form-group">

            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          {/* Password */}

          <div className="form-group">

            <label htmlFor="password">
              Password
            </label>

            <div className="password-wrapper">

              <input
                id="password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword(
                    (prev) => !prev
                  )
                }
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
              >

                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}

              </button>

            </div>

          </div>

          {/* Message */}

          {message && (
            <div className="login-message">
              {message}
            </div>
          )}

          {/* Login Button */}

          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >

            {loading
              ? "Logging in..."
              : "Login"}

          </button>

        </form>

        {/* Register */}

        <div className="register-section">

          <span>
            Don't have an account?
          </span>

          <Link
            to="/register"
            className="register-button"
          >
            Register
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;