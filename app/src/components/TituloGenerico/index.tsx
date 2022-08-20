import React, { FC } from 'react';
import Titulo from "./styles.js";

interface TituloProps {
  titulo: string;
  tamanho: string;
  cor: string;
}

const TituloGenerico: FC<TituloProps> = ({...props}) => {
  return (
    <>
      <Titulo {...props}>{props.titulo}</Titulo>
    </>
  );
};

export default TituloGenerico;