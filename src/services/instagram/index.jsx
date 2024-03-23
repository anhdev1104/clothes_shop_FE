import { instagramApi } from '../../api/instagramApi';

const getAllInstagram = async () => {
    try {
        const { data } = await instagramApi();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export default getAllInstagram;
