import "./App.css"

import HomePage from "./Pages/HomePage/HomePage.jsx";

import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

import Feed from "./Pages/Feed/Feed";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feed" element={<Feed />} />

      </Routes>
    </Router>
  )
}