import styled from 'styled-components';
import {Tema} from '../../utils/Tema';


export const Corpo = styled.body`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CaixaCadastro = styled.div`
    height: 500px;
    width: 630px;
    background-color: ${Tema.colors.$primariaEscura};
    border: 0.5px;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

`;

export const CampoUsuario = styled.div`
    height: 54px;
    width: 493px;
    display: flex;
`;

export const CampoEmail = styled.div`
    height: 54px;
    width: 493px;
    display: flex;
`;

export const CampoSenha = styled.div`
    height: 54px;
    width: 493px;
    display: flex;
`;

export const CampoConfirmarSenha = styled.div`
    height: 54px;
    width: 493px;
    display: flex;
`;

export const SelecaoUsuario = styled.div`
    height: 54px;
    width: 493px;
    display: inline;
    margin: 15px 0;
`;


