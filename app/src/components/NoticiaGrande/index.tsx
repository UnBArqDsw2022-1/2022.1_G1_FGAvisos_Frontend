import React, { FC } from 'react';
import TituloGenerico from '../TituloGenerico';
import TextoNoticia from '../TextoNoticia';
import * as Styles from './styles';
import FotoFGA from '../../assets/FotoFGA.svg';
import Tag from '../Tags';
import Tema from '../../utils/Tema';

interface ComponentProps {
    titulo: string;
    textoNoticia: string;
    dataHora: string;
}

const NoticiaGrande: FC<ComponentProps> = ({...props}) => {

    return(
        <>
        <Styles.Cartao>
            <Styles.Imagem>
                <img src={FotoFGA}></img>
            </Styles.Imagem>
            <Styles.ConteudoAviso>
                <Styles.Tags>
                    <Tag text={"TURMA SUSPENSA"} backgroundColor={"red"} colorFont={"white"} width={16}></Tag>
                    <Tag text={"AULA ONLINE"} backgroundColor={"blue"} colorFont={"white"} width={16}></Tag>
                </Styles.Tags>
                <Styles.TituloDataEHora>
                    <TituloGenerico 
                        titulo={props.titulo} 
                        tamanho={"40px"} 
                        cor={'white'}
                    ></TituloGenerico>
                    <Styles.DataHora>{props.dataHora}</Styles.DataHora>
                </Styles.TituloDataEHora>
                <TextoNoticia 
                    texto={props.textoNoticia} 
                    tamanhoTexto={"20px"} 
                    corTexto={"white"} 
                    largura={"100%"} 
                    altura={"234px"}
                ></TextoNoticia>
            </Styles.ConteudoAviso>
        </Styles.Cartao>
        </>
    );
}


export default NoticiaGrande;