import React, { FC } from 'react';
import Tema from '../../utils/Tema';

import TituloGenerico from '../TituloGenerico/index'

import * as Styles from "./styles.js";

interface TituloProps {
  nomeAutor: string;
  texto: string;
  hora: string;
}

const Comentario: FC<TituloProps> = ({...props}) => {
  return (
    <>
        <Styles.Container>
            <Styles.TituloContainer>
                <TituloGenerico titulo={props.nomeAutor} tamanho={Tema.fonte.tamanhos.pequena} cor='black'></TituloGenerico>
                <span>{props.hora}</span>
            </Styles.TituloContainer>
            <Styles.Texto>{props.texto}</Styles.Texto>
        </Styles.Container>        
    </>
  );
};

export default Comentario;