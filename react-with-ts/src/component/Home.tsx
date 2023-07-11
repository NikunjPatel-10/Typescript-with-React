import React, { useEffect, useState } from "react";
import Parent from "../Props/Parent";
import PersonList from "./PersonList";
import User from "./User";
import UserForm from "./UserForm";
import Box from "./Box";

const Home: React.FC = () => {
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
    <>
      {" "}
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
      <h1>{resourceType}</h1>;
    </>
  );
};

export default Home;
