import React, { FC } from 'react';
import Titulo from "./styles.js";

interface TituloProps {
  titulo: string;
  tamanho?: string;
}

const TituloGenerico: FC<TituloProps> = ({ titulo, tamanho }) => {
  return (
    <>
      <Titulo>{titulo}</Titulo>
    </>
  );
};

export default TituloGenerico;