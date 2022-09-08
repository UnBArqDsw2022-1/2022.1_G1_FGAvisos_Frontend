import styled from "styled-components";
import { Tema } from "../../utils/Tema";

export const ConteinerMaior = styled.div`
    width: 694px;
    height: 75px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    background-color: ${Tema.colors.$cinzaNeutro};
    position: relative;
    left: 20px;
    top:20px;
`;

export const Perfil = styled.button`
    width: 191px;
    height: 75px;
    border: 0.25px solid rgba(0, 0, 0, 0.5);
    box-shadow: 0px 4px 4px  rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    transition: all 0.6s ease 0s;
    display: flex;
    justify-content: space-around;
    align-items: center ;

    &:hover{
        cursor: pointer;
    }

`;

export const Editar = styled.button`
    width: 503px;
    height: 75px;
    border: 0.25px solid rgba(0, 0, 0, 0.5);
    box-shadow: 0px 4px 4px  rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.6s ease 0s;
    &:hover{
        cursor: pointer;
    }
    
`;


export const IconePerfil = styled.div`
    height: 100%;
    width: 20%;
    background: no-repeat center;
`

export const TextoEscolha = styled.h3`
  font-size: ${Tema.fonte.tamanhos.pequena};
  font-weight: ${Tema.fonte.normal};
  font-family: ${Tema.fonte.familia};
`;