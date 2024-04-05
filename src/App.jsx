import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Homepage';
import Signup from './components/Signup';
import LoginForm from './components/LoginForm'; 
import Jobs from './components/Joblisting';
import DriversPage from './components/DriversPage';
import Aside from './components/dashboard/Aside';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Jobs" element={<Jobs />} />
        <Route path="/Drivers" element={<DriversPage />} />
        <Route path="/dashboard" element={<Aside />} />
      </Routes>
    </Router>
  );
}

export default App;
