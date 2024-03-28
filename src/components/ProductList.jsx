import ProductOfCate from '../utils/ProductOfCate';
import ProductItem from './ProductItem';
import LimitProduct from '../utils/LimitProduct';

const ProductList = ({ id, limit, skip }) => {
    const { name: categoryName, productID: products } = ProductOfCate(id);
    const productPage = LimitProduct(products, limit, skip);

    return (
        <>
            <div className="border-b border-borderColor mb-5 flex items-center justify-between pb-[5px]">
                <div className="gap-5 flex items-center">
                    <p className="text-second font-bold uppercase">{categoryName}</p>
                    <span className="font-light text-gray-500">({products?.length} sản phẩm )</span>
                </div>
                <div className="cursor-pointer gap-3 font-bold items-center flex">
                    <i className="fa-solid fa-list-ol"></i>
                    <span>SORT</span>
                </div>
            </div>

            <div className="flex flex-wrap mx-[-10px]">
                {productPage?.map(product => (
                    <ProductItem key={product._id} product={product} />
                ))}
            </div>
        </>
    );
};

export default ProductList;
