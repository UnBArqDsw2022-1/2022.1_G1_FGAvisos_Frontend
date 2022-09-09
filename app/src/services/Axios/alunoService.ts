import { BASE_API } from './baseService';

export async function loginAluno(
    username: string, 
    password: string 
) {
    try {
        const response = await BASE_API.post('aluno/login', {
            username: username,
            password: password
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
    username: string, 
    password: string 
) {
    try {
        const response = await BASE_API.get('aluno/logado', {
            username: username,
            password: password
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
    username: string, 
    password: string 
) {
    try {
        const response = await BASE_API.get('aluno/', {
            username: username,
            password: password
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
    username: string, 
    password: string 
) {
    try {
        const response = await BASE_API.put('aluno/', {
            username: username,
            password: password
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
            username: username,
            password: password
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
    username: string, 
    password: string 
) {
    try {
        const response = await BASE_API.delete('aluno/', {
            username: username,
            password: password
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
            username: username,
            password: password
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
        const response = await BASE_API.post('aluno/turmas/registradas', {
            username: username,
            password: password
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
        const response = await BASE_API.post('aluno/avisos/vinculados', {
            username: username,
            password: password
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