import React from 'react';

import s from "./MoreButton.module.scss"
const MoreButton = ({onClick, className, children}) => {
    return (
        <button
            className={className
            ? `${s.more__btn} ${className}`
            : s.more__btn}>{children}</button>
    );
};

export default MoreButton;