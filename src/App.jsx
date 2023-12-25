import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPageController from "./pages/ListPages/ListPageController";
import AddPageController from "./pages/AddPage/AddPageController";
import Headerview from "./components/Header/HeaderView";

const App = () => {
  return (
    <BrowserRouter>
      <Headerview />
      <Routes>
        <Route path="" element={<ListPageController />} />
        <Route path="/add" element={<AddPageController />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
