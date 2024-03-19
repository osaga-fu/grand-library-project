import "./Home.css";
import List from "../../components/List/List";
import { Link } from "react-router-dom";
import Aside from "../../components/Aside/Aside";

export default function Home() {
  return (
    <div className="mainContainer">
      <section>
        <div className="sectionButtons">
          <Link to={"/"}>
            <button className="bgCream">Catálogo</button>
          </Link>
          <Link to={"/members"}>
            <button className="bgGreen">Socios</button>
          </Link>
        </div>
        <List />
      </section>
    </div>
  );
}
