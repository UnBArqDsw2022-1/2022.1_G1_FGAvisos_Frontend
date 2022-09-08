import React, {useState} from 'react';
import CartaoEditarPerfil from '../../components/CartaoEditarPerfil';
import CartaoMeuPerfil from '../../components/CartaoMeuPerfil';
import MeuPerfil from '../../components/MeuPerfil';
import { Editar } from '../../components/MeuPerfil/styles';
import {Conteudo} from './styles';

function PaginaPerfil(){

    const [editar, setEditar] = useState<boolean>(false)
    
    const eventoClick = (event: React.MouseEvent<Element, MouseEvent>) =>{
        event.preventDefault()
        setEditar(!editar)
        console.log(editar)
    }

    return (
        <Conteudo>
            <a onClick={(editar) => eventoClick(editar)}>
                <MeuPerfil 
                    editar={editar}
                ></MeuPerfil>
            </a>
            
            {editar ? 
                <CartaoEditarPerfil></CartaoEditarPerfil>
                :
                <CartaoMeuPerfil 
                    nome={"Antonio"} 
                    email={"antonio.email"}
                ></CartaoMeuPerfil>
            }
            
        </Conteudo>




    );
}

export default PaginaPerfil;