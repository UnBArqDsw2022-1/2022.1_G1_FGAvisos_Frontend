import React from 'react';
import {Corpo, BuscaEFiltro, ConteinerNoticiaGrande, ConteinerNoticiasPequenas} from './styles';
import Input from '../../components/Input';
import Tema from '../../utils/Tema';
import Button from '../../components/Button';
import NoticiaGrande from '../../components/NoticiaGrande';
import NoticiaPequena from '../../components/NoticiaPequena';
import DropdownComponent from '../../components/Dropdown';
import CaixaBusca from '../../components/CaixaBusca';


function PaginaAvisos(){
    
    return(
        <Corpo>
            <BuscaEFiltro>
                <CaixaBusca/>
                <DropdownComponent
                    width={"inherit"}
                    heigth={"inherit"}
                    optionList={["opção1", "opção2","opção3"]}
                    placeholder={"Filtrar por"}
                />
            </BuscaEFiltro>
            <ConteinerNoticiaGrande>
                <NoticiaGrande
                    dataHora={"01/01/2022 - 22:00"}
                    titulo={"Relembre 60 anos UNB"}
                    textoNoticia={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing."}
                />
            </ConteinerNoticiaGrande>
            <ConteinerNoticiasPequenas>
                <NoticiaPequena
                    textoNoticia={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna"}
                    titulo={"Relembre 60 anos UNB"}
                />
                <NoticiaPequena
                    textoNoticia={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna"}
                    titulo={"Relembre 60 anos UNB"}
                />
                <NoticiaPequena
                    textoNoticia={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna"}
                    titulo={"Relembre 60 anos UNB"}
                />
            </ConteinerNoticiasPequenas>
        </Corpo>
    )
}