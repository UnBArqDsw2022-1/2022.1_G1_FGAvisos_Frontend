import styled from "styled-components";
import Tema from "../../utils/Tema";

export const CaixaBuscaStyle = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${Tema.colors.$secundariaEscura};
    width: 500px;
    border-radius: 5px;
    Input{
        margin: 0px;
        box-shadow: none;
        font-size: 18px;
    }
`;

export const IconPesquisa = styled.img`
    display: inline-block;
`;