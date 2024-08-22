import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Userlist1 = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token'); 

    if (token) {
      axios.get('https://your-server-url/api/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => setUser(response.data))
        .catch(error => setError('Error fetching user data: ' + error.message));
    } else {
      setError('No token found. Please log in.');
    }
  }, []);

  return (
    <div>
      <h2>User Data</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        user && (
          <div>
            <strong>Username:</strong> {user.username}<br />
          </div>
        )
      )}
    </div>
  );
};

export default Userlist1;
