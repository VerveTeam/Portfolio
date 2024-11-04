import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/pages/HomePage";
import { AboutUsPage } from "./components/pages/AboutUsPage";
function App() {
  return (
    <>
        <Router>
        
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/aboutus" element={<AboutUsPage />} />
            </Routes>
        </Router>
    </>
  );
}

export default App;