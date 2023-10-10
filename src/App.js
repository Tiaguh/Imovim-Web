import "./App.css"

import HomePage from "./Pages/HomePage/HomePage.jsx";

import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

import Feed from "./Pages/Feed/Feed";

import MyProfile from "./Pages/MyProfile/MyProfile";
import SeeMore from "./Pages/SeeMore/SeeMore";
import Tags from "./Pages/Tags/Tags";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/my-profile" element={<MyProfile /> } />
        <Route path="/see-more" element={<SeeMore /> } />
        <Route path="/tags" element={<Tags /> } />

      </Routes>
    </Router>
  )
}