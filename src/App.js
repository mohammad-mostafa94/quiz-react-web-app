import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home';
import QuizInstructions from './components/Quiz/QuizInstructions';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play/instructions" element={<QuizInstructions />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
