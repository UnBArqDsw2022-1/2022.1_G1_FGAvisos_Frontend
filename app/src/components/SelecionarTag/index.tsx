import React, { FC } from "react";
import Tema from "../../utils/Tema";

import TituloGenerico from "../TituloGenerico/index";
import Button from "../Button/index"

import * as Styles from "./styles.js";

const SelecionarTag: FC<any> = ({ ...props }) => {
  return (
    <>
      <Styles.TagsContainer>
        <Button
          text={"MUITO URGENTE"}
          backgroundColor={"black"}
          colorFont={"white"}
          width={140}
          height={30}
        ></Button>
        <Button
          text={"URGENTE"}
          backgroundColor={"red"}
          colorFont={"white"}
          width={140}
          height={30}
        ></Button>
        <Button
          text={"IMPORTANTE"}
          backgroundColor={"orange"}
          colorFont={"white"}
          width={140}
          height={30}
        ></Button>
        <Button
          text={"AVISO"}
          backgroundColor={"green"}
          colorFont={"white"}
          width={140}
          height={30}
        ></Button>
        <Button
          text={"PROVA"}
          backgroundColor={"yellow"}
          colorFont={"black"}
          width={140}
          height={30}
        ></Button>
      </Styles.TagsContainer>
    </>
  );
};

export default SelecionarTag;
