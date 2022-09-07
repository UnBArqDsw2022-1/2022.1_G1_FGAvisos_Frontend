import { Tema } from "../../utils/Tema";
import styled, { css } from "styled-components";

const AbrirTags = styled.div`
  display: flex;
  background-color: lightgray;
  width: 200px;
  border: 0.5px solid black;
  border-radius: 7px;
  padding: 0.5rem;
  justify-content: space-between;
  text-align: center;

  :hover {
    cursor: pointer;
    opacity: 80%;
  }
`;

const Container = styled.div`
  background-color: gray;
  padding: 1rem;
  width: 200px;
  align-items: center;
  border: 0.5px solid black;
  border-radius: 7px;
`;

const TagsContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    
    button {
        margin: 0.5rem 0;
    }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: black;
`;

const ButtonContainer = styled.div`
  position: relative;
  display: flex;
`;

const SinalSelecionadoContainer = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
`;

const SinalSelecionado = styled.div`
  position: relative;
  left: -20px;
`;

export {
  AbrirTags,
  Container,
  TagsContainer,
  Divider,
  ButtonContainer,
  SinalSelecionado,
  SinalSelecionadoContainer,
};