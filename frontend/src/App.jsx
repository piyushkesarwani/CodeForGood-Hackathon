import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./Pages/Homepage";
import { Register } from "./Pages/Register";
import { Login } from "./Pages/Login";
import { Cart } from "./Pages/Cart";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
