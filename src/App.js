import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeCompCall from './components/homepage/homeCompCall';
import Pricing from './components/Pricing/pricing';
import AboutCompCall from './components/about-section/aboutCompCall';
import PartnerMain from './components/Partnership-Section/PartnerMain';
import ComprehensivePage from './components/comprehensive-section/ComprehensivePage';
import './App.css';  // Global CSS file for styles

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeCompCall />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<AboutCompCall />} />
          <Route path="/partnership" element={<PartnerMain />} />
          <Route path="/comprehensive" element={<ComprehensivePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
