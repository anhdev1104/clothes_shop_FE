import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { searchProducts } from '../services/products';

const SearchPage = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const paramValue = searchParams.get('name');

  useEffect(() => {
    (async () => {
      setProducts(await searchProducts(paramValue));
    })();
  }, [paramValue]);

  return (
    <main>
      <div className="container-page mt-[150px]">
        <h2 className="font-medium text-xl mb-5">
          Có {products.length} kết quả cho từ khóa “{paramValue}”
        </h2>
        <div className="flex flex-wrap mx-[-10px]">
          {products?.map(product => (
            <div className="px-[10px] mb-5 max-w-[25%] select-none" key={product._id}>
              <Link to={`/products/${product._id}`} className="block relative overflow-hidden mb-[10px] group">
                <img
                  src={`./src/assets/images/${product.images[0]}`}
                  alt=""
                  className="transition-all max-w-full ease-in duration-300"
                />
                <img
                  src={`./src/assets/images/${product.images[1]}`}
                  alt=""
                  className="transition-all max-w-full ease-in duration-300 absolute top-0 left-0 opacity-0 group-hover:opacity-100"
                />
              </Link>
              <div className="flex items-center justify-between">
                <span className="font-bold text-second">
                  {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ
                </span>
              </div>
              <div className="font-light text-sm my-2 cursor-pointer transition-all ease-linear duration-75 hover:font-bold">
                <Link to={`/products/${product._id}`}>{product.name}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SearchPage;
