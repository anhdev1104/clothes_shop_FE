import instance from './config';

export const productApi = () => instance.get('/products');
// export const getProductCollection = () => instance.get('/collection.json');
// export const getProductShowFashion = () => instance.get('/showFashion.json');
