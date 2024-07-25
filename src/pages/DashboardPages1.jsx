import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPages1 = ({ users, deleteUser }) => {
  return (
    <div>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2">Role</th>
            <th className="py-2">Name</th>
            <th className="py-2">Username</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 border-t">{user.role}</td>
              <td className="py-2 border-t">{user.name}</td>
              <td className="py-2 border-t">{user.username}</td>
              <td className="py-2 border-t">
                <Link
                  to={`/update-user/${user.id}`}
                  className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                >
                  Update
                </Link>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
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

export default DashboardPages1;
