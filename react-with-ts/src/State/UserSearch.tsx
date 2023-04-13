import React, { useState } from "react";

const User = [
  {
    name: "Nikunj",
    age: 20,
  },
  {
    name: "Ravi",
    age: 15,
  },
  {
    name: "abc",
    age: 22,
  },
];
const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
  const findUserHandler = () => {
    const foundUser = User.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={findUserHandler}>Find User</button>
      {user && user.name}
    </div>
  );
};

export default UserSearch;
