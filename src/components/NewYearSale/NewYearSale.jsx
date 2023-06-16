import React from 'react';
import MoreButton from '../UI/buttons/MoreButton/MoreButton';
import ny from "../../assets/images/newyear.png"
import ny1 from "../../assets/images/newyear1.png"

import s from "./NewYearSale.module.scss"
const NewYearSale = () => {
    return (
        <section className={s.newyear}>
            <div className={s.grid__left}>
                <div className={s.newyear__text}>
                    <span className={s.text_sm}>New Year</span>
                    <span className={s.text_lg}>Sale</span>
                </div>
                <MoreButton className={s.more}>See more</MoreButton>
                <img className={s.hovering_shoe} src={ny} alt="sale"/>
                <img className={s.hovering_tech} src={ny1} alt="sale"/>
            </div>
            <div className={s.grid__right}>
                <p className={s.save_up}>Save up to <span className={s.text_highlighted}>50%</span> off</p>
            </div>
        </section>
    );
};

export default NewYearSale;