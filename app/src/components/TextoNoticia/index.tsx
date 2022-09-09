import React, {FC} from 'react';
import {Texto} from './styles';

interface TextoNoticiaProps {
    texto: string;
    tamanhoTexto: string;
    corTexto: string;
    largura: string;
    altura: string;
}
  
const TextoNoticia: FC<TextoNoticiaProps> = ({...props}) => {
    return (
        <>
        <Texto {...props}>{props.texto}</Texto>
        </>
    );
};

export default TextoNoticia;