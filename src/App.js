import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Posts from "./pages/Post";
import CreatePost from "./pages/form";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<CreatePost />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Layout>
  );
}

export default App;
