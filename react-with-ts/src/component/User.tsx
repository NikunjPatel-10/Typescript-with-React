import React, { useEffect, useReducer, useRef, useState } from "react";
import Accordion from "./Accordion";
import Tooltip from "./Tooltip";

type counterState = {
  count: number;
};

type counterAction = {
  type: string;
};

const initialState = {
  count: 0,
};

type X = {
  a: string;
  b: number;
};

/**
 * how we extend another tye in type props
 */
type Y = X & {
  c: string;
  d: number;
};

interface A {
  a: string;
  b: number;
}

/**
 * how to extend another type in interface Props
 */
interface B extends A {
  x: string;
  y: string;
}

let data: B = {
  x: "abc",
  y: "xyz",
  a: "nikunj",
  b: 10,
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
      <div>
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
      </div>
      <h3> tooltip component</h3>
      <Tooltip text="this is a tooltip">
        <button> Hoover over me</button>
      </Tooltip>
    </>
  );
};

export default User;
