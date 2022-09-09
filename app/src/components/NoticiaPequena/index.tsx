import React, {FC}from 'react';
import TituloGenerico from '../TituloGenerico';
import TextoNoticia from '../TextoNoticia';
import * as Styles from './styles';
import Tag from '../Tags';
import Tema from '../../utils/Tema';

interface NoticiaPequenaProps {
    titulo: string;
    textoNoticia: string;
}



const  NoticiaPequena: FC<NoticiaPequenaProps> = ({...props}) => {


    return (
        <Styles.Cartao>
            <Styles.Tags>
                <Tag text={"TURMA SUSPENSA"} backgroundColor={"red"} colorFont={"white"} width={16}></Tag>
                <Tag text={"AULA ONLINE"} backgroundColor={"blue"} colorFont={"white"} width={16}></Tag>
            </Styles.Tags>
            <Styles.Titulo>
                <TituloGenerico
                    cor={"white"}
                    titulo={props.titulo}
                    tamanho={Tema.fonte.tamanhos.media}
                ></TituloGenerico>
            </Styles.Titulo>
            <TextoNoticia 
                texto={props.textoNoticia} 
                tamanhoTexto={Tema.fonte.tamanhos.xxPequena} 
                corTexto={"white"} 
                largura={"100%"} 
                altura={"234px"}
            ></TextoNoticia>
        </Styles.Cartao>


    );

}

export default NoticiaPequena;