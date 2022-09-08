import React, { FC, useState } from "react";
import Tema from "../../utils/Tema";

import TituloGenerico from "../TituloGenerico/index";
import Button from "../Button/index"

import * as Styles from "./styles";

const SelecionarTag: FC<any> = ({ ...props }) => {

  const [mostrarTags, setMostrarTags] = useState<boolean>(false);

  const [muitoUrgente, setMuitoUrgente] = useState<boolean>(false);
  const [urgente, setUrgente] = useState<boolean>(false);
  const [importante, setImportante] = useState<boolean>(false);
  const [aviso, setAviso] = useState<boolean>(false);
  const [prova, setProva] = useState<boolean>(false);

  return (
    <>
      <Styles.AbrirTags
        onClick={() => {
          setMostrarTags(!mostrarTags);
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
    </>
  );
};

export default SelecionarTag;
