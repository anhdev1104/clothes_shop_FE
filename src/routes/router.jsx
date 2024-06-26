import { Route, Routes } from 'react-router-dom';
import ScrollToTop from '../utils/ScrollToTop';

import MainLayout from '../layouts/MainLayout';
// Pages Client
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import NotFoundPage from '../pages/NotFoundPage';
import Collection from '../pages/Collection';
import ShowFashion from '../pages/ShowFashion';
import ProductDetails from '../pages/ProductDetails';
// Pages Admin
import DashboardPage from '../pages/admin';
import ProductAdmin from '../pages/admin/ProductAdmin';
import ProductDetailAdmin from '../pages/admin/ProductDetailAdmin';
import LayoutAdmin from '../layouts/admin/LayoutAdmin';
import UpdateProduct from '../pages/admin/UpdateProduct';
import CategoryAdmin from '../pages/admin/CategoryAdmin';
import UpdateCategory from '../pages/admin/UpdateCategory';
import LoginPage from '../pages/LoginPage';
import Register from '../pages/Register';
import Customer from '../pages/admin/Customer';
import SearchPage from '../pages/SearchPage';

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
    path: 'search',
    element: SearchPage,
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
    path: 'admin/categories/:id',
    element: UpdateCategory,
  },
  {
    path: 'admin/categories',
    element: CategoryAdmin,
  },
  {
    path: 'admin/customer',
    element: Customer,
  },
  {
    path: 'admin',
    element: DashboardPage,
  },
];

const accountRouter = [
  {
    path: 'login',
    element: LoginPage,
  },
  {
    path: 'register',
    element: Register,
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
        {accountRouter.map(route => (
          <Route key={route.path} path={route.path} element={<route.element />} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
