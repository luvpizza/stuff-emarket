import React from 'react';
import {Link} from 'react-router-dom';

import s from "./Sidebar.module.scss"
const Sidebar = () => {
    const categories = [
        {
            categoryId: "computers",
            title: "Computers"
        }, {
            categoryId: "clothes",
            title: "Clothes"
        }, {
            categoryId: "shoes",
            title: "Shoes"
        }, {
            categoryId: "furniture",
            title: "Furniture"
        }, {
            categoryId: "cosmetics",
            title: "Cosmetics"
        }, {
            categoryId: "travel",
            title: "Travel"
        }, {
            categoryId: "automotive",
            title: "Automotive"
        }
    ]

    return (
        <div className={s.sidebar}>
            <h1 className={s.sidebar__title}>Categories</h1>
            <div className={s.category__list}>
                {categories.map((category,idx) => <Link key={idx} to={`/category/${category.categoryId}`} className={s.category__link}>{category.title}</Link>)}
            </div>
            <div className={s.sidebar__misc}>
                <p className={s.sidebar__help}>Help</p>
                <p className={s.sidebar__terms}>Terms & Conditions</p>
            </div>
        </div>
    );
};

export default Sidebar;