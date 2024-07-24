import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardPages1 from './DashboardPages1';

const Profile = ({ user, movies, deleteMovie }) => {
  const navigate = useNavigate();

  const handleUpdateInfoClick = () => {
    navigate('/update-info');
  };

  const handleAddMovieClick = () => {
    navigate('/add-movie');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Profile</h1>
      <div className="mb-4">
        <label className="block mb-2">Name: <span className="font-semibold">{user.name}</span></label>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Username: <span className="font-semibold">{user.username}</span></label>
      </div>
      <div className="flex justify-between mb-4">
        <button
          onClick={handleUpdateInfoClick}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update Info
        </button>
        <button
          onClick={handleAddMovieClick}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Movie
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Movie Inventory</h2>
        <DashboardPages1 movies={movies} deleteMovie={deleteMovie} />
      </div>
    </div>
  );
};

export default Profile;
