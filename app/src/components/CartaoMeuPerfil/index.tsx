import React, { FC } from 'react';
import {Cartao, Icone, DadosPerfil, BotaoSair} from './styles'
import TituloGenerico from '../TituloGenerico/index';
import Tema from '../../utils/Tema';
import Button from '../Button/index';
import MeuPerfilLogo from '../../assets/MeuPerfilLogo2.svg';

interface CartaoMeuPerfilProps{
    nome: string;
    email: string;
}

const CartaoMeuPerfil: FC<CartaoMeuPerfilProps> = ({...props}) => {

    return(
        <Cartao>
            <Icone style={{ backgroundImage: `url(${MeuPerfilLogo})` }}></Icone>
            
            <DadosPerfil>
                <TituloGenerico 
                    titulo={props.nome} 
                    tamanho={Tema.fonte.tamanhos.media} 
                    cor={"black"}
                ></TituloGenerico>

                <TituloGenerico 
                    titulo={props.email} 
                    tamanho={Tema.fonte.tamanhos.media} 
                    cor={"black"}
                ></TituloGenerico>
                <BotaoSair>
                    <Button 
                        text={"Sair"} 
                        width={74} 
                        backgroundColor={Tema.colors.$secundariaClara} 
                        colorFont={"white"}
                    ></Button>
                </BotaoSair>
                

            </DadosPerfil>

        </Cartao>
    );

};

export default CartaoMeuPerfil