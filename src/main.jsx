import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/about";
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* (on va ajouter un header juste après) */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />

        {/* Optionnel: route 404 pour tester */}
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
