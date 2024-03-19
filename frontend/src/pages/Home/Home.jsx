import "./Home.css";
import  List  from "../../components/List/List";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="mainContainer">
        <div className="sectionButtons">
          <Link to={"/"}>
            <button className="bgCream">Catálogo</button>
          </Link>
          <Link to={"/members"}>
            <button className="bgGreen">Socios</button>
          </Link>
        </div>
        <List />
    </main>
  );
}

