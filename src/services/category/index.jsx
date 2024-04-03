import { addCategoryApi, categoryApi, categoryDetailApi, deleteCategoryApi } from '../../api/categoryApi';

export const getAllCategory = async () => {
  try {
    const { data } = await categoryApi();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getDetailCategory = async (idCategory = '') => {
  try {
    const { data } = await categoryDetailApi(idCategory);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addCategory = async newCategory => {
  try {
    const { data } = await addCategoryApi(newCategory);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategory = async id => {
  try {
    const { data } = await deleteCategoryApi(id);
    return data;
  } catch (error) {
    console.log(error);
  }
};
