import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPages = ({ movies, deleteMovie }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Movie Inventory</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Genre</th>
            <th className="py-2 px-4 border-b">Movie Name</th>
            <th className="py-2 px-4 border-b">Release Date</th>
            <th className="py-2 px-4 border-b">Showtime</th>
            <th className="py-2 px-4 border-b">Image</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td className="py-2 px-4 border-b">{movie.genre}</td>
              <td className="py-2 px-4 border-b">{movie.name}</td>
              <td className="py-2 px-4 border-b">{movie.releaseDate}</td>
              <td className="py-2 px-4 border-b">{movie.showtime}</td>
              <td className="py-2 px-4 border-b">
                <img src={movie.imageUrl} alt={movie.name} className="w-16 h-16 object-cover" />
              </td>
              <td className="py-2 px-4 border-b">
                <Link to={`/update-movie/${movie.id}`} className="mr-2 text-blue-500">
                  Update
                </Link>
                <button onClick={() => deleteMovie(movie.id)} className="text-red-500">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardPages;
