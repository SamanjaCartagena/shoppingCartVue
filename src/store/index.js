import {createStore} from 'vuex';

import productModule from './modules/products.js';


const store = createStore({
    modules:{
        prods:productsModule
    }
});

export default store;