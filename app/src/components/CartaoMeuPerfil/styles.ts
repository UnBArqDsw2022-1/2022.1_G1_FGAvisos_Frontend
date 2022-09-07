import styled from 'styled-components';
import {Tema} from '../../utils/Tema'

export const Cartao = styled.div`
    width: 694px;
    height: 320px;
    background-color: ${Tema.colors.$cinzaNeutro};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Icone = styled.div`
    width: 138px;
    height: 180px;

`;

export const DadosPerfil = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const BotaoSair = styled.div`
    height: 37px;
    width: 74px;

`;