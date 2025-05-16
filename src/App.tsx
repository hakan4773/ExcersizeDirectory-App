import "./index.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Exercise from "./pages/Exercise";
import { FavoriteProvider } from "./context/FavoriteContext";
function App() {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  return (
    <Router>
      <FavoriteProvider>
        <Layout setSearchTerm={setSearchTerm}>
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route
              path="/exercise"
              element={<Exercise searchTerm={searchTerm} />}
            />
          </Routes>
        </Layout>
      </FavoriteProvider>
    </Router>
  );
}

export default App;
