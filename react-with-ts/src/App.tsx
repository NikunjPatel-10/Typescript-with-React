import React, { useCallback, useEffect, useState } from "react";
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
  const [resourceType, setResourceType] = useState("post");

  console.log("render");

  useEffect(() => {
    console.log("resourceType changed");
  }, [resourceType]);

  return (
    <div className="App">
      <ThemeContextProvider>
        <Parent />
        <PersonList name={nameList} />
        <User />
        <Box />
        <UserForm />
        <div>
          <button onClick={() => setResourceType("post")}>Post</button>
          <button onClick={() => setResourceType("users")}>Users</button>
          <button onClick={() => setResourceType("comments")}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
