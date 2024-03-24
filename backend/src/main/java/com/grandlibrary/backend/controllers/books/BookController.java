package com.grandlibrary.backend.controllers.books;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.grandlibrary.backend.services.BookService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping("/books")
    public List<BookResponse> searchBooks(@RequestParam("query") String query) {
        return bookService.searchBooks(query);
    }

    @PostMapping("/books")
    public BookResponse createBook(@RequestBody BookRequest request) {
        return bookService.createBook(request);
    }

}
