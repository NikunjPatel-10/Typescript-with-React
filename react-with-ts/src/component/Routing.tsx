import React from "react";
import { Route, Routes } from "react-router-dom";
import User from "./User";
import Home from "./Home";
import UserList from "./Users";
import Accordion from "./Accordion";
import MultipleImg from "./MultipleImg";

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/user" element={<User />}></Route>
      <Route path="/users" element={<UserList />}></Route>
      <Route path="/accordion" element={<Accordion />}></Route>
      <Route path="/img-upload" element={<MultipleImg />}></Route>
    </Routes>
  );
};

export default Routing;
