// contexts/BookContext.jsx
import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [readingList, setReadingList] = useState([]);

  const addToReadingList = (book) => {
    setReadingList((prevList) => {
      if (prevList.some((item) => item.id === book.id)) {
        return prevList; // Book already in the list, do not add again
      }
      return [...prevList, book];
    });
  };

  const removeFromReadingList = (id) => {
    setReadingList((prevList) => prevList.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider
      value={{ readingList, addToReadingList, removeFromReadingList }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
