import React, { useState } from "react";

type userAuth = {
  name: string;
  email: string;
};

function user() {
  const [user, setUser] = useState<userAuth | null>(null);

  const handleLogin = () => {
    setUser({
      name: "Nikunj",
      email: "nikunj199842@gmail.com",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}></button>
      <button onClick={handleLogout}></button>
    </div>
  );
}

export default user;
