import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateMovie = ({ movies, updateMovie }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movieToEdit = movies.find((movie) => movie.id === id);

  const [movie, setMovie] = useState({
    ...movieToEdit
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMovie(movie);
    navigate('/dashboard');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Update Movie</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Genre</label>
          <select
            name="genre"
            value={movie.genre}
            onChange={handleChange}
            className="w-full px-3 py-2 border"
          >
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Thriller">Thriller</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Movie Name</label>
          <input
            type="text"
            name="name"
            value={movie.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Release Date</label>
          <input
            type="date"
            name="releaseDate"
            value={movie.releaseDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">IMDb Rating</label>
          <input
            type="text"
            name="imdbRating"
            value={movie.imdbRating}
            onChange={handleChange}
            className="w-full px-3 py-2 border"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Description</label>
          <textarea
            name="description"
            value={movie.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Showtime</label>
          <input
            type="text"
            name="showtime"
            value={movie.showtime}
            onChange={handleChange}
            className="w-full px-3 py-2 border"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={movie.imageUrl}
            onChange={handleChange}
            className="w-full px-3 py-2 border"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Save
        </button>
      </form>
    </div>
  );
};

export default UpdateMovie;
