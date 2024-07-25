import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import AddUser from './pages/AddUser';
import UpdateUser from './pages/UpdateUser';
import UpdateInfo from './pages/UpdateInfo';
import Navbar from './components/Navbar';
import './styles/App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [manager, setManager] = useState({
    name: 'John Doe',
    username: 'johndoe',
    password: 'password123',
  });

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now().toString() }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateManager = (updatedManager) => {
    setManager({ ...manager, ...updatedManager });
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={<Profile manager={manager} updateManager={updateManager} users={users} deleteUser={deleteUser} />}
        />
        <Route path="/add-user" element={<AddUser addUser={addUser} />} />
        <Route
          path="/update-user/:id"
          element={<UpdateUser users={users} setUsers={setUsers} />}
        />
        <Route path="/update-info" element={<UpdateInfo manager={manager} updateManager={updateManager} />} />
      </Routes>
    </Router>
  );
};

export default App;
