import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Parent from "./Props/Parent";
import UserSearch from "./State/UserSearch";

function App() {
  return (
    <div className="App">
      <Parent />
      <UserSearch />
    </div>
  );
}

export default App;
