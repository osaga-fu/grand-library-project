import React, { createContext, useContext, useState } from "react";
import { BookService } from "../../services/BookService";

const BookContext = createContext();

export const BookProvider = ({ children }) => {

  const [books, setBooks] = useState([]);
  const [visibleBooks, setVisibleBooks] = useState(false);
  const [errorMessageBooks, setErrorMessageBooks] = useState("");
  const [successMessageBooks, setSuccessMessageBooks] = useState("");
  
  const bookService = new BookService();

  const searchBooks = async (query) => {
    try {
      const data = await bookService.searchBooks(query);
      setBooks(data);
    } catch (error) {
      console.error("Error al buscar libros", error);
    }
  };


  const addBook = async (data) => {
    try {
      const response = await bookService.addBook(data); 
  
      console.log("Book added successfully:", response.data); 
  
    } catch (error) {
      console.error("Error adding book:", error);
      throw new Error("Failed to add book"); 
    }
  };

  const value = {
    books,
    searchBooks,
    addBook,
    visibleBooks,
    setVisibleBooks,
    successMessageBooks,
    setSuccessMessageBooks,
    errorMessageBooks,
    setErrorMessageBooks
  };

  return (
    <BookContext.Provider value={value}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => useContext(BookContext);
