import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:stateName" element={<Details key={window.location.pathname} />} />
      </Routes>
    </Router>
  );
}

export default App;
