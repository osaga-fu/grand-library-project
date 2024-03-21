import "./List.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function List() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/books?query=${search}`
      );

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error al buscar", error);
    }
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
          {results.map((result) => (
            <div key={result.book_id}>
              <div className="list">
                <div className="leftPartList">
                  <li className="listTitle">{result.title}</li>
                  <li>{result.author}</li>
                </div>
                <div className="rightPartList">
                  <li>{result.isbn}</li>
                  <li>{result.sectionCode}</li>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}
