import styled from 'styled-components';

export const Corpo = styled.body`
    height: 100vh;
    width: 100%;
    /*overflow-y: scroll;
    scroll-snap-type: y mandatory;*/
    display: flex;
    flex-direction: column;
`;


export const BuscaEFiltro = styled.div`
    height: 70px;
    width: 100%;
`;


export const ConteinerNoticiaGrande = styled.div`
    width: 1000px;
    height: 222px;
`;

export const ConteinerNoticiasPequenas = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 30px;
    width: 100%;
    height: 500px;

`;