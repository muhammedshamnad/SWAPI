import { observable, makeObservable, action } from "mobx";

class SavedStore {
    data: any = [];
    total: number = 0;
    constructor() {
        makeObservable(this, {
            data: observable,
            saveData: action,
            removeData: action
        })
    }
    saveData = (data: any) => {
        this.data = [...this.data, data];
        this.total = this.total + 1;
    }

    removeData = (index: number) => {
        console.log('remove called', index);
        const updatedData = this.data?.filter((item: any, itemIndex: number) => {
            console.log('item index', itemIndex, index)
            console.log(itemIndex !== index)
            return itemIndex !== index})
        console.log('after remove', updatedData);
        this.data = updatedData;
        this.total = this.total - 1;
    }
}

export default new SavedStore()