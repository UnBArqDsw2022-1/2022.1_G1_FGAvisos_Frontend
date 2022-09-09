import axios from "axios";

export const BASE_API = axios.create({
    baseURL: "https://fgavisos-api.herokuapp.com/"
});