import React, { useState } from 'react';
import {
        Corpo, 
        CaixaCadastro, 
        CampoConfirmarSenha, 
        CampoSenha, 
        CampoEmail, 
        CampoUsuario,
        SelecaoUsuario
        } from './styles';
import Input from '../../components/Input';
import {Tema} from '../../utils/Tema';
import DropdownComponent from '../../components/Dropdown';
import Button from '../../components/Button';

function PaginaCadastro(){
    const options = ["Professor", "Aluno", "Coordenador"]

    return(
        <Corpo>
            <CaixaCadastro>
                <CampoUsuario>
                    <Input 
                        text={"Usuário"} 
                        backgroundColor={Tema.colors.$secundariaClara} 
                        colorFont={"white"}
                        width={"493px"}
                    ></Input>
                </CampoUsuario>
                
                <CampoEmail>
                    <Input 
                        text={"Email"} 
                        backgroundColor={Tema.colors.$secundariaClara} 
                        colorFont={"white"}
                        width={"493px"}
                    ></Input>
                </CampoEmail>
                
                <CampoSenha>
                    <Input 
                        text={"Senha"} 
                        backgroundColor={Tema.colors.$secundariaClara} 
                        colorFont={"white"}
                        width={"493px"}
                        type={"password"}
                    ></Input>
                </CampoSenha>

                
                <CampoConfirmarSenha>
                    <Input 
                        text={"Confirmar senha"} 
                        backgroundColor={Tema.colors.$secundariaClara} 
                        colorFont={"white"}
                        width={"493px"}
                        type={"password"}
                    ></Input>
                </CampoConfirmarSenha>

                <SelecaoUsuario>
                    <DropdownComponent
                        optionList={options}
                        placeholder={"Selecione o tipo de usuário"}
                        width={"493px"}
                        heigth={"54px"}
                    ></DropdownComponent>
                </SelecaoUsuario>
                
                

                <Button
                    text={"Cadastrar"}
                    backgroundColor={Tema.colors.$secundariaClara}
                    colorFont={"white"}
                    width = {203}
                ></Button>

            </CaixaCadastro>
        </Corpo>

    );

}

export default PaginaCadastro;