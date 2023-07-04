import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Parent from "./Props/Parent";
import PersonList from "./component/PersonList";
import User from "./component/User";
import ThemeContextProvider from "./component/ThemeContext";
import Box from "./component/Box";
import UserForm from "./component/UserForm";

function App() {
  const nameList = [
    {
      first: "nikunj",
      last: "patel",
    },
    {
      first: "abc",
      last: "xyz",
    },
    {
      first: "ghi",
      last: "fhdf",
    },
  ];
  return (
    <div className="App">
      <ThemeContextProvider>
        <Parent />
        <PersonList name={nameList} />
        <User />
        <Box />
        <UserForm />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
