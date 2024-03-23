import instance from './config';

export const categoryApi = () => instance.get('/category');
export const categoryDetailApi = idCategory => instance.get(`/category/${idCategory}`);
