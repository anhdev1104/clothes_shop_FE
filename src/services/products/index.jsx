import {
  addProductApi,
  deleteProductApi,
  productApi,
  productDetailApi,
  searchProductApi,
  updateProductApi,
} from '../../api/productApi';

export const getAllProduct = async () => {
  try {
    const { data } = await productApi();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductDetail = async id => {
  try {
    const { data } = await productDetailApi(id);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async newProduct => {
  try {
    const { data } = await addProductApi(newProduct);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updatedProductApi = async (id, productUpdate) => {
  try {
    const { data } = await updateProductApi(id, productUpdate);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async id => {
  try {
    const { data } = await deleteProductApi(id);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const searchProducts = async keysword => {
  try {
    const { data } = await searchProductApi(keysword);
    return data;
  } catch (error) {
    console.log(error);
  }
};
