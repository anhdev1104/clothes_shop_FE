import { collectionApi } from '../../api/collectionApi';

const getAllCollection = async () => {
    try {
        const { data } = await collectionApi();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export default getAllCollection;
