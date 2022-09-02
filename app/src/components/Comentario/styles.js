import styled, { css } from "styled-components";

const Container = styled.div`
  margin: 1rem;
  background-color: white;
  border: 2px solid black;
  border-radius: 10px;
`;

const TituloContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    padding-left: 1rem;
  }
`;

const Texto = styled.p`
  display: block;
  padding-left: 1rem;
`;

export {Container, TituloContainer, Texto};