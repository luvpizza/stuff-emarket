import React from 'react';
import TrendingItemList from '../../components/lists/TrendingItemList/TrendingItemList';
import NewYearSale from '../../components/NewYearSale/NewYearSale';
import Recommendations from '../../components/Recommendations/Recommendations';

const Homepage = () => {
    return (
        <main>
            <TrendingItemList/>
            <Recommendations/>
            <NewYearSale/>
            <TrendingItemList/>
        </main>
    );
};

export default Homepage;