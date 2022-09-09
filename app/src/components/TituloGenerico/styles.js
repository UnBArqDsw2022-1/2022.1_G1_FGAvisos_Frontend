import styled, { css } from "styled-components";
import {Tema} from '../../utils/Tema';

const Titulo = styled.span`
  font-family: ${Tema.fonte.familia};
  font-style: normal;
  font-weight: ${Tema.fonte.negrito};
  line-height: 36px;
  color: ${(props) => props.cor};
  font-size: ${(props) => props.tamanho};
  margin: 20px;
`;

export default Titulo;
