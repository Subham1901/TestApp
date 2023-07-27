import { useEffect, useState } from "react";
import "./App.css";
import Child from "./Child";
import A from "./A";
import B from "./B";
import HOC from "./HOC";

function App() {
  const [value, SetValue] = useState();
  const Fn = (inputValue) => {
    SetValue(inputValue);
  };

  return (
    <>
      <A />
      <B />
    </>
  );
}

export default App;
