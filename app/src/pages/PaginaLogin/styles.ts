import styled from 'styled-components';
import Tema from '../../utils/Tema';


export const Corpo = styled.body`
    height: 100vh;
    width: 100%;
    /*overflow-y: scroll;
    scroll-snap-type: y mandatory;*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Conteudo = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
`;

export const CaixaLogin = styled.div`
    height: 424px;
    width: 630px;
    background-color: ${Tema.colors.$primariaEscura};
    border: 0.5px;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    a {
        color: white;
    }
`;

export const CampoUsuario = styled.div`
    height: 54px;
    width: 493px;
`;

export const CampoSenha = styled.div`
    height: 54px;
    width: 493px;
`;

export const BotaoConfirmar = styled.div`
    height: 48px;
    width: 203px;
`;
