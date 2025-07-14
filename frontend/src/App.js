import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortfolioGenerator from './components/PortfolioGenerator';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PortfolioGenerator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
