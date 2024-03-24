package com.grandlibrary.backend.services;

import com.grandlibrary.backend.controllers.books.BookRequest;
import com.grandlibrary.backend.controllers.books.BookResponse;
import com.grandlibrary.backend.persistence.books.Book;
import com.grandlibrary.backend.persistence.books.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public List<BookResponse> searchBooks(String query) {
        List<Book> books = bookRepository
                .findAllByTitleContainingIgnoreCaseOrAuthorContainingIgnoreCaseOrIsbnContainingIgnoreCaseOrSectionCodeContainingIgnoreCase(
                        query, query, query, query);

        List<BookResponse> bookResponses = new ArrayList<>();
        for (Book book : books) {
            bookResponses.add(new BookResponse(
                    book.getBookId(),
                    book.getTitle(),
                    book.getAuthor(),
                    book.getIsbn(),
                    book.getSectionCode(),
                    book.isLoaned()));
        }

        return bookResponses;
    }

    public BookResponse createBook(BookRequest request) {
        Book book = new Book(request.getBookId(), request.getTitle(), request.getAuthor(), request.getIsbn(),
                request.getSectionCode(), request.isLoaned());
        Book savedBook = bookRepository.save(book);
        return new BookResponse(savedBook.getBookId(), savedBook.getTitle(), savedBook.getAuthor(), savedBook.getIsbn(),
                savedBook.getSectionCode(), savedBook.isLoaned());
    }

}