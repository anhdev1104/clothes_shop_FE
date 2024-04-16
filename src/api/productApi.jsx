import instance from './config';

export const productApi = () => instance.get('/products');
export const productDetailApi = id => instance.get(`/products/${id}`);
export const addProductApi = product => instance.post('/products', product);
export const updateProductApi = (id, product) => instance.put(`/products/${id}`, product);
export const deleteProductApi = id => instance.delete(`/products/${id}`);
export const searchProductApi = keysword => instance.get(`/search?name=${keysword}`);
