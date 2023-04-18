import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NewNote from "./components/NewNote";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/new" element={<NewNote />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
