import "./Home.css";
import Header from "../../components/Header/Header"
import Aside from "../../components/Aside/Aside"
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="mainContainer">
      <Header />
      <main>
        <Aside />
        <Outlet />
      </main>
    </div>
  );
}
