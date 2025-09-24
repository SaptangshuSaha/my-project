Library Management App -----Experiment-8

A small React app that demonstrates a Library Management UI with Search, Add, and Remove book functionality.
This README contains step-by-step instructions and complete code for each file so you can copy & paste directly.
This project is a **React-based Library Management UI** that allows users to:

- 🔍 **Search** books by title or author (real-time filtering)
- ➕ **Add** new books to the list
- ❌ **Remove** books from the list

---

### 📂 Project Structure

```bash
src/
 ┣ index.js
 ┣ App.js
 ┣ App.css
 ┗ components/
    ┣ Header.js
    ┣ LibraryManagement.js
    ┣ SearchBar.js
    ┣ AddBookForm.js
    ┣ BookList.js
    ┗ BookCard.js
```

---

### 📍 Step 1: App.js

```jsx
import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleAddBook = (title, author) => {
    if (title.trim() && author.trim()) {
      setBooks([...books, { id: Date.now(), title, author }]);
    }
  };

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Library Management</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <BookForm onAddBook={handleAddBook} />
      <BookList books={filteredBooks} onRemoveBook={handleRemoveBook} />
    </div>
  );
}

export default App;
```

---

### 📍 Step 2: SearchBar.js

```jsx
import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search by title or author"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-input"
    />
  );
}

export default SearchBar;
```

---

### 📍 Step 3: BookForm.js

```jsx
import React, { useState } from "react";

function BookForm({ onAddBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook(title, author);
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input
        type="text"
        placeholder="New book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="New book author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;
```

---

### 📍 Step 4: BookList.js

```jsx
import React from "react";
import BookItem from "./BookItem";

function BookList({ books, onRemoveBook }) {
  return (
    <div className="book-list">
      {books.length > 0 ? (
        books.map((book) => (
          <BookItem key={book.id} book={book} onRemoveBook={onRemoveBook} />
        ))
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
}

export default BookList;
```

---

### 📍 Step 5: BookItem.js

```jsx
import React from "react";

function BookItem({ book, onRemoveBook }) {
  return (
    <div className="book-item">
      <span>
        <strong>{book.title}</strong> by {book.author}
      </span>
      <button onClick={() => onRemoveBook(book.id)}>Remove</button>
    </div>
  );
}

export default BookItem;
```

---

### 🎨 Step 6: App.css

```css
.app-container {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #f9f9f9;
}

h1 {
  text-align: center;
}

.search-input,
.book-form input {
  width: calc(100% - 12px);
  padding: 8px;
  margin-bottom: 10px;
  display: block;
}

.book-form {
  display: flex;
  gap: 10px;
}

.book-form input {
  flex: 1;
}

.book-form button {
  padding: 8px 12px;
  cursor: pointer;
}

.book-item {
  display: flex;
  justify-content: space-between;
  background: white;
  padding: 10px;
  margin-bottom: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.book-item button {
  background: #ff6b6b;
  border: none;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.book-item button:hover {
  background: #ff4c4c;
}
```

---

### 📚 Learning Outcomes

✅ React State Management with `useState`  
✅ Props Drilling & Component Communication  
✅ Controlled Components (form inputs)  
✅ Dynamic Rendering (search filter, list render)  
✅ Event Handling (`onChange`, `onSubmit`, `onClick`)  
✅ Separation of Concerns with components  
✅ Styling React apps using CSS
