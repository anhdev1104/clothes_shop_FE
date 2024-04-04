import { useEffect, useState } from 'react';
import { getDetailCategory } from '../services/category';

const ProductOfCate = id => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct([]);

    (async () => {
      const productCategory = await getDetailCategory(id);
      setProduct(productCategory);
    })();
  }, [id]);

  return product;
};

export default ProductOfCate;
