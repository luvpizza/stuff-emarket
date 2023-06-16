import {configureStore} from '@reduxjs/toolkit';
import searchApi from '../api/public/searchApi';

const store = configureStore({
    reducer: {
        [searchApi.reducerPath]: searchApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(searchApi.middleware)

});

export default store;