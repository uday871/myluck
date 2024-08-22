import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Userlist1 from './components/Userlist1';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Userlist1 />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/userlist1" element={<Userlist1 />} />
      </Routes>
    </Router>
  );
};

export default App;
