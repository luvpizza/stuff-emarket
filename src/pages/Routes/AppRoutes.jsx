import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import NotFoundCard from '../../components/NotFoundCard/NotFoundCard';
import ProductCard from '../../components/ProductCard/ProductCard';
import { ROUTES } from '../../utils/router';
import CategoryPage from '../CategoryPage/CategoryPage';
import Homepage from '../Homepage/Homepage';
import ProductPage from '../ProductPage/ProductPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTES.PRODUCT} element={<Layout sidebarItem={<ProductCard/>}><ProductPage/></Layout>}/>
            <Route path={ROUTES.CATEGORY} element={<Layout><CategoryPage/></Layout>}/>
            <Route path={ROUTES.HOME} element={<Layout><Homepage/></Layout>}/>
            <Route path="*" element={<Layout sidebarItem={<NotFoundCard/>}/>}/>
        </Routes>
    );
};

export default AppRoutes;