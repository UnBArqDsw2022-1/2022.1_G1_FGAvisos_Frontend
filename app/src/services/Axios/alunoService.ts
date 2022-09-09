import { BASE_API } from './baseService';

export async function login(
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
            alert('Não foi possivel realizar o Login.');
        }
        console.error(`An unexpected error ocourred while creating a new client.${error}`);
    }
    return false;
}