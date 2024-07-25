import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUser = ({ addUser }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    role: 'Movie Seller',
    name: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(user);
    navigate('/profile');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Add User</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Role</label>
          <select
            name="role"
            value={user.role}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="Movie Seller">Movie Seller</option>
            <option value="Event Manager">Event Manager</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
