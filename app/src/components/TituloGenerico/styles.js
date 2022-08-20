import styled, { css } from "styled-components";

const Titulo = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  color: ${(props) => props.cor};
  font-size: ${(props) => props.tamanho};
`;

export default Titulo;
