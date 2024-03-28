import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductDetail } from '../services/products';
import { getDetailCategory } from '../services/category';
import RandomProduct from '../components/RandomProduct';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);
    const [remainingQuantity, setRemainingQuantity] = useState(0);
    const [displayImage, setDisplayImage] = useState('');
    const [images, setImages] = useState();
    const [size, setSize] = useState([]);
    const [innerSize, setInnerSize] = useState('');
    const [count, setCount] = useState(1);
    const [modal, setModal] = useState(false);

    const imagesRef = useRef();
    const sizesRef = useRef();

    useEffect(() => {
        (async () => {
            setProduct(await getProductDetail(id));
            setCategory(await getDetailCategory(product?.categoryID));
        })();
    }, [id, product?.categoryID]);

    useEffect(() => {
        setRemainingQuantity(product.size?.reduce((acc, curr) => acc + curr.quantity, 0));
    }, [product]);

    useEffect(() => {
        if (product.images && imagesRef.current) {
            const imagesElements = imagesRef.current.querySelectorAll('.details-item-img');
            setImages(imagesElements);
            if (imagesElements.length > 0) {
                imagesElements[0].classList.add('border-[rgb(189,24,28)]');
            }
        }
    }, [product.images]);

    useEffect(() => {
        if (product.size && sizesRef.current) {
            const listSize = sizesRef.current.querySelectorAll('.item-option');
            setSize(listSize);
        }
    }, [product.size]);

    const handleDisplayImage = (image, event) => {
        setDisplayImage(image);
        images.forEach(image => image.classList.remove('border-[rgb(189,24,28)]'));
        event.target.parentElement.classList.add('border-[rgb(189,24,28)]');
    };

    const handleActiveSize = event => {
        size.forEach(item => item.classList.remove('text-white', '!font-bold', '!bg-second'));
        event.target.classList.add('text-white', '!font-bold', '!bg-second');
        console.log(event.target);
        setInnerSize(event.target.textContent);
    };

    const handleIncrement = () => {
        if (count >= 6) return;
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count <= 1) return;
        setCount(count - 1);
    };

    return (
        <main className="container-page">
            <section className="mt-[110px]">
                <form action="" method="POST" id="addCartForm">
                    <div className="flex items-center font-light uppercase">
                        <Link to="/" className="transition-all ease-in duration-200 hover:text-[#a9a9a9]">
                            TRANG CHỦ
                        </Link>
                        <span className="text-gray-300 mx-2 text-lg">/</span>
                        <div className="transition-all ease-in duration-200 hover:text-[#a9a9a9]">{category?.name}</div>
                        <span className="text-gray-300 mx-2 text-lg">/</span>
                        <div className="transition-all ease-in duration-200 hover:text-[#a9a9a9]">{product?.name}</div>
                    </div>
                    <div className="mt-5 flex justify-between">
                        <div className="w-[45%] flex gap-[15px] select-none">
                            <ul
                                className="list-none w-[110px] block h-[100vh] overflow-y-auto overflow-hidden detail-scroll"
                                ref={imagesRef}
                            >
                                {product.images?.map(image => (
                                    <li
                                        key={image}
                                        className="details-item-img cursor-pointer mb-2 max-w-full block border-[3px]"
                                        onClick={event => handleDisplayImage(image, event)}
                                    >
                                        <img loading="lazy" src={`../src/assets/images/${image}`} alt="" />
                                    </li>
                                ))}
                            </ul>
                            <div className="overflow-hidden cursor-zoom-in group">
                                <img
                                    loading="lazy"
                                    src={`../src/assets/images/${displayImage || product?.images?.[0]}`}
                                    alt=""
                                    className="hover:scale-125 object-contain max-w-full w-full max-h-full transition-all ease-linear duration-300"
                                    id="details-img"
                                />
                            </div>
                        </div>
                        <div className="w-[50%]">
                            <h2 className="font-medium mb-1 text-xl" id="nameProduct">
                                {product?.name}
                            </h2>
                            <span className="font-light text-sm">
                                Số lượng kho còn: <b className="font-bold text-base">{remainingQuantity}</b>
                            </span>
                            <div className="mb-5 flex items-center gap-[18px] mt-3">
                                <span className="font-bold text-lg" id="price">
                                    {product.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ
                                </span>
                                <span className="font-light text-[#a9a9a9] line-through" id="priceOrigin">
                                    {product.priceOrigin?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ
                                </span>
                            </div>
                            <p className="font-light mt-5 mb-[10px] flex items-center">
                                SIZE :
                                <span className="font-bold mx-2" id="innerSize">
                                    {innerSize}
                                </span>
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex gap-5" ref={sizesRef}>
                                    {product?.size?.map(size => (
                                        <div
                                            key={size.label}
                                            className="cursor-pointer flex items-center justify-center w-10 h-10 border border-[#e3ddbb] bg-white font-light item-option"
                                            onClick={event => handleActiveSize(event)}
                                        >
                                            {size.label}
                                        </div>
                                    ))}
                                </div>
                                <div
                                    className="cursor-pointer font-light text-[#007ff0] text-sm hover:underline"
                                    id="modal-size"
                                    onClick={() => setModal(!modal)}
                                >
                                    Tìm đúng kích thước →
                                </div>
                                <div
                                    className={`fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-40 z-20 items-center justify-center overlay ${
                                        modal ? 'flex' : 'hidden'
                                    }`}
                                    id="overlay"
                                    onClick={() => setModal(!modal)}
                                >
                                    <div
                                        className="relative max-w-[1000px] w-full h-[700px] shadow-xl box-modal"
                                        id="box-size"
                                        onClick={e => e.stopPropagation()}
                                    >
                                        <div
                                            className="absolute top-0 right-0 text-[40px] cursor-pointer py-[10px] px-6 text-gray-500 transition-all ease-in duration-200 hover:text-[#a9a9a9] close-icon"
                                            id="close-icon"
                                            onClick={() => setModal(!modal)}
                                        >
                                            <i className="fa-solid fa-xmark"></i>
                                        </div>
                                        <img
                                            loading="lazy"
                                            src="../src/assets/images/boxsize.jpg"
                                            alt=""
                                            className="w-full h-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-[25px] pb-[30px] border-b border-borderColor">
                                <div className="flex items-center border border-primary bg-white">
                                    <span
                                        id="decrement"
                                        className="w-[50px] h-[50px] text-sm text-[#999] flex justify-center items-center cursor-pointer"
                                        onClick={handleDecrement}
                                    >
                                        <i className="fa fa-minus"></i>
                                    </span>
                                    <span
                                        className="w-[30px] h-[50px] leading-[50px] text-lg text-center text-second bg-transparent"
                                        type="text"
                                        disabled
                                        id="quantityCart"
                                    >
                                        {count}
                                    </span>
                                    <span
                                        id="increment"
                                        className="w-[50px] h-[50px] text-sm text-[#999] flex justify-center items-center cursor-pointer"
                                        onClick={handleIncrement}
                                    >
                                        <i className="fa fa-plus"></i>
                                    </span>
                                </div>
                                <input
                                    type="submit"
                                    name="addproductdetails"
                                    className="max-w-[380px] w-full h-50px leading-[50px] block text-white cursor-pointer outline-none border-none bg-second font-light text-center transition-all ease-in-out duration-200 hover:font-bold hover:bg-[#a9a9a9]"
                                    value="THÊM VÀO GIỎ HÀNG"
                                />
                                <div className="w-[50px] h-[50px] border border-borderColor bg-white flex items-center justify-center text-xl transition-all ease-in duration-200 hover:border-second cursor-pointer">
                                    <i className="fa-regular fa-heart heart-icon heart-details"></i>
                                </div>
                            </div>
                            <div className="py-[25px]">
                                <h3 className="mb-4 font-medium">CHI TIẾT SẢN PHẨM</h3>
                                <p className="mb-5 leading-6 font-light">
                                    Màu sắc sản phẩm có thể sẽ chênh lệch thực tế một phần nhỏ, do ảnh hưởng về độ lệch
                                    màu của ánh sáng nhưng vẫn đảm bảo chất lượng.
                                </p>
                                <p className="mb-[30px] leading-6 font-light">{product?.description}</p>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
            <RandomProduct />
        </main>
    );
};

export default ProductDetails;
