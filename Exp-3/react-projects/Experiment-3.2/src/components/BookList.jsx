import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books, onRemove }) => {
  return (
    <div>
      {books.map((book, index) => (
        <BookCard
          key={index}
          title={book.title}
          author={book.author}
          onRemove={() => onRemove(index)}
        />
      ))}
    </div>
  );
};

export default BookList;
