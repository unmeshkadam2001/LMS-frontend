import React, { useState } from "react";
import axios from "axios";

function LibrarianHomepageToAddBooks() {
  const [bookData, setBookData] = useState({
    bookId: "",
    bookName: "",
    author1: "",
    author2: "",
    publisher: "",
    yearOfPublication: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/save-book", bookData)
      .then((response) => {
        console.log(response);
        // handle success response here
      })
      .catch((error) => {
        console.log(error);
        // handle error response here
      });
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Add book</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="bookId">Book ID:</label>
          <input
            type="text"
            id="bookId"
            name="bookId"
            value={bookData.bookId}
            onChange={handleChange}
            className="border rounded-lg p-2"
          />
          <br />
          <label htmlFor="bookName">Book Name:</label>
          <input
            type="text"
            id="bookName"
            name="bookName"
            value={bookData.bookName}
            onChange={handleChange}
            className="border rounded-lg p-2"
          />
          <br />

          <label htmlFor="author1">Author 1:</label>
          <input
            type="text"
            id="author1"
            name="author1"
            value={bookData.author1}
            onChange={handleChange}
            className="border rounded-lg p-2"
          />
          <br />

          <label htmlFor="author2">Author 2:</label>
          <input
            type="text"
            id="author2"
            name="author2"
            value={bookData.author2}
            onChange={handleChange}
            className="border rounded-lg p-2"
          />
          <br />

          <label htmlFor="publisher">Publisher:</label>
          <input
            type="text"
            id="publisher"
            name="publisher"
            value={bookData.publisher}
            onChange={handleChange}
            className="border rounded-lg p-2"
          />
          <br />

          <label htmlFor="yearOfPublication">Year of Publication:</label>
          <input
            type="text"
            id="yearOfPublication"
            name="yearOfPublication"
            value={bookData.yearOfPublication}
            onChange={handleChange}
            className="border rounded-lg p-2"
          />
          <br />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default LibrarianHomepageToAddBooks;
