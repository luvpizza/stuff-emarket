import React from 'react';
import logo from "../../../assets/icons/header_icon.svg"
import youtube from "../../../assets/icons/youtube.svg"
import facebook from "../../../assets/icons/facebook.svg"
import insta from "../../../assets/icons/instagram.svg"
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../utils/router';


import s from "./Footer.module.scss"
const Footer = () => {
    return (
        <footer className={s.footer}>
            <Link to={ROUTES.HOME}>
                <img src={logo} alt="stuff logo"/>
            </Link>
            <span className={s.footer__by}>Developed by<span className={s.footer__highlighted}> Tomkovich</span>
            </span>

            <div className={s.footer__icons}>
                <div className={s.footer__icon}>
                    <img src={youtube} alt="" />
                </div>
                <div className={s.footer__icon}>
                    <img src={facebook} alt="" />
                </div>
                <div className={s.footer__icon}>
                    <img src={insta} alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;