import { BASE_API } from './baseService';

export async function getTurma(
    username: string, 
    password: string 
) {
    try {
        const response = await BASE_API.get('turma/', {
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

export async function postTurma(
    username: string, 
    password: string 
) {
    try {
        const response = await BASE_API.post('turma/', {
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

export async function getTurmaByProfessor(
    username: string, 
    password: string,
    idProfessor: string
) {
    try {
        const response = await BASE_API.get(`turma/professor/${idProfessor}`, {
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

export async function getOneTurma(
    username: string, 
    password: string,
    idTurma: string
) {
    try {
        const response = await BASE_API.get(`turma/${idTurma}`, {
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

export async function editTurma(
    username: string, 
    password: string,
    idTurma: string
) {
    try {
        const response = await BASE_API.put(`turma/${idTurma}`, {
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

export async function deleteTurma(
    username: string, 
    password: string,
    idTurma: string
) {
    try {
        const response = await BASE_API.delete(`turma/${idTurma}`, {
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