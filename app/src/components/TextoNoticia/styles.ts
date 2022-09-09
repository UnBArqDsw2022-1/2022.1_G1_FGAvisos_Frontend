import styled from 'styled-components';
import {Tema} from '../../utils/Tema';


interface TextoNoticiaProps {
    texto: string;
    tamanhoTexto: string;
    corTexto: string;
    largura: string;
    altura: string;
}

export const Texto = styled.span<TextoNoticiaProps>`
  font-family: ${Tema.fonte.familia};
  font-style: normal;
  font-weight: ${Tema.fonte.normal};
  line-height: 100%;
  color: ${(props) => props.corTexto};
  font-size: ${(props) => props.tamanhoTexto};
  width: ${(props) => props.largura};
  height: ${(props) => props.altura};
`;
