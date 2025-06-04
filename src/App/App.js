import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from '../pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HomePage at "/" */}
        <Route path="/" element={<HomePage />} />

        {/* Temporary placeholder for "/modular-synth" */}
        <Route
          path="/modular-synth"
          element={
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <h1>Modular Synth (Coming Soon)</h1>
              <p>This page is under construction.</p>
            </div>
          }
        />

        {/* Fallback 404 */}
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
