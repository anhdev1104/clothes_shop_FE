import { showFashionApi } from '../../api/showFashionApi';

const getAllShowFashion = async () => {
    try {
        const { data } = await showFashionApi();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export default getAllShowFashion;
