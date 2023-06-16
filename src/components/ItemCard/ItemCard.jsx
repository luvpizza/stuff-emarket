import React from 'react';
import {Link} from 'react-router-dom'


import s from "./ItemCard.module.scss"
const ItemCard = ({id, img, title, category, price, sale, orders}) => {
    const categories = ["Computers", "Clothes", "Sneakers", "Furniture", "Cosmetics", "Travel", "Automotive"]
    return (
        <div className={s.item}>
            <Link to={`/product/${id}`} className={s.item__img}>
                {img ? <img src={img} placeholder="blur" alt="item"/> : <div className={s.no_photo}>Image not found</div>}
            </Link>

            <div className={s.item__description}>
                <div className={s.decription__top}>
                    <p className={s.item__title}>{title}</p>
                    <p className={s.item__category}>{categories[category]}</p>
                </div>
                
                <div className={s.item__pricing}>
                    <div className={s.prices__container}>
                        <h2 className={s.item__price}>${price}</h2>
                        {sale && <h2 className={s.item__sale}>${sale}</h2>}
                    </div>
                    <p className={s.item__orders}>{orders} people ordered</p>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;