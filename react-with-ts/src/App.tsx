import React, { useCallback, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Parent from "./Props/Parent";
import PersonList from "./component/PersonList";
import User from "./component/User";
import ThemeContextProvider from "./component/ThemeContext";
import Box from "./component/Box";
import UserForm from "./component/UserForm";
import Header from "./component/Header";
import Routing from "./component/Routing";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Header />
        <Routing />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
