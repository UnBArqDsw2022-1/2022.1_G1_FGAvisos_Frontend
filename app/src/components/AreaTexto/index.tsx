import React from 'react';
import { AreaTextoEstilo } from './styles';

export default function AreaTexto ({register}: any){
    return(
        <AreaTextoEstilo 
            placeholder='Escreva aqui seu aviso'
            {...register}/>
    )
}
