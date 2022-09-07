import React, { FC, useState } from "react";
import Tema from "../../utils/Tema";

import TituloGenerico from "../TituloGenerico/index";
import Button from "../Button/index"

import * as Styles from "./styles";

const SelecionarTag: FC<any> = ({ ...props }) => {

  const [muitoUrgente, setMuitoUrgente] = useState(false);
  const [urgente, setUrgente] = useState(false);
  const [importante, setImportante] = useState(false);
  const [aviso, setAviso] = useState(false);
  const [prova, setProva] = useState(false);

  return (
    <>
      <Styles.AbrirTags></Styles.AbrirTags>
      <Styles.Container>
        <TituloGenerico
          titulo={"Defina as tags:"}
          tamanho={Tema.fonte.tamanhos.media}
          cor={"white"}
        ></TituloGenerico>

        <Styles.TagsContainer>
          <Styles.ButtonContainer>
            {muitoUrgente ? (
              <Styles.SinalSelecionadoContainer>
                <Styles.SinalSelecionado>✔</Styles.SinalSelecionado>
              </Styles.SinalSelecionadoContainer>
            ) : null}
            <div onClick={() => {setMuitoUrgente(!muitoUrgente)}}>
              <Button
                text={"MUITO URGENTE"}
                backgroundColor={"black"}
                colorFont={"white"}
                width={140}
                height={30}
              ></Button>
            </div>
          </Styles.ButtonContainer>

          <Styles.Divider></Styles.Divider>

          <Styles.ButtonContainer>
            {urgente ? (
              <Styles.SinalSelecionadoContainer>
                <Styles.SinalSelecionado>✔</Styles.SinalSelecionado>
              </Styles.SinalSelecionadoContainer>
            ) : null}
            <div onClick={() => setUrgente(!urgente)}>
              <Button
                text={"URGENTE"}
                backgroundColor={"red"}
                colorFont={"white"}
                width={140}
                height={30}
              ></Button>
            </div>
          </Styles.ButtonContainer>

          <Styles.Divider></Styles.Divider>

          <Styles.ButtonContainer>
            {importante ? (
              <Styles.SinalSelecionadoContainer>
                <Styles.SinalSelecionado>✔</Styles.SinalSelecionado>
              </Styles.SinalSelecionadoContainer>
            ) : null}
            <div
              onClick={() => {
                setImportante(!importante);
              }}
            >
              <Button
                text={"IMPORTANTE"}
                backgroundColor={"orange"}
                colorFont={"white"}
                width={140}
                height={30}
              ></Button>
            </div>
          </Styles.ButtonContainer>

          <Styles.Divider></Styles.Divider>

          <Styles.ButtonContainer>
            {aviso ? (
              <Styles.SinalSelecionadoContainer>
                <Styles.SinalSelecionado>✔</Styles.SinalSelecionado>
              </Styles.SinalSelecionadoContainer>
            ) : null}
            <div
              onClick={() => {
                setAviso(!aviso);
              }}
            >
              <Button
                text={"AVISO"}
                backgroundColor={"green"}
                colorFont={"white"}
                width={140}
                height={30}
              ></Button>
            </div>
          </Styles.ButtonContainer>

          <Styles.Divider></Styles.Divider>

          <Styles.ButtonContainer>
            {prova ? (
              <Styles.SinalSelecionadoContainer>
                <Styles.SinalSelecionado>✔</Styles.SinalSelecionado>
              </Styles.SinalSelecionadoContainer>
            ) : null}
            <div
              onClick={() => {
                setProva(!prova);
              }}
            >
              <Button
                text={"PROVA"}
                backgroundColor={"yellow"}
                colorFont={"black"}
                width={140}
                height={30}
              ></Button>
            </div>
          </Styles.ButtonContainer>
        </Styles.TagsContainer>
      </Styles.Container>
    </>
  );
};

export default SelecionarTag;
