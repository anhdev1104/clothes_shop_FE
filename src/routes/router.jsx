import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import NotFoundPage from '../pages/NotFoundPage';
import Collection from '../pages/Collection';

import ScrollToTop from '../utils/ScrollToTop';
import ShowFashion from '../pages/ShowFashion';

const clientRouter = [
    {
        path: 'category/:id',
        element: ProductPage,
    },
    {
        path: '/collection',
        element: Collection,
    },
    {
        path: '/showfashion',
        element: ShowFashion,
    },
    {
        path: '/',
        element: HomePage,
    },
];

const AppRouter = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    {clientRouter.map(route => (
                        <Route key={route.path} path={route.path} element={<route.element />} />
                    ))}
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
};

export default AppRouter;
