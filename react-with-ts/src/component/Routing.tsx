import React from "react";
import { Route, Routes } from "react-router-dom";
import User from "./User";
import Home from "./Home";
import UserList from "./Users";

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/user" element={<User />}></Route>
      <Route path="/users" element={<UserList />}></Route>
    </Routes>
  );
};

export default Routing;
