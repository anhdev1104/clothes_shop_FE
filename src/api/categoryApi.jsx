import instance from './config';

export const categoryApi = () => instance.get('/category');
export const categoryDetailApi = idCategory => instance.get(`/category/${idCategory}`);
export const addCategoryApi = newCategory => instance.post('/category', newCategory);
export const deleteCategoryApi = id => instance.delete(`/category/${id}`);
