import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from '../pages/HomePage/HomePage';
import ModularSynthPage from '../pages/ModularSynthPage/ModularSynthPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HomePage at "/" */}
        <Route path="/" element={<HomePage />} />

        {/* Temporary placeholder for "/modular-synth" */}
        <Route
          path="/modular-synth"
          element={<ModularSynthPage />} />

        {/* Fallback 404 */}
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
