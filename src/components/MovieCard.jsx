function MovieCard({ movie, onSeeDetails }) {
  // some shows from the api dont have an image or rating
  const poster = movie.image ? movie.image.medium : "https://via.placeholder.com/210x295?text=No+Image";
  const rating = movie.rating && movie.rating.average ? movie.rating.average : "N/A";
  const year = movie.premiered ? movie.premiered.slice(0, 4) : "N/A";

  return (
    <div className="bg-white rounded shadow-md overflow-hidden flex flex-col">
      <img src={poster} alt={movie.name} className="w-full h-72 object-cover" />

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-lg mb-1">{movie.name}</h3>
        <p className="text-sm text-gray-600 mb-3">
          ⭐ {rating} &nbsp; • &nbsp; 📅 {year}
        </p>

        <button
          onClick={() => onSeeDetails(movie)}
          className="mt-auto bg-slate-900 hover:bg-slate-700 text-white py-2 rounded text-sm"
        >
          See Details
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
