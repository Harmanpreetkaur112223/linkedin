import React, { useContext, useState } from 'react';
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContextData } from '../context/AuthContext';
import { UserContextData } from '../context/UserProvider';

function Login() {
  const navigate = useNavigate();
  const { serverUrl } = useContext(AuthContextData); // assuming your context has a login function
  const{userData , setUserData}=useContext(UserContextData)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    // Basic validation
    if (!formData.email || !formData.password) {
      setError("Please fill in both email and password");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
  `${serverUrl}/api/auth/login`,
  {
    email: formData.email,
    password: formData.password,
  },
  {
    withCredentials: true, // 🔥 IMPORTANT
  }
);
setUserData(response.data.user)
navigate("/")
console.log(response)

      // Assuming your backend returns token + user data
      
      setSuccess("Login successful! Redirecting...");
      // <Navigate to = "/"/>
      // Redirect based on role or to dashboard
      // setTimeout(() => {
      //   if (user?.role === "recruiter") {
      //     navigate("/recruiter/dashboard");
      //   } else {
          navigate("/"); // or just "/"
      //   }
      // }, 1200);

    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Login failed. Please check your credentials.";
      setError(message);
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 p-6">
      {/* Card – same style as Signup */}
      <div
        className={`
          w-full max-w-lg 
          bg-white/5 backdrop-blur-2xl 
          border border-white/10 rounded-2xl 
          shadow-2xl overflow-hidden
          transition-all duration-500
        `}
      >
        {/* Header */}
        <div className="px-10 pt-10 pb-6 text-center">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Welcome back
          </h1>
          <p className="mt-3 text-gray-300 text-sm">
            Sign in to your professional community
          </p>
        </div>

        {/* Form */}
        <form className="px-10 pb-10 space-y-6" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="relative">
            <input 
            autoComplete='off'
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="peer w-full px-4 pt-6 pb-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300"
              placeholder="Email"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-4 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-300 pointer-events-none"
            >
              Email
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
            autoComplete='off'
              type={showPwd ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="peer w-full px-4 pt-6 pb-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300"
              placeholder="Password"
              required
            />
            <label
              htmlFor="password"
              className="absolute left-4 top-4 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-300 pointer-events-none"
            >
              Password
            </label>

            <div
              onClick={() => setShowPwd((prev) => !prev)}
              className="cursor-pointer text-blue-300 text-sm absolute right-4 bottom-5 select-none"
            >
              {showPwd ? "Hide" : "Show"}
            </div>
          </div>

          {/* Forgot password link (optional) */}
          <div className="text-right">
            <button
              type="button"
              className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
              onClick={() => navigate("/forgot-password")} // or open modal
            >
              Forgot password?
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`
              w-full py-3.5 px-4 mt-4 rounded-lg font-medium text-lg
              bg-blue-600 hover:bg-blue-700 text-white
              shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/40
              transform hover:-translate-y-0.5 
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600 disabled:transform-none
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900
              transition-all duration-300
            `}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

          {/* Feedback messages */}
          {error && (
            <div className="text-red-400 text-center text-sm mt-3">
              {error}
            </div>
          )}
          {success && (
            <div className="text-green-400 text-center text-sm mt-3">
              {success}
            </div>
          )}

          {/* Signup link */}
          <p className="text-center text-sm text-gray-400 mt-8">
            Don't have an account?{" "}
            <span
              className="text-blue-400 hover:text-blue-300 font-medium cursor-pointer transition-colors"
              onClick={() => navigate("/signup")}
            >
              Join now
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;