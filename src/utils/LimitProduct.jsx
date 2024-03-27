import { useEffect, useState } from 'react';

const LimitProduct = (product, limit, skip) => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        setProduct(product?.slice(skip, skip + limit));
    }, [limit, product, skip]);

    return products;
};

export default LimitProduct;
