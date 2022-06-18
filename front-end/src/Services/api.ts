import axios from "axios";

const baseUrl = 'https://swapi.dev/api';

class API {
    constructor() {
        axios.defaults.baseURL = baseUrl;
    }

    async get(url: string, config?: any) {
        return axios.get(url, config);
    }
}

export default new API();