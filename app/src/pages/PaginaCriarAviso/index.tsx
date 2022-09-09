import React from 'react';
import AreaTexto from '../../components/AreaTexto';
import BarraNavegacao from '../../components/barraNavegacao';
import Button from '../../components/Button';
import DropdownComponent from '../../components/Dropdown';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import SelecionarTag from '../../components/SelecionarTag';
import TituloGenerico from '../../components/TituloGenerico';
import Tema from '../../utils/Tema';

import { CriarAviso, Corpo, Conteiner } from './styles';

const PaginaCriarAviso: React.FC = () => {
  return (
        <CriarAviso>
            {/* <BarraNavegacao/> */}
            <Corpo>
                <Conteiner>
                    <TituloGenerico 
                        titulo={'Título'} 
                        tamanho={Tema.fonte.tamanhos.media} 
                        cor={'black'}/>
                    <SelecionarTag/>
                </Conteiner>
                <Input
                    text={'Título do aviso'}
                    backgroundColor={Tema.colors.$secundariaClara}
                    colorFont={'white'}
                    width={'100%'}/>
                <TituloGenerico 
                    titulo={'Aviso'} 
                    tamanho={Tema.fonte.tamanhos.media} 
                    cor={'black'}/>
                <AreaTexto/>
                <TituloGenerico 
                    titulo={'Autor(es)'} 
                    tamanho={Tema.fonte.tamanhos.media} 
                    cor={'black'}/>
                <Input
                    text={'Insira os autores'}
                    backgroundColor={Tema.colors.$secundariaClara}
                    colorFont={'white'}
                    width={'100%'}/>
                <TituloGenerico 
                    titulo={'Turma'} 
                    tamanho={Tema.fonte.tamanhos.media} 
                    cor={'black'}/>
                <Conteiner>
                    <DropdownComponent
                        optionList={['Turma1', 'Turma2']}
                        value={'Selecione a turma'}
                    />
                    <Button
                        text={'ENVIAR'}
                        backgroundColor={Tema.colors.$primariaEscura}
                        colorFont={'white'}
                        width={285}
                        />
                </Conteiner>
            </Corpo>
            <Footer/>
        </CriarAviso>
  );
}

export default PaginaCriarAviso;