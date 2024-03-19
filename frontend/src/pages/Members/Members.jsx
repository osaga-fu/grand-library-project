import "../Home/Home.css";
import  ListMembers  from "../../components/ListMembers/ListMembers";
import { Link } from "react-router-dom";

export default function Members() {
  return (
    <main className="mainContainer">
      <div className="sectionButtons">
        <Link to={"/"}>
          <button className="bgGreen">Catálogo</button>
        </Link>
        <Link to={"/members"}>
          <button className="bgCream">Socios</button>
        </Link>
      </div>
      <ListMembers />
    </main>
  );
}
