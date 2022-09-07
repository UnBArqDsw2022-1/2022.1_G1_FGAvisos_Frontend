import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DropdownComponent from "./components/Dropdown";

function App() {
  return (
    <>
      <DropdownComponent optionList={[]} value={'Placeholder'}/>
    </>
  );
}

export default App;
