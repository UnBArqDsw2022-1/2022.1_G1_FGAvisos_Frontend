import { BASE_API } from './baseService';

export async function professorLogin(
    username: string, 
    password: string 
) {
    try {
        const response = await BASE_API.post('professor/login', {
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

export async function professorLogado(
    username: string, 
    password: string 
) {
    try {
        const response = await BASE_API.get('professor/logado', {
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

export async function getProfessor(
    username: string, 
    password: string 
) {
    try {
        const response = await BASE_API.get('professor/', {
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

export async function editProfessor(
    username: string, 
    password: string 
) {
    try {
        const response = await BASE_API.put('professor/', {
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

export async function deleteProfessor(
    username: string, 
    password: string 
) {
    try {
        const response = await BASE_API.delete('professor/', {
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

export async function getOneProfessor(
    username: string, 
    password: string,
    id: string
) {
    try {
        const response = await BASE_API.get(`professor/${id}`, {
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