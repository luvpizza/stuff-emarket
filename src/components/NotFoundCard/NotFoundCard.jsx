import React from 'react';

import s from "./NotFoundCard.module.scss"
const NotFoundCard = () => {
    return (
        <div className={s.not_found}>
            <h1 className={s.not_found__code}>404</h1>
            <p className={s.not_found__text}>Page / content is not found</p>
        </div>
    );
};

export default NotFoundCard;