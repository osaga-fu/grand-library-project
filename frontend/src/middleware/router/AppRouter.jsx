import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../presentation/pages/Home/Home";
import List from "../../presentation/components/List/List";
import ListMembers from "../../presentation/components/ListMembers/ListMembers"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
            <Route path="" element={<List />} />
            <Route path="members" element={<ListMembers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};