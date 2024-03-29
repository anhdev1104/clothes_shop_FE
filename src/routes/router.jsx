import { Route, Routes } from 'react-router-dom';
import ScrollToTop from '../utils/ScrollToTop';

import MainLayout from '../layouts/MainLayout';

import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import NotFoundPage from '../pages/NotFoundPage';
import Collection from '../pages/Collection';
import ShowFashion from '../pages/ShowFashion';
import ProductDetails from '../pages/ProductDetails';
import DashboardPage from '../pages/admin';
import ProductAdmin from '../pages/admin/ProductAdmin';

const clientRouter = [
  {
    path: 'category/:id',
    element: ProductPage,
  },
  {
    path: 'products/:id',
    element: ProductDetails,
  },
  {
    path: 'collection',
    element: Collection,
  },
  {
    path: 'showfashion',
    element: ShowFashion,
  },
  {
    path: '/',
    element: HomePage,
  },
];

const adminRouter = [
  {
    path: 'dashboard',
    element: DashboardPage,
  },
  {
    path: 'admin/products',
    element: ProductAdmin,
  },
];

const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {clientRouter?.map(route => (
            <Route key={route.path} path={route.path} element={<route.element />} />
          ))}
        </Route>
        {adminRouter?.map(route => (
          <Route key={route.path} path={route.path} element={<route.element />} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
