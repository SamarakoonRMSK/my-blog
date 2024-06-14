import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import SearchPage from "./pages/SearchPage";
import PrivateRoute from "./components/PrivateRoute";
import UpdatePost from "./pages/UpdatePost";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<SearchPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/update-post/:postId" element={<UpdatePost />} />
        <Route path="/post/:postSlug" element={<PostPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
