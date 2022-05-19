import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SuperheroesData from "./Components/SuperheroesData";
import Info from "./Components/Info";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SuperheroesData />} />
          <Route path="/register" element={<Register />} />
          <Route path="/view/:id" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
