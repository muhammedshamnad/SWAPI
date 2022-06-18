import api from "./api";

class HomeService {
    getData = async (entity: string, query?: string) => api.get(`/${entity}/?${query || ''}`) 
}

export default new HomeService();