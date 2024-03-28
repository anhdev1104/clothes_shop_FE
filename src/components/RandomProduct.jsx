import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProduct } from '../services/products';

const RandomProduct = () => {
    const [product, setProduct] = useState([]);
    const [productWidth, setProductWidth] = useState();
    const listProduct = useRef();

    useEffect(() => {
        (async () => {
            setProduct(await getAllProduct());
        })();
    }, []);

    const shuffledProducts = product.sort(() => Math.random() - 0.5);
    const randomProduct = shuffledProducts.slice(0, 10);

    useEffect(() => {
        if (product && listProduct.current) {
            const products = listProduct.current.querySelectorAll('.product-item');
            setProductWidth(products?.[0]?.offsetWidth);
        }
    }, [product]);

    let debounceTimeout = useRef();
    const handleNextClick = () => {
        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
        }
        debounceTimeout = setTimeout(() => (listProduct.current.scrollLeft += productWidth), 500);
    };

    const handlePrevClick = () => {
        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
        }
        debounceTimeout = setTimeout(() => (listProduct.current.scrollLeft -= productWidth), 500);
    };

    function scrollWheel(e) {
        e.preventDefault();
        const delta = e.deltaY * 3.3;
        this.scrollLeft += delta;
    }

    useEffect(() => {
        listProduct.current.addEventListener('wheel', scrollWheel);

        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => listProduct.current.removeEventListener('wheel', scrollWheel);
    }, []);

    return (
        <section className="mt-[50px]">
            <div className="flex items-center justify-between">
                <h1 className="font-medium">CÓ THỂ BẠN CŨNG THÍCH</h1>
                <div className="flex items-center gap-5">
                    <div
                        className="py-[10px] px-[15px] bg-white cursor-pointer border border-borderColor hover:border-second group btn-prev"
                        onClick={handlePrevClick}
                    >
                        <i className="fa fa-angle-left text-[#999] group-hover:text-second"></i>
                    </div>
                    <div
                        className="py-[10px] px-[15px] bg-white cursor-pointer border border-borderColor  hover:border-second group btn-next"
                        onClick={handleNextClick}
                    >
                        <i className="fa fa-angle-right text-[#999] group-hover:text-second"></i>
                    </div>
                </div>
            </div>

            <div className="flex mt-5">
                <div className="favorite-list flex overflow-x-auto scroll-smooth mx-[-10px]" ref={listProduct}>
                    {randomProduct?.map(product => (
                        <div
                            key={product._id}
                            className="product-item box-border px-[10px] mb-5 max-w-[25%] flex-shrink-0 flex-grow-0"
                        >
                            <Link
                                to={`/products/${product._id}`}
                                className="mb-[10px] block relative overflow-hidden group select-none"
                            >
                                <img
                                    loading="lazy"
                                    src={`../src/assets/images/${product?.images[0]}`}
                                    alt=""
                                    className="max-w-full transition-all duration-300 ease-in"
                                />
                                <img
                                    loading="lazy"
                                    src={`../src/assets/images/${product?.images[1]}`}
                                    alt=""
                                    className="transition-all duration-300 ease-in max-w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100"
                                />
                            </Link>
                            <h3 className="text-sm uppercase font-medium leading-6 mb-1">{product?.name}</h3>
                            <p className="font-light text-sm">
                                {product?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RandomProduct;
