import styled from "styled-components";
import Tema from "../../utils/Tema";

export const CriarAviso = styled.body`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Corpo = styled.form`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    Input{
        margin: 0px;
        box-shadow: none;
        font-size: ${Tema.fonte.tamanhos.media};
    }
`;

export const Conteiner = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    Button{
        font-size: ${Tema.fonte.tamanhos.media};
        height: 100%;
    }

    select{
        font-size: ${Tema.fonte.tamanhos.media};
    }
`;
