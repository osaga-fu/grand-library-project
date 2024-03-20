import "../Home/Home.css";

import ListMembers from "../../components/ListMembers/ListMembers";
import { Link } from "react-router-dom";
import Aside from "../../components/Aside/Aside";

export default function Members() {
  return (
    <div className="mainContainer">
      <section>
        <div className="sectionButtons">
          <Link to={"/"}>
            <button className="bgHighlight">Catálogo</button>
          </Link>
          <Link to={"/members"}>
            <button className="bgNeutral">Socios</button>
          </Link>
        </div>
        <ListMembers />
      </section>
    </div>
  );
}
