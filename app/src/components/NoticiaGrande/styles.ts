import styled from 'styled-components';
import { Tema } from "../../utils/Tema";


export const Cartao = styled.div`
    background: ${Tema.colors.$cinzaCard};
    width: 1000px;
    height: 500px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
`;

export const Imagem = styled.div`
    width: 1000px;
    height: 222px;
    img{
        width: 100%;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border: none;
        object-fit: fill;
    }
`;

export const ConteudoAviso = styled.div`
    box-sizing: border-box;
    width: 1000px;
    height: 443px;
    padding: 1rem 5rem;
`;

export const Tags = styled.div`
    display: flex;
    height: 25px;
    width: 100%;
    margin-bottom: 1rem;
    justify-content: flex-end;
`;

export const TituloDataEHora = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 26px;
    width: 100%;
    margin-bottom: 1rem;
`;

export const DataHora = styled.span`
    display: flex;
    justify-content: flex-end;
    width: 300px;
    height: 26px;
    color: white;
`;


