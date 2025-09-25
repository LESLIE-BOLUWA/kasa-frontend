import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home/home";
import About from "./pages/About/About";
import Logement from "./pages/Logement/logement";
import Error from "./pages/Error/error";
import App from "./App";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          {/* Page d'accueil */}
          <Route path="/" element={<Home />} />

          {/* Page A propos */}
          <Route path="/about" element={<About />} />

          {/* Page Logement avec id dynamique */}
          <Route path="/logement/:id" element={<Logement />} />

          {/* Page 404 (catch-all) */}
          <Route path="*" element={<Error />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}
