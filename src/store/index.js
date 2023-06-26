import { configureStore } from '@reduxjs/toolkit';
import categoriasSlice from './reducers/categorias';
import carrinhoSlice from './reducers/carrinho'
import itensSlice from './reducers/itens';

const store = configureStore({
    reducer: {
        categorias: categoriasSlice,
        carrinho: carrinhoSlice,
        itens: itensSlice,
    }
});

export default store;