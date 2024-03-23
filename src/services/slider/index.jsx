import { sliderApi } from '../../api/sliderApi';

const getAllSlider = async () => {
    try {
        const { data } = await sliderApi();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export default getAllSlider;
