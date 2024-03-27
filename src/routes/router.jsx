import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import NotFoundPage from '../pages/NotFoundPage';
import MainLayout from '../layouts/MainLayout';
import ScrollToTop from '../utils/ScollToTop';
import Collection from '../pages/Collection';

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
