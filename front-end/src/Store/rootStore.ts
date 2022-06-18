import { create } from 'mobx-persist';

import savedStore from "./saved.store";
import homeStore from "./home.store";

class RootStore {
    savedStore = savedStore;
    homeStore = homeStore;
};

export default new RootStore();