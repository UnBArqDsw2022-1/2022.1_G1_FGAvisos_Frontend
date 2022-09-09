import { BASE_API } from './baseService';

export async function getTurma( 
) {
    try {
        const response = await BASE_API.get('turma/', {
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
) {
    try {
        const response = await BASE_API.post('turma/', {
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
    idProfessor: string
) {
    try {
        const response = await BASE_API.get(`turma/professor/${idProfessor}`, {
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
    idTurma: string
) {
    try {
        const response = await BASE_API.get(`turma/${idTurma}`, {
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
    idTurma: string
) {
    try {
        const response = await BASE_API.put(`turma/${idTurma}`, {
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
    idTurma: string
) {
    try {
        const response = await BASE_API.delete(`turma/${idTurma}`, {
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