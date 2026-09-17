function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  const backdrop = movie.image ? movie.image.original : "https://via.placeholder.com/600x300?text=No+Image";
  const rating = movie.rating && movie.rating.average ? movie.rating.average : "N/A";
  const year = movie.premiered ? movie.premiered.slice(0, 4) : "N/A";
  const genres = movie.genres && movie.genres.length > 0 ? movie.genres.join(", ") : "N/A";

  // close modal when clicking outside the white box
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
    >
      <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto relative shadow-xl">
        {/* image area - dark background so any image ratio fits without cropping */}
        <div className="relative bg-slate-900 flex items-center justify-center h-64">
          <img
            src={backdrop}
            alt={movie.name}
            className="max-w-full max-h-full object-contain"
          />

          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{movie.name}</h2>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-1 rounded-full">
              ⭐ {rating}
            </span>
            <span className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-full">
              📅 {year}
            </span>
            <span className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-full">
              {genres}
            </span>
          </div>

          <h3 className="font-semibold text-sm text-slate-500 uppercase tracking-wide mb-1">
            Overview
          </h3>
          {/* the summary from tvmaze comes with html tags like <p> */}
          <p
            className="text-gray-700 text-sm leading-relaxed mb-5"
            dangerouslySetInnerHTML={{
              __html: movie.summary ? movie.summary : "No overview available.",
            }}
          />

          <button
            onClick={onClose}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 rounded font-medium text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
