import React, { useState } from "react";
import BookList from "./BookList";

const LibraryManagement = () => {
  const [books, setBooks] = useState([
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  // Add book
  const addBook = () => {
    if (newTitle && newAuthor) {
      setBooks([...books, { title: newTitle, author: newAuthor }]);
      setNewTitle("");
      setNewAuthor("");
    }
  };

  // Remove book
  const removeBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  // Filtered books
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid black",
      }}
    >
      <h2>Library Management</h2>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: "100%", padding: "6px", marginBottom: "10px" }}
      />

      {/* Add Book Form */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="New book title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          style={{ marginRight: "5px", padding: "6px" }}
        />
        <input
          type="text"
          placeholder="New book author"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
          style={{ marginRight: "5px", padding: "6px" }}
        />
        <button onClick={addBook}>Add Book</button>
      </div>

      {/* Book List */}
      <BookList books={filteredBooks} onRemove={removeBook} />
    </div>
  );
};

export default LibraryManagement;
