import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./pages/landing.page";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/products";
import NotFound from "./pages/not.found";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
