import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white">
      <Link to="/" className="text-xl font-bold">
        🎬 MovieExplorer
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/" className="text-sm font-medium hover:text-red-500">
          Home
        </Link>
        <Link to="/movies" className="text-sm font-medium hover:text-red-500">
          Movies
        </Link>

        <Link
          to="/movies"
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm font-medium"
        >
          Explore
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
