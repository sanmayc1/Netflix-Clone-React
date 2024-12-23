import YouTube from "react-youtube";

const MovieModal = ({ isOpen, onClose, movie, ytId }) => {
  if (!isOpen) return null;

  const opts = {
    height: "430",
    width: "770",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-50 w-full max-w-3xl rounded-lg bg-zinc-900 text-white shadow-xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-2 top-2 z-10 rounded-full bg-zinc-800 p-1"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
          >
            <path strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Video  */}
        <div className="relative aspect-video w-full overflow-hidden ">
          {console.log(ytId)}
          {ytId === "Loading..." ? (
            <h1 className="text-center mt-52">Loading...</h1>
          ) : ytId === "noData" ? (
            <h1 className="text-center mt-52">Sorry No video Availavle !</h1>
          ) : (
            <YouTube videoId={ytId} opts={opts} />
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold">{movie.title}</h2>
          <div className="mt-2 flex gap-4 text-sm">
            <span className="text-green-500">Rating {movie.vote_average}</span>
            <span>{movie.release_date}</span>
            <span>{movie.duration}</span>
          </div>
          <p className="mt-4">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
