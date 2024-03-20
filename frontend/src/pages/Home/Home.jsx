import "./Home.css";
import List from "../../components/List/List";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mainContainer">
      <section>
        <div className="sectionButtons">
          <Link to={"/"}>
            <button className="bgNeutral">Libros</button>
          </Link>
          <Link to={"/members"}>
            <button className="bgHighlight">Socios</button>
          </Link>
        </div>
        <List />
      </section>
    </div>
  );
}
