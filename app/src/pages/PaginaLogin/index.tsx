import React from 'react';
import { useForm } from "react-hook-form";
import {Corpo, CaixaLogin, Conteudo, CampoUsuario, CampoSenha, BotaoConfirmar} from './styles';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Tema from '../../utils/Tema';
import Button from '../../components/Button';
import TituloGenerico from '../../components/TituloGenerico';

type Inputs = {
    email: string,
    password: string,
  };
  
function PaginaLogin({...props}){

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const onSubmit = (data: any) => console.log(data) 
    
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);

    return(

        <Corpo>

            <Conteudo>
                <CaixaLogin onSubmit={handleSubmit(onSubmit)}>

                        <CampoUsuario>
                            <Input 
                                text="Usuário/email"
                                backgroundColor={Tema.colors.$secundariaClara} 
                                colorFont="white"
                                width="493px"
                                type="text"
                                register={register("email")}
                                ></Input>
                        </CampoUsuario>
                        
                        <CampoSenha>
                            <Input
                                text="Senha"
                                backgroundColor={Tema.colors.$secundariaClara}
                                colorFont="white"
                                width="493px"
                                type="password"
                                register={register('password')}
                                ></Input>
                        </CampoSenha>

                        <BotaoConfirmar>
                            <Button
                                text="Confirmar"
                                backgroundColor={Tema.colors.$secundariaClara}
                                colorFont="white"
                                width={203}
                                type="submit"
                                ></Button>
                        </BotaoConfirmar>                    
                </CaixaLogin>
            </Conteudo>
    
            <Footer></Footer>
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