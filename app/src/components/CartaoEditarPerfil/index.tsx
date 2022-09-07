import React from 'react';
import {Cartao, FormularioPerfil, Icone, CampoEdicao, Botoes} from './styles';
import Input from '../Input/index';
import Button from '../Button/index';
import Tema from '../../utils/Tema';
import MeuPerfilLogo from '../../assets/MeuPerfilLogo2.svg';

function CartaoEditarPerfil(){


    return(
        <Cartao>
            <Icone 
                style={{ backgroundImage: `url(${MeuPerfilLogo})` }}
            >
                <a>Editar Foto de Perfil</a>
            </Icone>
                
            <FormularioPerfil>

                <CampoEdicao>
                    <Input 
                        text={"Nome"} 
                        backgroundColor={"white"} 
                        colorFont={"black"} 
                        width={358}
                    ></Input>
                </CampoEdicao>

                <CampoEdicao>
                    <Input 
                        text={"Senha"} 
                        backgroundColor={"white"} 
                        colorFont={"black"} 
                        width={358}
                    ></Input>
                </CampoEdicao>

                <CampoEdicao>
                    <Input 
                        text={"Confirmar senha"} 
                        backgroundColor={"white"} 
                        colorFont={"black"} 
                        width={358}
                    ></Input>
                </CampoEdicao>

                <Botoes>
                    <Button 
                        text={"Apagar Conta"} 
                        backgroundColor={"#FF5353"} 
                        colorFont={"white"} 
                        width={132}
                    ></Button>
                    <Button 
                        text={"Confirmar"} 
                        backgroundColor={Tema.colors.$secundariaClara} 
                        colorFont={"white"} 
                        width={132}
                    ></Button>
                </Botoes>

            </FormularioPerfil>


        </Cartao>

    );
}

export default CartaoEditarPerfil;