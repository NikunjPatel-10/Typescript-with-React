import React, { useEffect, useReducer, useRef, useState } from "react";

type counterState = {
  count: number;
};

type counterAction = {
  type: string;
};

const initialState = {
  count: 0,
};

const reducer = (state: counterState, action: counterAction) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };

    default:
      throw new Error("unsupported action-type");
  }
};

const User = () => {
  type AuthUser = {
    name: string;
    email: string;
  };

  /**
   * useState
   */
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  /**
   * useReducer example
   */
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * useref
   */
  const inputRef = useRef<HTMLInputElement>(null);

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
        <button
          onClick={() => dispatch({ type: "decrement" })}
          disabled={state.count === 1}
        >
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "increment" })}>
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
