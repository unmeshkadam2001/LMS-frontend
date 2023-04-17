import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function Login() {
  const navigate = useNavigate(); // Changed to useNavigate() from Navigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:8080/login?username=${username}&password=${password}`)
      .then((response) => {
        setResponse(response.data);
        if (response.data === 1) { // Changed to response.data
            navigate("/LibrarianHomepageToAddBooks");
          } else if (response.data === 2) { // Changed to response.data
            navigate("/StudentHomepage");
          } else if (response.data === 3) { // Changed to response.data
            navigate("/login");
            alert("Enter valid username and password")
          }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            <span className="text-gray-700 font-semibold">Username:</span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-400 p-2 rounded-md w-full mt-2"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700 font-semibold">Password:</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-400 p-2 rounded-md w-full mt-2"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
