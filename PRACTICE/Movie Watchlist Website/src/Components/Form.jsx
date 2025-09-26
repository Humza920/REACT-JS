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
  const { movieArr , addMovie } = useMovie();
  console.log(movieArr);

  let obj ;

  const onSubmitBtn = ()=>{
    
    obj = {
      movieName,
      movieDescription,
      releaseDate,
      genre,
      duration,
      rating,
      poster,
      isWatched : false
    }
    addMovie(obj)
  }

  return (
    <>
      <form className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Add a Movie
        </h2>

        <div>
          <label
            htmlFor="movieName"
            className="block text-sm font-medium text-gray-700"
          >
            Movie Name
          </label>
          <input
            type="text"
            id="movieName"
            placeholder="Enter Movie Name"
            className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={movieName}
            onChange={(e) => setmovieName(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="movieDesc"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="movieDesc"
            rows="4"
            placeholder="Enter Movie Description"
            className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={movieDescription}
            onChange={(e) => setmovieDescription(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="releaseDate"
            className="block text-sm font-medium text-gray-700"
          >
            Release Date
          </label>
          <input
            type="date"
            id="releaseDate"
            className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={releaseDate}
            onChange={(e) => setreleaseDate(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="genre"
            className="block text-sm font-medium text-gray-700"
          >
            Genre
          </label>
          <select
            id="genre"
            className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={genre}
            onChange={(e) => setgenre(e.target.value)}
          >
            <option value="">Select Genre</option>
            <option>Action</option>
            <option>Comedy</option>
            <option>Drama</option>
            <option>Horror</option>
            <option>Sci-Fi</option>
            <option>Romance</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="duration"
            className="block text-sm font-medium text-gray-700"
          >
            Duration (in minutes)
          </label>
          <input
            type="number"
            id="duration"
            placeholder="120"
            className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={duration}
            onChange={(e) => setduration(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Rating
          </label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className="text-2xl text-gray-400 hover:text-yellow-500 focus:outline-none"
                onClick={() => setrating(star)}
              >
                {star <= rating ? "★" : "☆"}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="poster"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Poster
          </label>
          <input
            type="file"
            // value={poster}
            id="poster"
            accept="image/*"
            className="w-full mt-1"
            onChange={(e) => setposter(e.target.files[0])}
          />
        </div>

        <button
          onClick={(e)=>{
            e.preventDefault()
            onSubmitBtn()
          }}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
        >
          Submit Movie
        </button>
      </form>
    </>
  );
};

export default Form;
