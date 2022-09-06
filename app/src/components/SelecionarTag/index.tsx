import React, { FC } from "react";
import Tema from "../../utils/Tema";

import TituloGenerico from "../TituloGenerico/index";
import Button from "../Button/index"

import * as Styles from "./styles.js";

const SelecionarTag: FC<any> = ({ ...props }) => {
  return (
    <>
      <Styles.AbrirTags>

      </Styles.AbrirTags>
      <Styles.Container>
        <TituloGenerico
          titulo={"Defina as tags:"}
          tamanho={Tema.fonte.tamanhos.media}
          cor={"white"}
        ></TituloGenerico>
        <Styles.TagsContainer>
          <Button
            text={"MUITO URGENTE"}
            backgroundColor={"black"}
            colorFont={"white"}
            width={140}
            height={30}
          ></Button>
          <Styles.Divider></Styles.Divider>
          <Button
            text={"URGENTE"}
            backgroundColor={"red"}
            colorFont={"white"}
            width={140}
            height={30}
          ></Button>
          <Styles.Divider></Styles.Divider>
          <Button
            text={"IMPORTANTE"}
            backgroundColor={"orange"}
            colorFont={"white"}
            width={140}
            height={30}
          ></Button>
          <Styles.Divider></Styles.Divider>
          <Button
            text={"AVISO"}
            backgroundColor={"green"}
            colorFont={"white"}
            width={140}
            height={30}
          ></Button>
          <Styles.Divider></Styles.Divider>
          <Button
            text={"PROVA"}
            backgroundColor={"yellow"}
            colorFont={"black"}
            width={140}
            height={30}
          ></Button>
        </Styles.TagsContainer>
      </Styles.Container>
    </>
  );
};

export default SelecionarTag;
