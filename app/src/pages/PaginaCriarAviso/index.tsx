import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
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
    const { register, handleSubmit } = useForm();
    //const [tag, setTag] = useState<string>("");

    function setTag(str:string){
        console.log(str)
    }
    function onSubmit(data: any){
        const body = {
            titulo: data.titulo,
            corpo: data.corpoAviso,
            autor: data.autor,
            turma: data.turma,
           // tag: tag,
        };
        console.log(body)
    }

  return (
        <CriarAviso>
            {/* <BarraNavegacao/> */}
            <Corpo onSubmit={handleSubmit(onSubmit)}>
                <Conteiner>
                    <TituloGenerico 
                        titulo={'Título'} 
                        tamanho={Tema.fonte.tamanhos.media} 
                        cor={'black'}/>
                    <SelecionarTag tag={setTag}/>
                </Conteiner>
                <Input
                    text={'Título do aviso'}
                    backgroundColor={Tema.colors.$secundariaClara}
                    colorFont={'white'}
                    width={'100%'}
                    register={register("titulo")}/>
                <TituloGenerico 
                    titulo={'Aviso'} 
                    tamanho={Tema.fonte.tamanhos.media} 
                    cor={'black'}/>
                <AreaTexto register={register("corpoAviso")}/>
                <TituloGenerico 
                    titulo={'Autor(es)'} 
                    tamanho={Tema.fonte.tamanhos.media} 
                    cor={'black'}/>
                <Input
                    text={'Insira os autores'}
                    backgroundColor={Tema.colors.$secundariaClara}
                    colorFont={'white'}
                    width={'100%'}
                    register={register("autor")}/>
                <TituloGenerico 
                    titulo={'Turma'} 
                    tamanho={Tema.fonte.tamanhos.media} 
                    cor={'black'}/>
                <Conteiner>
                    <DropdownComponent
                        optionList={['Turma1', 'Turma2']}
                        placeholder={'Selecione a turma'}
                        register={register("turma")}
                        heigth={"fit-content"}
                        width={"40%"}
                    />
                    <Button
                        text={'ENVIAR'}
                        type={"submit"}
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