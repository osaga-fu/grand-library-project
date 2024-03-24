import axios from "axios";

export class BookService {
  async searchBooks(query) {
    const response = await axios.get(
      `http://localhost:8080/books?query=${query}`
    );
    return response.data;
  }
}
