import React from 'react';
import {Corpo, CaixaLogin, Conteudo, CampoUsuario, CampoSenha, BotaoConfirmar} from './styles';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Tema from '../../utils/Tema';
import Button from '../../components/Button';


function PaginaLogin({...props}){



    return(

        <Corpo>

            <Conteudo>
                <CaixaLogin>

                    <CampoUsuario>
                        <Input 
                            text={"Usuário/email"} 
                            backgroundColor={Tema.colors.$secundariaClara} 
                            colorFont={"white"}
                            width={"493px"}
                        ></Input>
                    </CampoUsuario>

                    
                    <CampoSenha>
                        <Input
                            text={"Senha"}
                            backgroundColor={Tema.colors.$secundariaClara}
                            colorFont={"white"}
                            width={"493px"}
                            type={"password"}
                        ></Input>
                    </CampoSenha>
                    
                    <div>
                        <a href={props.esqueciSenha}>Esqueci a senha?</a><br/><br/>
                    </div>

                    <BotaoConfirmar>
                        <Button
                            text={"Confirmar"}
                            backgroundColor={Tema.colors.$secundariaClara}
                            colorFont={"white"}
                            width = {203}
                        ></Button>
                    </BotaoConfirmar>
                    
                </CaixaLogin>
            </Conteudo>
    
        </Corpo>

    );
}

PaginaLogin.propTypes = {
    esqueciSenha : String
}

PaginaLogin.defaultProps = {
    esqueciSenha: "google.com"
}

export default PaginaLogin;