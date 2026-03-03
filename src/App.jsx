import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Imprint from "./pages/Imprint";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imprint" element={<Imprint />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
