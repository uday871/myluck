import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Userlist1 = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://myl-erjr.onrender.com/user')
      .then(response => setUsers(response.data))
      .catch(error => setError('Error fetching user data: ' + error.message));
  }, []);

  return (
    <div className="userlist-container">
      <h2>User List</h2>
      <button className="login-button"><a href="/login">Login</a></button>
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <table className="user-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <style jsx>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #74ebd5, #ACB6E5);
          color: #333;
        }

        .userlist-container {
          max-width: 800px;
          margin: 40px auto;
          padding: 20px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 15px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }

        h2 {
          text-align: center;
          color: #333;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .login-button {
          display: block;
          margin: 20px auto;
          padding: 10px 20px;
          background-color: #74ebd5;
          color: #fff;
          border: none;
          border-radius: 5px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s;
        }

        .login-button a {
          color: #fff;
          text-decoration: none;
        }

        .login-button:hover {
          background-color: #4ecdc4;
        }

        .error {
          color: red;
          text-align: center;
          font-weight: bold;
        }

        .user-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        .user-table th,
        .user-table td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }

        .user-table th {
          background-color: #74ebd5;
          color: #fff;
        }

        .user-table tr:hover {
          background-color: #f1f1f1;
        }

        .user-table td {
          background-color: rgba(255, 255, 255, 0.8);
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .userlist-container {
            padding: 15px;
          }

          h2 {
            font-size: 1.8rem;
          }

          .login-button {
            width: 100%;
            font-size: 1rem;
          }

          .user-table th,
          .user-table td {
            font-size: 0.9rem;
            padding: 10px;
          }
        }

        @media (max-width: 480px) {
          h2 {
            font-size: 1.5rem;
          }

          .login-button {
            padding: 8px;
            font-size: 0.9rem;
          }

          .user-table th,
          .user-table td {
            padding: 8px;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Userlist1;
