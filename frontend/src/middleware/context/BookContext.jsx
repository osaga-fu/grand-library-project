import React, { createContext, useContext, useState } from "react";
import { BookService } from "../../services/BookService";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  
  const bookService = new BookService();

  const searchBooks = async (query) => {
    try {
      const data = await bookService.searchBooks(query);
      setBooks(data);
    } catch (error) {
      console.error("Error al buscar libros", error);
    }
  };

  const value = {
    books,
    searchBooks,
  };

  return (
    <BookContext.Provider value={value}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => useContext(BookContext);
