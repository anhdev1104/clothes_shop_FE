import { useEffect, useState, createContext, useContext } from 'react';
import { getAllCategory, getDetailCategory } from '../services/category';
import getAllInstagram from '../services/instagram';

const homeContext = createContext();

function HomeProvider({ children }) {
    const [category, setCategory] = useState([]);
    const [categoryHome, setCategoryHome] = useState([]);
    const [product, setProduct] = useState([]);
    const [instagram, setInstagram] = useState([]);

    useEffect(() => {
        (async () => {
            setCategory(await getAllCategory());
        })();
    }, []);

    useEffect(() => {
        const categoryIDFirst = category[0]?._id;
        (async () => {
            setCategoryHome(await getDetailCategory(categoryIDFirst));
        })();
    }, [category]);

    useEffect(() => {
        const productHome = categoryHome.productID;
        setProduct(productHome);
    }, [categoryHome?.productID]);

    useEffect(() => {
        (async () => {
            setInstagram(await getAllInstagram());
        })();
    }, []);

    return <homeContext.Provider value={{ category, product, instagram }}>{children}</homeContext.Provider>;
}

function useHomeData() {
    const context = useContext(homeContext);
    if (typeof context === 'undefined') throw new Error('useHomeData must be used within a HomeProvider');
    return context;
}

export { useHomeData, HomeProvider };
