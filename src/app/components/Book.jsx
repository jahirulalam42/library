"use client";
import React from "react";
import Books from "@/app/data/books.json";
import BookCard from "./BookCard";

const Book = () => {
  const books = Books;
  return (
    <div>
      {books.map((b) => (
        <BookCard book={b} />
      ))}
    </div>
  );
};

export default Book;
