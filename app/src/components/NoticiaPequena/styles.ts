import styled from 'styled-components';
import { Tema } from "../../utils/Tema";

export const Cartao = styled.div`
    background: ${Tema.colors.$cinzaCard};
    width: 315px;
    height: 450px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    align-items: center;
    padding: 0.2rem 1rem;
    justify-content:space-around ;
`;

export const Tags = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    width: 100%;
    margin-bottom: 1rem;
`;

export const Titulo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 26px;
    width: 100%;
`;