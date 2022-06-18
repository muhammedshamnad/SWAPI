import { observable, makeObservable, action } from "mobx";
import homeService from "../Services/home.service";

class HomeStore {
    data: any = [];
    total: number = 0;
    constructor() {
        makeObservable(this, {
            data: observable,
            fetchData: action
        })
    }

    fetchData = async (entity: string, query?: string) => {
        this.data = []
        const response = await homeService.getData(entity, query);
        this.data = response?.data?.results;
        this.total = response?.data?.count;
    }
}

export default new HomeStore()