import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* hero section */}
      <div
        className="flex-1 flex flex-col items-center justify-center text-center text-white py-32 px-4"
        style={{
          background:
            " url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">DISCOVER MOVIES</h1>
        <p className="text-gray-200 max-w-md mb-8">
          Explore and discover your favorite movies from around the world.
        </p>
        <Link
          to="/movies"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold"
        >
          Explore Now
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
