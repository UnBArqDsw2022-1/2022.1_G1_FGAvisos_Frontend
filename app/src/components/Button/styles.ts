import styled from 'styled-components';
import {Tema} from '../../utils/Tema';

interface ButtonProps {
  backgroundColor: string;
  colorFont: string;
  width: number;
  height?: number | undefined;
}

export const ButtonStyle = styled.button<ButtonProps>`
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.colorFont};
  width: ${(props) => props.width}px;
  height: ${((props) => props.height ? props.height : 36)}px;
  border: 0.5px;
  border-radius: 7px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 50%);
  text-align: center;
  padding: 7px 0px 7px 0px;

  &:hover {
    cursor: pointer;
    background-color: ${Tema.colors.$primariaEscura};
  }
`;