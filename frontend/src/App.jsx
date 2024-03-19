import "./App.css";
import Home from "./pages/Home/Home";
import Members from "./pages/Members/Members";
import Aside from "./components/Aside/Aside";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "primereact/resources/themes/lara-light-teal/theme.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Aside />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/members" element={<Members />}></Route>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
