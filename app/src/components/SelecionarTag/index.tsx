import React, { FC, useState } from "react";
import Tema from "../../utils/Tema";

import TituloGenerico from "../TituloGenerico/index";
import Button from "../Button/index"

import * as Styles from "./styles";

interface SelecionarTagProps {
  setTag(str: string): void;
}

const SelecionarTag: FC<SelecionarTagProps> = ({ ...props }) => {

  const [mostrarTags, setMostrarTags] = useState<boolean>(false);

  const [muitoUrgente, setMuitoUrgente] = useState<boolean>(false);
  const [urgente, setUrgente] = useState<boolean>(false);
  const [importante, setImportante] = useState<boolean>(false);
  const [aviso, setAviso] = useState<boolean>(false);
  const [prova, setProva] = useState<boolean>(false);

  function returnTags(): string{
    let str: string = '';
    if(muitoUrgente) str = str.concat("MUITO URGENTE,");
    if(urgente) str = str.concat("URGENTE,");
    if(importante) str = str.concat("IMPORTANTE,");
    if(aviso) str = str.concat("AVISO,");
    if(prova) str = str.concat("PROVA");
    return str;
  }
  return (
    <Styles.TagsComponent>
      <Styles.AbrirTags
        onClick={() => {
          setMostrarTags(!mostrarTags);
          props.setTag(returnTags());
        }}
      >
        <span>TAGS</span>
        <i className="fa-solid fa-chevron-down"></i>
      </Styles.AbrirTags>

      {mostrarTags ? (
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
              <div
                onClick={() => {
                  setMuitoUrgente(!muitoUrgente);
                }}
              >
                <Button
                  type={"button"}
                  text={"MUITO URGENTE"}
                  backgroundColor={"black"}
                  colorFont={"white"}
                  width={140}
                  height={30}
                />
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
                  type={"button"}
                  text={"URGENTE"}
                  backgroundColor={"red"}
                  colorFont={"white"}
                  width={140}
                  height={30}
                />
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
                  type={"button"}
                  text={"IMPORTANTE"}
                  backgroundColor={"orange"}
                  colorFont={"white"}
                  width={140}
                  height={30}
                />
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
                  type={"button"}
                  text={"AVISO"}
                  backgroundColor={"green"}
                  colorFont={"white"}
                  width={140}
                  height={30}
                />
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
                  type={"button"}
                  text={"PROVA"}
                  backgroundColor={"yellow"}
                  colorFont={"black"}
                  width={140}
                  height={30}
                />
              </div>
            </Styles.ButtonContainer>
          </Styles.TagsContainer>
        </Styles.Container>
      ) : null}
    </Styles.TagsComponent>
  );
};

export default SelecionarTag;
