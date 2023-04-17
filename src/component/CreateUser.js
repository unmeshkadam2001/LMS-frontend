import React, { useState } from "react";
import axios from "axios";

function CreateUser() {
    const [user, setUser] = useState({
        userId: "",
        userName: "",
        password: "",
        emailId: "",
        librarian: false,
      });
    
      const handleSubmit = (event) => {
        event.preventDefault();
        axios
          .post("http://localhost:8080/save-user", user)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setUser((prevState) => ({
          ...prevState,
          [name]: type === "checkbox" ? checked : value,
        }));
      };
    

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="userId"
          >
            User ID:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userId"
            type="text"
            name="userId"
            value={user.userId}
            onChange={handleChange}
            placeholder="Enter User ID"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="userName"
          >
            User Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userName"
            type="text"
            name="userName"
            value={user.userName}
            onChange={handleChange}
            placeholder="Enter User Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter Password"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="emailId"
          >
            Email ID:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="emailId"
            type="email"
            name="emailId"
            value={user.emailId}
            onChange={handleChange}
            placeholder="Enter Email ID"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="librarian"
          >
            Librarian:
          </label>
          <input
            className="mr-2 leading-tight"
            id="librarian"
            type="checkbox"
            name="librarian"
            checked={user.librarian}
            onChange={handleChange}
          />
          <span className="text-sm font-medium text-gray-700">
            Check if user is a librarian
          </span>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create User
          </button>
        </div>
      </form>
    </div>
  );
}
export default CreateUser;
