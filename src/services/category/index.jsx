import { categoryApi, categoryDetailApi } from '../../api/categoryApi';

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
