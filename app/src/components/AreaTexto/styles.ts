import styled from 'styled-components';
import {Tema} from '../../utils/Tema';

export const AreaTextoEstilo = styled.textarea`
    width: 100%;
    height: 300px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-color: ${Tema.colors.$secundariaClara};
    resize: none;
    &::-webkit-input-placeholder {
      color: white;
    }
    padding: 7px 3px 7px 10px;
    color : white;
    font-size: ${Tema.fonte.tamanhos.media};
    font-weight: ${Tema.fonte.normal};
    font-family: ${Tema.fonte.familia};
    outline: none;

`