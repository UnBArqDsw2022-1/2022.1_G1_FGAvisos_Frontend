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
    display: flex;
    justify-content: center;
    align-items: flex-end;
    >a{
        width: 134px;
        height: 22px;        
        cursor: pointer;
        font-size: 14px;
    }
`;

export const FormularioPerfil = styled.div`
    width: 400px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    
`;

export const CampoEdicao = styled.div`
    width: 358px;
    height: 25px;
`;

export const Botoes = styled.div`
    width: 358px;
    height: 27px;
    display: flex;
    justify-content: space-between;
    
    margin-top: 30px;
`;
