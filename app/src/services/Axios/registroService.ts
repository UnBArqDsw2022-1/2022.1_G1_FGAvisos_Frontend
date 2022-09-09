import { BASE_API } from "./baseService";

export async function registerAccount(
    nome: string,
    email: string,
    senha: string,
    matricula: 0,
    numero_telefone: string,
    dt_nascimento: Date,
    tipo_usuario: string
) {
    try {
        const response = await BASE_API.post('/register', {
            nome: nome,
            email: email,
            senha: senha,
            matricula: matricula,
            numero_telefone: numero_telefone,
            dt_nascimento: dt_nascimento,
            tipo_usuario: tipo_usuario
        });
        return response;
    } catch (error: any) {
        if (error.response.status !== 401) {
            alert('Não foi possivel realizar o cadastro.\nA senha precisa ter 8 caracteres\nE o email ser estruturado por xxxx@xxxx.xxx');
        }
        console.error(`An unexpected error ocourred while creating a new client.${error}`);
    }
    return false;
}