import React from "react";

export interface IContex {
  name: string;
  setName: (name: string) => void;
}

export const initialContext: IContex = {
  name: "Nikunj",
  setName: () => {},
};
const Context = React.createContext(initialContext);

export default Context;
