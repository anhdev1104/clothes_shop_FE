import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
    const [isFavourite, setFavourite] = useState(false);

    return (
        <div className="px-[10px] mb-5 max-w-[33.3333333333%] flex-shrink-0 flex-grow-0 select-none">
            <Link to={`/products/${product._id}`} className="block relative overflow-hidden mb-[10px] group">
                <img
                    src={`../src/assets/images/${product.images[0]}`}
                    alt=""
                    className="transition-all max-w-full ease-in duration-300"
                />
                <img
                    src={`../src/assets/images/${product.images[1]}`}
                    alt=""
                    className="transition-all max-w-full ease-in duration-300 absolute top-0 left-0 opacity-0 group-hover:opacity-100"
                />
            </Link>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <span className="font-bold text-second">
                        {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ
                    </span>
                    <span className="font-light line-through text-gray-500 text-sm">
                        {product.priceOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ
                    </span>
                </div>
                <div className="heart-icons" onClick={() => setFavourite(!isFavourite)}>
                    {!isFavourite ? (
                        <i className="heart-icon heart fa-regular fa-heart cursor-pointer p-1"></i>
                    ) : (
                        <i className="heart-icon heart-red fa-solid fa-heart cursor-pointer text-red-500 p-1"></i>
                    )}
                </div>
            </div>
            <div className="font-light text-sm my-2 cursor-pointer transition-all ease-linear duration-75 hover:font-bold">
                <a href="/product/{product[0]}">{product.name}</a>
            </div>
        </div>
    );
};

export default ProductItem;
