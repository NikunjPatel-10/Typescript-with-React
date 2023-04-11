import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import Counter from "./components/Counter";
import DomRef from "./components/Ref/DomRef";
import Private from "./components/Auth/Private";
import Profile from "./components/Auth/Profile";
import Context, { initialContext } from "./components/store/Context";
import Hello from "./components/Hello";
import { log } from "console";
// import { IContex } from "./components/store/context";
function App() {
  const [name, setName] = useState(initialContext.name);

  // fetch(
  //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.5992349&lng=72.9342451&page_type=DESKTOP_WEB_LISTING"
  // )
  //   .then((res) => {
  //     res.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   });

  return (
    <Context.Provider
      value={{
        name,
        setName,
      }}
    >
      <div>
        <Button handleClick={() => console.log("button clicked")} />
        <Input
          value=""
          handleChange={(event) => console.log("event triggered", event)}
        />
        <Container styles={{ border: "1px solid red", padding: "3rem" }} />
        <Counter />
        <DomRef />

        <Private isLoggedIn={true} component={Profile} />
        <Hello />
      </div>
    </Context.Provider>
  );
}

export default App;
