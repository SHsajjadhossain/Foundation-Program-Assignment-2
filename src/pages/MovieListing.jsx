import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

function MovieListing() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // load all shows first time the page opens
  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error fetching shows", err);
        setLoading(false);
      });
  }, []);

  // runs the search when user types something, with a small delay
  useEffect(() => {
    if (search.trim() === "") {
      return;
    }

    setLoading(true);

    const timer = setTimeout(() => {
      fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
        .then((res) => res.json())
        .then((data) => {
          // search api returns [{score, show}, {score, show}] so we need .show
          const results = data.map((item) => item.show);
          setMovies(results);
          setLoading(false);
        })
        .catch((err) => {
          console.log("error searching shows", err);
          setLoading(false);
        });
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* search bar */}
        <input
          type="text"
          placeholder="🔍 Search for a movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-3 mb-8 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {loading && <p className="text-center text-gray-500">Loading movies...</p>}

        {!loading && movies.length === 0 && (
          <p className="text-center text-gray-500">No movies found.</p>
        )}

        {/* movie grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onSeeDetails={setSelectedMovie} />
          ))}
        </div>
      </div>

      <Footer />

      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  );
}

export default MovieListing;
