import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favourites" element={<Favourites />} />
    </Routes>
  );
};

export default App;