import "../List/List.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMemberContext } from "../../../middleware/context/MemberContext";

export default function ListMembers() {
  const { members, searchMembers } = useMemberContext();

  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    searchMembers(search);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
      setSearched(true);
    }
  };

  return (
    <section className="listWrapper">
      <div className="sectionButtons">
        <Link to={"/"}>
          <button className="bgHighlight">Libros</button>
        </Link>
        <Link to={"/members"}>
          <button className="bgNeutral">Socios</button>
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
            placeholder="Buscar socio..."
          />
        </section>
        <ul>
          {members.map((member) => (
            <div key={member.memberId}>
              <div className="list">
                <div className="leftPartList memberList">
                  <li className="listTitle">{member.firstName}</li>
                  <li className="listTitle">{member.lastName}</li>
                </div>
                <div className="rightPartList">
                  <li>{member.dni}</li>
                  <li>{member.email}</li>
                </div>
              </div>
              <hr />
            </div>
          ))}
          {searched && members.length === 0 && (
            <li className="notFoundSearch">No se han encontrado socios</li>
          )}
        </ul>
      </div>
    </section>
  );
}
