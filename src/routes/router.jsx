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
import ProductDetailAdmin from '../pages/admin/ProductDetailAdmin';
import LayoutAdmin from '../layouts/admin/LayoutAdmin';
import UpdateProduct from '../pages/admin/UpdateProduct';

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
    path: 'admin/products/:id',
    element: ProductDetailAdmin,
  },
  {
    path: 'admin/updateproduct/:id',
    element: UpdateProduct,
  },
  {
    path: 'admin/products',
    element: ProductAdmin,
  },
  {
    path: 'admin',
    element: DashboardPage,
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
        <Route path="/" element={<LayoutAdmin />}>
          {adminRouter?.map(route => (
            <Route key={route.path} path={route.path} element={<route.element />} />
          ))}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
