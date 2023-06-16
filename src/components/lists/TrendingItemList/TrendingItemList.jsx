import React, {useEffect} from 'react';
import {useGetTrendingListQuery} from '../../../api/public/searchApi';
import ItemList from '../../ItemList/ItemList';

const TrendingItemList = () => {
    const {data, isLoading} = useGetTrendingListQuery()
    useEffect(() => {
        console.log(data);
    }, [data]);
    return (
        <div>
            {data && !isLoading && <ItemList itemlist={data} title={"Trending"}/>}
        </div>
    )
};

export default TrendingItemList;