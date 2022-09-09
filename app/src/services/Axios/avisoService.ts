import { BASE_API } from './baseService';

export async function getAviso(
    username: string, 
    password: string 
) {
    try {
        const response = await BASE_API.get('aviso/', {
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

export async function postAviso(
    username: string, 
    password: string 
) {
    try {
        const response = await BASE_API.post('aviso/', {
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

export async function getOneAviso(
    username: string, 
    password: string,
    idAviso: string
) {
    try {
        const response = await BASE_API.get(`aviso/${idAviso}`, {
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

export async function editAviso(
    username: string, 
    password: string,
    idAviso: string
) {
    try {
        const response = await BASE_API.put(`aviso/${idAviso}`, {
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

export async function deleteAviso(
    username: string, 
    password: string,
    idAviso: string
) {
    try {
        const response = await BASE_API.delete(`aviso/${idAviso}`, {
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

export async function getAvisoByProfessor(
    username: string, 
    password: string,
    idProfessor: string
) {
    try {
        const response = await BASE_API.get(`aviso/${idProfessor}` , {
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