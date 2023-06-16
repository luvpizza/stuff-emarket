import React from 'react';
import {Link} from 'react-router-dom';
import {ROUTES} from '../../../utils/router';
import logo from "../../../assets/icons/header_icon.svg"
import avatar from "../../../assets/icons/avatar.svg"
import search from "../../../assets/icons/searchbar.svg"
import favs from "../../../assets/icons/fav.svg"
import cart from "../../../assets/icons/cart.svg"

import s from "./Header.module.scss"
const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header__left}>
                <div className={s.header__logo}>
                    <Link to={ROUTES.HOME}>
                        <img src={logo} alt="stuff"/>
                    </Link>
                </div>
            </div>
            <div className={s.header__right}>
                <div className={s.header__info}>
                    <div className={s.header__user}>
                        <img src={avatar} alt=""/>
                        <span className={s.username}>Yana Tamikovich</span>
                    </div>
                </div>
                <div className={s.header__searchbar}>
                    <img src={search} alt="search icon"/>
                    <input className="searchbar" type="text" placeholder='Search for anything...'/>
                </div>
                <div className={s.header__icons}>
                <img src={favs} alt="favorites"/>
                <img src={cart} alt="cart"/>
                </div>
            </div>
        </header>
    );
};

export default Header;