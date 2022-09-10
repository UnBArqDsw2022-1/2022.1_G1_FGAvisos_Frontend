import styled from 'styled-components';

export const Corpo = styled.body`
    height: auto;
    width: 100%;
    /*overflow-y: scroll;
    scroll-snap-type: y mandatory;*/
    display: flex;
    flex-direction: column;
`;


export const BuscaEFiltro = styled.div`
    height: 55px;
    width: 35%;
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 15px;
    align-self: center;
`;


export const ConteinerNoticiaGrande = styled.div`
    width: 1000px;
    height: auto;
    align-self:center ;
    margin-top: 15px;
`;

export const ConteinerNoticiasPequenas = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 30px;
    align-self: center;
    /*display:flex;
    width: 100%;
    height: auto;
    justify-content: center;
    align-self: center;*/
    margin-top: 15px;
    margin-bottom: 15px;
`;