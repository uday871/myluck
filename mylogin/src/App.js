import React from 'react';
import Userlist1 from './Userlist1'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login.js';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Userlist1 />} /> {/* Home route */}
          <Route path="/login" element={<Login />} /> {/* Login route */}
          <Route path="/userlist1" element={<Userlist1 />} /> {/* User list route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
