import React, { FC, useState, Dispatch } from "react";
import MeuPerfilLogo from "../../assets/MeuPerfilLogo.svg";
import {ConteinerMaior, Perfil, TextoEscolha, Editar, IconePerfil} from  "./styles"; 
import { Tema } from "../../utils/Tema";


interface MeuPerfilProps{
    editar: boolean;
}


const MeuPerfil: FC<MeuPerfilProps> = ({...props}) =>{


    return(
        

        <ConteinerMaior>
            <Perfil 

                style = {{
                    color: props.editar ? "black" : "white", 
                    backgroundColor: props.editar ? Tema.colors.$cinzaNeutro : Tema.colors.$secundariaClara,
                    borderRadius: props.editar ? "10px 0px 0px 10px" : "10px",
                    border: props.editar ? "0px" :  "0.5px solid rgba(0, 0, 0, 0.5)"
                }}>
                <IconePerfil style={{ backgroundImage: `url(${MeuPerfilLogo})` }}></IconePerfil>
                <TextoEscolha>Meu Perfil</TextoEscolha>
            </Perfil>
            <Editar 

                style = {{
                    color: props.editar ? "white" : "black", 
                    backgroundColor: props.editar ? Tema.colors.$secundariaClara : Tema.colors.$cinzaNeutro,
                    borderRadius: props.editar ? "10px" : "0px 10px 10px 0px",
                    border: props.editar ? "0.5px solid rgba(0, 0, 0, 0.5)" : "0px"
                }}>

                <TextoEscolha>Editar e alterar dados do perfil</TextoEscolha>
            </Editar>
        </ConteinerMaior>
    );
    
    

}



export default MeuPerfil;