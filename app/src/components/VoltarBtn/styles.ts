import styled from "styled-components";
import Tema from "../../utils/Tema";

export const VoltarBtnStyle = styled.div`
    display: flex;
    justify-content: space-between;
    width: 94px;
    color: ${Tema.colors.$primariaEscura};
    font-size: ${Tema.fonte.tamanhos.pequena};
    font-family: ${Tema.fonte.familia};
`;

export const IconVoltar = styled.img`
    display: inline-block;
`;