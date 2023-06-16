import React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';

import s from "./Recommendations.module.scss"
const Recommendations = () => {
    const recommendations = [
        {
            categoryId: 2,
            title: "Sneakers",
            img: "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw96d51de8/images/a_08/M9160_A_08X1.jpg?sw=406",
        },{
            categoryId: 2,
            title: "Sneakers",
            img: "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw96d51de8/images/a_08/M9160_A_08X1.jpg?sw=406",
        },{
            categoryId: 2,
            title: "Sneakers",
            img: "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw96d51de8/images/a_08/M9160_A_08X1.jpg?sw=406",
        },{
            categoryId: 2,
            title: "Sneakers",
            img: "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw96d51de8/images/a_08/M9160_A_08X1.jpg?sw=406",
        },{
            categoryId: 2,
            title: "Sneakers",
            img: "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw96d51de8/images/a_08/M9160_A_08X1.jpg?sw=406",
        },
    ]

    return (
        <section className={s.recommendations}>
            <h1 className={s.recommendations__title}>Worth seeing</h1>
            <div className={s.recommendations__container}>
                {recommendations.length && recommendations.map(category =>  
                <CategoryCard title={category.title} id={category.categoryId} img={category.img}/>)}
            </div>
        </section>
    );
};

export default Recommendations;