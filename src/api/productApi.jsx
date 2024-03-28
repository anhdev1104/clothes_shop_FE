import instance from './config';

export const productApi = () => instance.get('/products');
export const productDetailApi = id => instance.get(`/products/${id}`);
