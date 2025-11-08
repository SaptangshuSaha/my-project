import React from "react";

const BookCard = ({ title, author, onRemove }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <span>
        <strong>{title}</strong> by {author}
      </span>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default BookCard;
