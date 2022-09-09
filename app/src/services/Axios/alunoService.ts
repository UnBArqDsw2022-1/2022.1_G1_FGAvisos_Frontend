import { BASE_API } from './baseService';

export async function loginAluno(
    username: string, 
    password: string 
) {
    try {
        const response = await BASE_API.post('aluno/login', {
            username,
            password
        });
        return response;
    } catch (error: any) {
        if (error.response.status !== 401) {
            alert('Não foi possivel realizar a solicitação..');
        }
        console.error(`An unexpected error ocourred while creating a new client.${error}`);
    }
    return false;
}

export async function alunoLogado(
    token: string
) {
    try {
        const response = await BASE_API.get('aluno/logado', {

        });
        return response;
    } catch (error: any) {
        if (error.response.status !== 401) {
            alert('Não foi possivel realizar a solicitação.');
        }
        console.error(`An unexpected error ocourred while creating a new client.${error}`);
    }
    return false;
}

export async function getAlunos(
) {
    try {
        const response = await BASE_API.get('aluno/', {

        });
        return response;
    } catch (error: any) {
        if (error.response.status !== 401) {
            alert('Não foi possivel realizar a solicitação..');
        }
        console.error(`An unexpected error ocourred while creating a new client.${error}`);
    }
    return false;
}

export async function editAluno(
    token: string
) {
    try {
        const response = await BASE_API.put('aluno/', {

        });
        return response;
    } catch (error: any) {
        if (error.response.status !== 401) {
            alert('Não foi possivel realizar a solicitação..');
        }
        console.error(`An unexpected error ocourred while creating a new client.${error}`);
    }
    return false;
}

export async function cadastraAlunoTurma(
    username: string, 
    password: string 
) {
    try {
        const response = await BASE_API.post('aluno/', {
            username,
            password
        });
        return response;
    } catch (error: any) {
        if (error.response.status !== 401) {
            alert('Não foi possivel realizar a solicitação..');
        }
        console.error(`An unexpected error ocourred while creating a new client.${error}`);
    }
    return false;
}

export async function deleteAluno(
    token: string
) {
    try {
        const response = await BASE_API.delete('aluno/', {
        });
        return response;
    } catch (error: any) {
        if (error.response.status !== 401) {
            alert('Não foi possivel realizar a solicitação..');
        }
        console.error(`An unexpected error ocourred while creating a new client.${error}`);
    }
    return false;
}

export async function getOneAluno(
    username: string, 
    password: string,
    idAluno: string
) {
    try {
        const response = await BASE_API.get(`aluno/${idAluno}`, {

        });
        return response;
    } catch (error: any) {
        if (error.response.status !== 401) {
            alert('Não foi possivel realizar a solicitação..');
        }
        console.error(`An unexpected error ocourred while creating a new client.${error}`);
    }
    return false;
}

export async function getTurmasRegistradasAluno(
    username: string, 
    password: string 
) {
    try {
        const response = await BASE_API.get('aluno/turmas/registradas', {

        });
        return response;
    } catch (error: any) {
        if (error.response.status !== 401) {
            alert('Não foi possivel realizar a solicitação..');
        }
        console.error(`An unexpected error ocourred while creating a new client.${error}`);
    }
    return false;
}

export async function getAlunosVinculados(
    username: string, 
    password: string 
) {
    try {
        const response = await BASE_API.get('aluno/avisos/vinculados', {

        });
        return response;
    } catch (error: any) {
        if (error.response.status !== 401) {
            alert('Não foi possivel realizar a solicitação..');
        }
        console.error(`An unexpected error ocourred while creating a new client.${error}`);
    }
    return false;
}