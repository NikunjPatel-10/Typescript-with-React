import React, { useContext } from "react";
import { theme } from "./Theme";
import { ThemeContext } from "./ThemeContext";

const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <div
        style={{
          backgroundColor: theme.primary.main,
          color: theme.primary.text,
        }}
      >
        Lorem ipsum dolor sit amet.
      </div>
      <div
        style={{
          backgroundColor: theme.secondary.main,
          color: theme.secondary.text,
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </div>
    </>
  );
};

export default Box;
