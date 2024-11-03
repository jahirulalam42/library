"use client";
import Image from "next/image";
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="w-96 h-96">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Country: {book.country}</p>
      <p>Language: {book.language}</p>
      <p>Pages: {book.pages}</p>
      <p>Year: {book.year}</p>
      <Image
        src="/images/sbook.svg" // Path to your single book image
        alt={`Cover of ${book.title}`}
        width={200} // Set desired width
        height={300} // Set desired height
      />
      <a href={book.link} target="_blank" rel="noopener noreferrer">
        More Info
      </a>
    </div>
  );
};

export default BookCard;
