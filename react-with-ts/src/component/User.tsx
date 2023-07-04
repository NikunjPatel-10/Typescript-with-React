import React, { useEffect, useReducer, useRef, useState } from "react";

type counterState = {
  count: number;
};

type counterAction = {
  type: string;
  payload: number;
};

const initialState = {
  count: 0,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };

    case "decrement":
      return { count: state.count - action.payload };
  }
};

const User = () => {
  type AuthUser = {
    name: string;
    email: string;
  };

  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef<HTMLInputElement>(null);
  // useEffect(() => {
  // }, []);

  const handleClick = () => {
    setUser({
      name: "Nikunj",
      email: "nikunj122@gmail.com",
    });
  };

  const dataHandler = () => {
    console.log(inputRef.current?.value);
  };

  return (
    <>
      <button onClick={handleClick}>login</button>
      <p>
        {user.name} {user.email}
        <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
          Increment
        </button>
        Count : {state?.count}
      </p>
      <div>
        <input type="text" ref={inputRef} onChange={dataHandler} />
      </div>
    </>
  );
};

export default User;
