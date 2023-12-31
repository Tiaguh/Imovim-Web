import "./App.css"

import HomePage from "./Pages/HomePage/HomePage";

import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

import Feed from "./Pages/Feed/Feed";
import Message from "./Pages/Message/Message";
import Search from "./Pages/Search/Search";

import CreatePost from "./Pages/CreatePost/CreatePost";
import Events from "./Pages/Events/Events";

import MyProfile from "./Pages/MyProfile/MyProfile";
import SeeMore from "./Pages/SeeMore/SeeMore";
import Tags from "./Pages/Tags/Tags";

import Friends from "./Pages/Friends/Friends"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notifications from "./Pages/Notifications/Notifications";
import CreateEvent from "./Pages/CreateEvent/CreateEvent";

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
        <Route path="/messages" element={<Message /> } />
        <Route path="/search" element={<Search /> } />
        <Route path="/events" element={<Events /> } />
        <Route path="/create-post" element={<CreatePost /> } />
        <Route path="/create-event" element={<CreateEvent /> } />
        <Route path="/notifications" element={<Notifications /> } />
        <Route path="/friends" element={<Friends /> } />
      </Routes>
    </Router>
  )
}