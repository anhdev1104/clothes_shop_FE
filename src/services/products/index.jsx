import { productApi } from '../../api/productApi';

export const getAllProduct = async () => {
    try {
        const { data } = await productApi();
        return data;
    } catch (error) {
        console.log(error);
    }
};
