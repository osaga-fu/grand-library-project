import axios from "axios";

export class BookService {
  async searchBooks(query) {
    const response = await axios.get(
      `http://localhost:8080/books?query=${query}`
    );
    return response.data;
  }

  async addBook(data) {
    const response = await axios.post(`http://localhost:8080/books`, data, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  }
}
