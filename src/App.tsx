import React, { useEffect, useState } from "react";
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
import Card from "./components/Card";
// import { IContex } from "./components/store/context";
type jsondata = {
  id: number;
  name: string;
};

function App() {
  const [name, setName] = useState(initialContext.name);
  const [resData, setResData] = useState([]);
  const getData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.5992349&lng=72.9342451&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();

    console.log("mydata", jsonData.data.cards[2].data.data.cards);
    setResData(jsonData.data.cards[2].data.data.cards);
  };
  useEffect(() => {
    getData();
    console.log(resData);
  }, []);

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
        {/* <div> */}
        {/* {resData.map((employee: any) => {
          // console.log(employee.data.name);
          return (
            <div key={employee.data.id}>
              <h2>name: {employee.data.name}</h2>
              <h2>id: {employee.data.id}</h2>
              <hr />
            </div>
          );
        })} */}

        <Card allresData={resData} />
        {/* </div> */}
        {/* {resData} */}
      </div>
    </Context.Provider>
  );
}

export default App;
