import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateInfo = ({ manager, updateManager }) => {
  const [updatedManager, setUpdatedManager] = useState({
    name: manager.name,
    username: manager.username,
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedManager({ ...updatedManager, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateManager(updatedManager);
    navigate('/profile');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Update Info</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={updatedManager.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Username</label>
          <input
            type="text"
            name="username"
            value={updatedManager.username}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={updatedManager.password}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateInfo;
