// components/ReadingList.jsx
import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import ReadingListCard from "./ReadingListCard";

const ReadingList = () => {
  const { readingList, removeFromReadingList } = useContext(BookContext);

  return (
    <div className="book-list">
      {readingList.map((book) => (
        <ReadingListCard
          key={book.id}
          book={book}
          onRemove={removeFromReadingList}
        />
      ))}
    </div>
  );
};

export default ReadingList;
