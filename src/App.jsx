import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieListing from "./pages/MovieListing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<MovieListing />} />
    </Routes>
  );
}

export default App;
