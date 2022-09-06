import React, { FC, useState, Dispatch } from "react";
import MeuPerfilLogo from "../../assets/MeuPerfilLogo.svg";
import {ConteinerMaior, Perfil, TextoEscolha, Editar, IconePerfil} from  './styles'; 
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
                    backgroundColor: editar ? Tema.colors.$cinzaNeutro : Tema.colors.$secundariaClara,
                    borderRadius: editar ? "10px 0px 0px 10px" : "10px",
                    border: editar ? "0px" :  "0.5px solid rgba(0, 0, 0, 0.5)"
                }}>
                <IconePerfil style={{ backgroundImage: `url(${MeuPerfilLogo})` }}></IconePerfil>
                <TextoEscolha>Meu Perfil</TextoEscolha>
            </Perfil>
            <Editar 
                onClick={() => eventoClick(true)} 

                style = {{
                    color: editar ? "white" : "black", 
                    backgroundColor: editar ? Tema.colors.$secundariaClara : Tema.colors.$cinzaNeutro,
                    borderRadius: editar ? "10px" : "0px 10px 10px 0px",
                    border: editar ? "0.5px solid rgba(0, 0, 0, 0.5)" : "0px"
                }}>

                <TextoEscolha>Editar e alterar dados do perfil</TextoEscolha>
            </Editar>
        </ConteinerMaior>
    );
    
    

}



export default MeuPerfil;