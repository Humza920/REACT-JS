import { useAuth } from "../Context/authcontext";
import { useState } from "react";
import { useMovie } from "../Context/moviecontext";

const Form = () => {
  const [movieName, setmovieName] = useState("");
  const [movieDescription, setmovieDescription] = useState("");
  const [releaseDate, setreleaseDate] = useState("");
  const [genre, setgenre] = useState("");
  const [duration, setduration] = useState("");
  const [rating, setrating] = useState(0);
  const [poster, setposter] = useState(null);
  const [coverPoster, setcoverPoster] = useState(null);
  const [movieLink, setmovieLink] = useState("");
  const { addMovie } = useMovie();
const {loginUser , logoutUser} = useAuth()

  const onSubmitBtn = () => {
    let obj = {
      movieName,
      movieDescription,
      releaseDate,
      genre,
      duration,
      rating,
      poster,
      coverPoster,
      movieLink,
      isWatched: false,
    };
    addMovie(obj);

    console.log("run");
  };

  return (
    // <>
    //   <form className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8 rounded-2xl shadow-2xl space-y-6 border border-slate-700/50 backdrop-blur-sm">
    //     <div className="text-center space-y-2 pb-4 border-b border-slate-700/50">
    //       <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
    //         Add New Movie
    //       </h2>
    //       <p className="text-slate-400 text-sm">Fill in the details to add a movie to your collection</p>
    //     </div>

    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //       {/* Movie Name */}
    //       <div className="md:col-span-2">
    //         <label htmlFor="movieName" className="block text-sm font-semibold text-slate-300 mb-2">
    //           Movie Title
    //         </label>
    //         <input
    //           type="text"
    //           id="movieName"
    //           placeholder="Enter movie title"
    //           className="w-full px-4 py-3 border border-slate-600 bg-slate-800/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition placeholder-slate-500"
    //           required
    //           value={movieName}
    //           onChange={(e) => setmovieName(e.target.value)}
    //         />
    //       </div>

    //       {/* Description */}
    //       <div className="md:col-span-2">
    //         <label htmlFor="movieDesc" className="block text-sm font-semibold text-slate-300 mb-2">
    //           Description
    //         </label>
    //         <textarea
    //           id="movieDesc"
    //           rows="4"
    //           placeholder="Enter a brief description of the movie"
    //           className="w-full px-4 py-3 border border-slate-600 bg-slate-800/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition placeholder-slate-500 resize-none"
    //           required
    //           value={movieDescription}
    //           onChange={(e) => setmovieDescription(e.target.value)}
    //         ></textarea>
    //       </div>

    //       {/* Movie Link */}
    //       <div className="md:col-span-2">
    //         <label htmlFor="movieLink" className="block text-sm font-semibold text-slate-300 mb-2">
    //           Movie Link
    //         </label>
    //         <input
    //           type="url"
    //           id="movieLink"
    //           placeholder="https://example.com/movie"
    //           className="w-full px-4 py-3 border border-slate-600 bg-slate-800/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition placeholder-slate-500"
    //           required
    //           value={movieLink}
    //           onChange={(e) => setmovieLink(e.target.value)}
    //         />
    //       </div>

    //       {/* Release Date */}
    //       <div>
    //         <label htmlFor="releaseDate" className="block text-sm font-semibold text-slate-300 mb-2">
    //           Release Date
    //         </label>
    //         <input
    //           type="date"
    //           id="releaseDate"
    //           className="w-full px-4 py-3 border border-slate-600 bg-slate-800/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
    //           required
    //           value={releaseDate}
    //           onChange={(e) => setreleaseDate(e.target.value)}
    //         />
    //       </div>

    //       {/* Genre */}
    //       <div>
    //         <label htmlFor="genre" className="block text-sm font-semibold text-slate-300 mb-2">
    //           Genre
    //         </label>
    //         <select
    //           id="genre"
    //           className="w-full px-4 py-3 border border-slate-600 bg-slate-800/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
    //           required
    //           value={genre}
    //           onChange={(e) => setgenre(e.target.value)}
    //         >
    //           <option value="">Select genre</option>
    //           <option>Action</option>
    //           <option>Comedy</option>
    //           <option>Drama</option>
    //           <option>Horror</option>
    //           <option>Sci-Fi</option>
    //           <option>Romance</option>
    //         </select>
    //       </div>

    //       {/* Duration */}
    //       <div>
    //         <label htmlFor="duration" className="block text-sm font-semibold text-slate-300 mb-2">
    //           Duration (minutes)
    //         </label>
    //         <input
    //           type="number"
    //           id="duration"
    //           placeholder="120"
    //           className="w-full px-4 py-3 border border-slate-600 bg-slate-800/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition placeholder-slate-500"
    //           required
    //           value={duration}
    //           onChange={(e) => setduration(e.target.value)}
    //         />
    //       </div>

    //       {/* Rating */}
    //       <div>
    //         <label className="block text-sm font-semibold text-slate-300 mb-2">Rating</label>
    //         <div className="flex items-center space-x-1 bg-slate-800/50 p-3 rounded-xl border border-slate-600">
    //           {[1, 2, 3, 4, 5].map((star) => (
    //             <button
    //               key={star}
    //               type="button"
    //               className={`text-3xl transition-all duration-200 ${
    //                 star <= rating ? "text-yellow-400 scale-110" : "text-slate-600"
    //               } hover:scale-125 hover:text-yellow-300`}
    //               onClick={() => setrating(star)}
    //             >
    //               {star <= rating ? "★" : "☆"}
    //             </button>
    //           ))}
    //           <span className="ml-3 text-slate-400 text-sm font-medium">{rating}/5</span>
    //         </div>
    //       </div>

    //       {/* Poster */}
    //       <div>
    //         <label htmlFor="poster" className="block text-sm font-semibold text-slate-300 mb-2">
    //           Poster Image
    //         </label>
    //         <div className="relative">
    //           <input
    //             type="file"
    //             required
    //             id="poster"
    //             accept="image/*"
    //             className="w-full px-4 py-3 border border-slate-600 bg-slate-800/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition text-sm text-slate-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-cyan-600 file:text-white file:font-semibold hover:file:bg-cyan-700 file:transition"
    //             onChange={(e) => setposter(e.target.files[0])}
    //           />
    //         </div>
    //       </div>

    //       {/* Cover Poster */}
    //       <div>
    //         <label htmlFor="coverPoster" className="block text-sm font-semibold text-slate-300 mb-2">
    //           Cover Image
    //         </label>
    //         <div className="relative">
    //           <input
    //             type="file"
    //             required
    //             id="coverPoster"
    //             accept="image/*"
    //             className="w-full px-4 py-3 border border-slate-600 bg-slate-800/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm text-slate-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white file:font-semibold hover:file:bg-blue-700 file:transition"
    //             onChange={(e) => setcoverPoster(e.target.files[0])}
    //           />
    //         </div>
    //       </div>
    //     </div>

    //     {/* Submit */}
    //     <button
    //       onClick={(e) => {
    //         e.preventDefault();
    //         onSubmitBtn();
    //       }}
    //       className="w-full bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 text-white py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 font-bold tracking-wide text-lg"
    //     >
    //       Add Movie to Collection
    //     </button>
    //   </form>
    // </>
    <>
    <button onClick={logoutUser}>LOGOUT</button><br />
    <button onClick={()=>{loginUser("humza@gmail.com" , "humza123")}}>LOGIN</button>
    </>
    
  );
};

export default Form;

