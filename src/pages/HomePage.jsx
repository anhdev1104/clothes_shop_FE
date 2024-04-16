import { Link } from 'react-router-dom';
import { useHomeData } from '../contexts/homeContext';
import Insta from '../layouts/Insta';
import Sliders from '../layouts/Sliders';
import LimitProduct from '../utils/LimitProduct';
import Button from '../components/Button';

const HomePage = () => {
  const { product, category } = useHomeData();
  const products = LimitProduct(product, 8, 0);

  return (
    <>
      <section className="mt-[93px]">
        <Sliders />
        <section>
          <h1 className="text-center mt-[60px] mb-5 text-3xl">
            <Link to={`/category/${category[0]?._id}`} className="hover:opacity-55">
              NEW ARRIVAL
            </Link>
          </h1>
          <div className="container-page">
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
          <Button category={category} title="xem thêm" center />
        </section>
        <Insta />
      </section>
    </>
  );
};

export default HomePage;
