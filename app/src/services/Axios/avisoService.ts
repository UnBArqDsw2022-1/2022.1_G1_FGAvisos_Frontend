import { BASE_API } from './baseService';

export async function getAviso( 
) {
    try {
        const response = await BASE_API.get('aviso/', {

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
) {
    try {
        const response = await BASE_API.post('aviso/', {

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
    idAviso: string
) {
    try {
        const response = await BASE_API.get(`aviso/${idAviso}`, {

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
    idAviso: string
) {
    try {
        const response = await BASE_API.put(`aviso/${idAviso}`, {

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
    idAviso: string
) {
    try {
        const response = await BASE_API.delete(`aviso/${idAviso}`, {

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
    idProfessor: string
) {
    try {
        const response = await BASE_API.get(`aviso/${idProfessor}` , {

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