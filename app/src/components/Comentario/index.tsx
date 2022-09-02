import React, { FC } from 'react';
import Tema from '../../utils/Tema';

import TituloGenerico from '../TituloGenerico/index'

interface TituloProps {
  titulo: string;
  texto: string;
  hora: string;
}

const Comentario: FC<TituloProps> = ({...props}) => {
  return (
    <>
      <TituloGenerico titulo={props.titulo} tamanho={Tema.fonte.tamanhos.grande} cor={Tema.colors.$primariaEscura}></TituloGenerico>
    </>
  );
};

export default Comentario;