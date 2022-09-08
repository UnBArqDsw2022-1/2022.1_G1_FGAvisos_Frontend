import styled from 'styled-components';
import { Tema } from "../../utils/Tema";

export const FooterStyle = styled.section`
    background: ${Tema.colors.$primariaEscura};
    width: 100%;
    height: 70px;
    font-family: ${Tema.fonte.familia};
    font-size: ${Tema.fonte.tamanhos.xxPequena};
    font-weight: ${Tema.fonte.clara};
    display: flex;
    justify-content: center;
    align-items: center;


    div{
        padding-left: 50px;
        padding-right: 50px;
    }
    .logoUnB{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 90%;
        justify-content: center ;
    }
    a {
        color: white;
    }

`;

