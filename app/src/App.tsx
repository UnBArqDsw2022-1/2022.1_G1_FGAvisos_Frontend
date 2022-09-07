import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DropdownComponent from "./components/Dropdown";

function App() {
  return (
    <>
      <DropdownComponent optionList={['opcao1', 'opcao2', 'opcao3']} value={'Escolha uma turma'}/>
    </>
  );
}

export default App;
