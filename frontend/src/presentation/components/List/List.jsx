import "./List.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useBookContext } from "../../../middleware/context/BookContext";

export default function List() {
  const { books, searchBooks } = useBookContext();

  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    searchBooks(search);
    setSearched(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="listWrapper">
      <div className="sectionButtons">
        <Link to={"/"}>
          <button className="bgNeutral">Libros</button>
        </Link>
        <Link to={"/members"}>
          <button className="bgHighlight">Socios</button>
        </Link>
      </div>
      <div className="listContainer">
        <section className="searchContainer">
          <button
            name="searchButton"
            className="searchButton"
            onClick={handleSearch}
          >
            <i className="pi pi-search" style={{ fontSize: "2.5rem" }}></i>
          </button>
          <input
            className="searchInput"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Buscar libro..."
          />
        </section>
        <ul>
          {books.map((book) => (
            <div key={book.bookId}>
              <div className="list">
                <div className="leftPartList">
                  <li className="listTitle">{book.title}</li>
                  <li>{book.author}</li>
                </div>
                <div className="rightPartList">
                  <li>{book.isbn}</li>
                  <li>{book.sectionCode}</li>
                </div>
              </div>
              <hr />
            </div>
          ))}
          {searched && books.length === 0 && (
            <li className="notFoundSearch">No se han encontrado libros</li>
          )}
        </ul>
      </div>
    </section>
  );
}
