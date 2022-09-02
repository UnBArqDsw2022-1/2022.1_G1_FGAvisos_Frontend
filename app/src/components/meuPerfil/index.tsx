import React, { FC, useState, Dispatch } from "react";
import MeuPerfilLogo from "../../assets/MeuPerfilLogo.svg";
import {ConteinerMaior, Perfil, TextoEscolha, Editar} from  "./styles"; 
import { Tema } from "../../utils/Tema";





function MeuPerfil(){

    const [editar, setEditar] = useState<boolean>(false)

    const eventoClick = (prop: boolean) =>{
        setEditar(prop)
    }

    return(
        

        <ConteinerMaior>
            <Perfil 
                onClick={() => eventoClick(false)} 

                style = {{
                    color: editar ? "black" : "white", 
                    backgroundColor: editar ? Tema.colors.$cinzaNeutro : Tema.colors.$secundariaClara
                }}>

                <TextoEscolha>Meu Perfil</TextoEscolha>
            </Perfil>
            <Editar 
                onClick={() => eventoClick(true)} 

                style = {{
                    color: editar ? "white" : "black", 
                    backgroundColor: editar ? Tema.colors.$secundariaClara : Tema.colors.$cinzaNeutro
                }}>

                <TextoEscolha>Editar e alterar dados do perfil</TextoEscolha>
            </Editar>
        </ConteinerMaior>
    );
    
    

}



export default MeuPerfil;