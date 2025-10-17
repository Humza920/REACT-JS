import { useEffect, useState } from "react";
import { useMovie } from "../Context/moviecontext";
import { useAuth } from "../Context/authcontext";

const AdminMovieManage = () => {
  let allGeneras = [];
  const { movieArr, removeMovie } = useMovie();
  const { user } = useAuth();
  const [filteredArr, setfilteredArr] = useState([]);
  const [selectedGenra, setselectedGenra] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

if (movieArr) {
  console.log(movieArr);
  
}
  
  // ✅ Extract all genres
  movieArr?.map((x) => allGeneras.push(x.genre));
  allGeneras = ["All", ...new Set(allGeneras)];

  function onDeleteFunc(id){
    console.log(id);
   const deleting = filteredArr.filter((x)=>x.draftDoc_id !== id)
   console.log(deleting);
   
   setfilteredArr(deleting)
    removeMovie(user.uid , id)
  }

  // 🕒 Loading simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setfilteredArr(movieArr);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [movieArr]);

  // 🔍 Search filter
  useEffect(() => {
    if (search === "") {
      setfilteredArr(movieArr);
      setselectedGenra("All");
    } else {
      const filtering = movieArr.filter((obj) =>
        obj.movieName.trim().toLowerCase().includes(search.trim().toLowerCase())
      );
      setfilteredArr(filtering);
      setselectedGenra("All");
    }
  }, [search, movieArr]);

  // 🎭 Genre filter
  useEffect(() => {
    if (selectedGenra === "All") {
      setfilteredArr(movieArr);
    } else {
      const filtering = movieArr.filter((obj) => obj.genre === selectedGenra);
      setfilteredArr(filtering);
    }
  }, [selectedGenra, movieArr]);

  // 🧠 UI Rendering
  return (
    <div className="min-h-screen bg-slate-950 p-6 text-slate-200">
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div className="flex justify-center items-center h-[70vh]">
            <p className="text-cyan-400 text-lg animate-pulse">
              Loading movies...
            </p>
          </div>
        ) : (
          <>
            {/* 🔍 Search + Genre Filter */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <input
                type="text"
                placeholder="Search movies..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-slate-800 text-slate-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full md:w-1/3"
              />

              <div className="flex flex-wrap gap-2">
                {allGeneras.map((g) => (
                  <button
                    key={g}
                    onClick={() => setselectedGenra(g)}
                    className={`px-4 py-2 rounded-lg text-sm transition-all shadow-md ${
                      selectedGenra === g
                        ? "bg-cyan-600 text-white"
                        : "bg-slate-800 text-cyan-400 hover:bg-cyan-700 hover:text-white"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* 🎬 Movies Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredArr.length > 0 ? (
                filteredArr.map((movie, index) => (
                  <div
                    key={index}
                    className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all border border-slate-800 hover:border-cyan-600 flex flex-col"
                  >
                    <img
                      src={
                        movie?.coverPoster ||
                        movie?.poster ||
                        "/placeholder.jpg"
                      }
                      alt={movie?.movieName || "Movie"}
                      className="w-full h-56 object-cover"
                    />

                    <div className="p-4 space-y-2 flex-1 flex flex-col">
                      <h3 className="text-lg font-semibold text-cyan-400 truncate">
                        {movie?.movieName || "Untitled"}
                      </h3>
                      <p className="text-sm text-slate-400 line-clamp-2">
                        {movie?.movieDescription || "No description available."}
                      </p>

                      <div className="flex items-center justify-between text-sm text-slate-400">
                        <span>🎭 {movie?.genre || "Unknown"}</span>
                        <span>⭐ {movie?.rating || "N/A"}</span>
                      </div>

                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <span>⏱ {movie?.duration || "—"}</span>
                        <span>📅 {movie?.releaseDate || "—"}</span>
                      </div>

                      {/* 🔥 DELETE MOVIE BUTTON */}
                      <button
                        onClick={() => onDeleteFunc(movie?.draftDoc_id)} 
                        className="mt-4 w-full py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-red-600/80 to-red-500/80 text-white hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-md hover:shadow-red-500/20"
                      >
                        <i className="fas fa-trash-alt mr-2"></i> Delete Movie
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-slate-500 col-span-full">
                  No movies found
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminMovieManage;
