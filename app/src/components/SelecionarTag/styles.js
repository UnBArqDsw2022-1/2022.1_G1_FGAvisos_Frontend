import { Tema } from "../../utils/Tema";
import styled, { css } from "styled-components";

const AbrirTags = styled.div`
  background-color: gray;
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

export { AbrirTags, Container, TagsContainer, Divider };