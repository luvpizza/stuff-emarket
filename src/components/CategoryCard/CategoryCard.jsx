import React from 'react';
import {Link} from 'react-router-dom';

import s from "./CategoryCard.module.scss"
const CategoryCard = ({img, title, id}) => {
    return (
        <Link to={`/category/${id}`}>
            <div className={s.category__card}>
                <div className={s.category__img}>
                    {img
                        ? <img src={img} alt=""/>
                        : <div className={s.not_found}>Image not found</div>}
                </div>
                <h1 className={s.category__title}>{title}</h1>
            </div>
        </Link>
    );
};

export default CategoryCard;