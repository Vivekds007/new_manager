import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import AddMovie from './pages/AddMovie';
import UpdateMovie from './pages/UpdateMovie';
import UpdateInfo from './pages/UpdateInfo';
import Navbar from './components/Navbar';
import './styles/App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState({
    name: 'John Doe',
    username: 'johndoe',
    password: 'password123',
  });

  const addMovie = (movie) => {
    setMovies([...movies, { ...movie, id: Date.now().toString() }]);
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const updateUser = (updatedUser) => {
    setUser({ ...user, ...updatedUser });
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={<Profile user={user} updateUser={updateUser} movies={movies} deleteMovie={deleteMovie} addMovie={addMovie} />}
        />
        <Route path="/add-movie" element={<AddMovie addMovie={addMovie} />} />
        <Route
          path="/update-movie/:id"
          element={<UpdateMovie movies={movies} setMovies={setMovies} />}
        />
        <Route path="/update-info" element={<UpdateInfo user={user} updateUser={updateUser} />} />
      </Routes>
    </Router>
  );
};

export default App;
