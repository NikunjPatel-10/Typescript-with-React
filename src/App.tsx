import React from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import Counter from "./components/Counter";
import DomRef from "./components/Ref/DomRef";

function App() {
  return (
    <div className="App">
      <Button handleClick={() => console.log("button clicked")} />
      <Input
        value=""
        handleChange={(event) => console.log("event triggered", event)}
      />
      <Container styles={{ border: "1px solid red", padding: "3rem" }} />
      <Counter />
      <DomRef />
    </div>
  );
}

export default App;
