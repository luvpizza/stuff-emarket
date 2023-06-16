import React from 'react';
import BigSale from '../BigSale/BigSale';
import Sidebar from '../Sidebar/Sidebar';
import Footer from './Footer/Footer';
import Header from './Header/Header';

import s from "./Layout.module.scss"
const Layout = ({children, sidebarItem}) => {
    return (
        <div className={s.layout__content}>
            <Header/>
            <div className={s.sidebar__grid}>
                <Sidebar/>
                {sidebarItem ? sidebarItem : <BigSale/>}
            </div>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;