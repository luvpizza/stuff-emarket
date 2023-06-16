import React from 'react';
import ItemList from '../../components/ItemList/ItemList';
import {useParams} from 'react-router-dom'

import s from "./CategoryPage.module.scss"
const CategoryPage = () => {
    const params = useParams()
    console.log(params);
    return (
        <main>
            <ItemList title={"Related Items"}/>
        </main>
    );
};

export default CategoryPage;