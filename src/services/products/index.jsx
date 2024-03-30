import { productApi, productDetailApi } from '../../api/productApi';

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
