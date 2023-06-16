import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import MoreButton from '../UI/buttons/MoreButton/MoreButton';

import s from "./ItemList.module.scss"
const ItemList = ({itemlist, title}) => {
    return (
        <section className={s.itemlist}>
            <h1 className={s.itemlist__title}>{title}</h1>
            <div className={s.itemlist__container}>
                {(itemlist && itemlist.length > 5) ? itemlist.slice(0,5).map((item,idx) => {
                    return <ItemCard
                        key={idx}
                        id={item.id}
                        img={item.photos.length && item.photos[0]}
                        title={item.title}
                        category={item.category}
                        price={item.price}
                        sale={(item.sale > 0) && item.sale}
                        orders={item.orders}/>
                }) : "Товаров не найдено"}
            </div>
            {(itemlist && itemlist.length > 5) && <MoreButton className={s.more}>See more</MoreButton>}
        </section>
    );
};

export default ItemList;