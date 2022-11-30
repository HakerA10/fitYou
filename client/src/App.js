
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Clogin, E404, Home, Signup } from "./Pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Clogin />} />
        <Route path="/*" element={<E404 />} />
      </Routes>
    </div>
  );
}

export default App;
