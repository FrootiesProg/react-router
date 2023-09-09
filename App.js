import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import VendingMachine from "./components/VendingMachine";
import Snack1 from "./components/Snack1";
import Snack2 from "./components/Snack2";
import Snack3 from "./components/Snack3";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vending-machine" element={<VendingMachine />} />
          <Route path="/snack1" element={<Snack1 />} />
          <Route path="/snack2" element={<Snack2 />} />
          <Route path="/snack3" element={<Snack3 />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

export default App;
