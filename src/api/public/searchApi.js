import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../BASE_URL';

export const searchApi = createApi({
    reducerPath: 'searchApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: (id) => `/products/${id}`
        }),
        getTrendingList: builder.query({
            query: () => `/trending`
        })
    })
});

export const {
    useGetProductQuery,
    useGetTrendingListQuery
} = searchApi;

export default searchApi;