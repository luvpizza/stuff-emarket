import React from 'react';
import MoreButton from '../UI/buttons/MoreButton/MoreButton';
import bigsaleImg from "../../assets/images/bigsale.png"
import s from "./BigSale.module.scss"
const BigSale = () => {
    return (
        <section className={s.bigsale}>
            <div className={s.bigsale__text}>
                <h1 className={s.bigsale__backtext_lg}>Big Sale 20%</h1>
                <p className={s.bigsale__award}>The bestseller of 2022</p>
                <h2 className={s.bigsale__product}>Lennon R2D2<br/> with Nvidia 5090 Ti</h2>
            </div>
            <MoreButton className={s.more}>Shop Now</MoreButton>
            <img src={bigsaleImg} alt="big sale" className={s.bigsale__img}/>
        </section>
    );
};

export default BigSale;