// components/BookDetail.jsx
import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { useNavigate } from "react-router-dom";

const BookDetail = ({ book }) => {
  const { addToReadingList } = useContext(BookContext);
  const navigate = useNavigate();

  if (!book || !book.volumeInfo) {
    return <div>Loading...</div>;
  }

  const handleAddToReadingList = async () => {
    await addToReadingList(book);
    navigate("/profile");
  };

  return (
    <div>
      <img
        src={book.volumeInfo.imageLinks?.thumbnail}
        alt={book.volumeInfo.title}
      />
      <h1>{book.volumeInfo.title}</h1>
      <h2>{book.volumeInfo.authors?.join(", ")}</h2>
      <p>{book.volumeInfo.description}</p>
      <button onClick={handleAddToReadingList}>Add to Reading List</button>
    </div>
  );
};

export default BookDetail;
