import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/pages/HomePage";
import { AboutUsPage } from "./components/pages/AboutUsPage";
import { ProductPage } from "./components/pages/ProductPage";
import { Playground } from "./components/pages/Playground";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
