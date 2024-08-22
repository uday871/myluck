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
    <div>
      <h2>User List</h2>
      <button><a href="/login">Login</a></button>
      {error ? <p>{error}</p> : (
        <ul>
          {users.map(user => (
            <li key={user._id}>
              <strong>Username:</strong> {user.username}<br />
              <strong>Password:</strong> {user.password}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Userlist1;
