import Menu from './Menu';

const Header = () => {
    return (
        <header className="w-full bg-primary border-b border-solid border-[#e3ddbb] py-[1px] fixed top-0 left-0 right-0 z-10">
            <section className="container-page flex justify-between items-center gap-5">
                <a href="/" className="block select-none">
                    <img src="../src/assets/images/logo.svg" alt="" />
                </a>
                <div className="flex-1">
                    <div className="flex justify-end items-center gap-8 mt-1">
                        <div className="flex items-center gap-2 hover:text-slate-500 hover:transition-all">
                            <i className="fa-regular fa-user"></i>
                            {/* {storedUserData ? (
                            <div className="block-user cursor-pointer ml-1 pt-1 relative group">
                                <span>${storedUserData.fullname}</span>
                                <div className="signout absolute shadow-md bg-white top-full mt-3 left-1/2 min-w-[150px] -translate-x-1/2 text-center text-sm font-light py-2 px-5 hover:text-red-400 hover:font-bold hidden group-hover:block">
                                    Đăng xuất
                                </div>
                            </div>
                        ) : ( */}
                            <a href="/login">Login</a>
                            {/* )} */}
                        </div>
                        <span className="text-gray-300 text-lg">|</span>
                        <div
                            className="cursor-pointer flex items-center gap-2 hover:text-slate-500 hover:transition-all"
                            id="search"
                        >
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <span>Tìm kiếm</span>
                        </div>
                        <span className="text-gray-300 text-lg">|</span>
                        <div className={` text-xl transition-all relative`} title="giỏ hàng">
                            {/* ${carts.length > 0 && 'notifiCart'} */}
                            <i
                                className="fa-solid fa-cart-shopping cursor-pointer hover:text-slate-500 hover:transition-all duration-700"
                                id="cartIcon"
                            ></i>

                            <div
                                className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-40 z-20 items-center justify-center hidden overlay"
                                id="overlayCart"
                            >
                                <div
                                    className="absolute top-11 right-[75px] p-[30px] bg-white transition-all duration-200 ease-in"
                                    id="cart"
                                >
                                    <span className="uppercase text-base font-medium text-second">Giỏ hàng</span>

                                    <div
                                        className="absolute top-0 right-0 text-2xl cursor-pointer py-[10px] px-6 text-gray-500 transition-all ease-in duration-200 hover:text-[#a9a9a9]"
                                        id="close-icon-cart"
                                    >
                                        <i className="fa-solid fa-xmark"></i>
                                    </div>

                                    <ul className="mx-[-10px] mt-1 mb-3 overflow-y-auto max-h-[40vh] pr-3 cart-scroll">
                                        {/* {carts.length === 0 ? (
                                        <span className="text-sm text-center font-light ml-5">
                                            Chưa có sản phẩm nào được thêm.
                                        </span>
                                    ) : (
                                        carts
                                            ?.map((cart, index) => {
                                                const totalPriceQuantityItem = cart.price * cart.quantity;
                                                totalPriceCart += totalPriceQuantityItem;
                                                return (
                                                    <li
                                                        className="flex justify-between pb-2 pt-[10px] border-b border-borderColor "
                                                        key={index}
                                                    >
                                                        <a
                                                            href=""
                                                            className="block w-[110px] px-[10px] select-none"
                                                        >
                                                            <img
                                                                src="../src/assets/images/${cart.images}"
                                                                alt=""
                                                            />
                                                        </a>
                                                        <div className="px-[10px] flex flex-col justify-between flex-1">
                                                            <div className="flex mb-3 justify-between items-center">
                                                                <h3 className="font-light text-sm pr-5 uppercase">
                                                                    {cart.name}
                                                                </h3>
                                                                <div
                                                                    data-index="${index}"
                                                                    className="close-icon cursor-pointer text-gray-500 transition-all ease-in duration-200 hover:text-[#a9a9a9]"
                                                                >
                                                                    <i className="fa-solid fa-xmark"></i>
                                                                </div>
                                                            </div>

                                                            <div className="flex font-light text-[13px]">
                                                                <span className="min-w-[90px]">Size:</span>
                                                                <span>{cart.size}</span>
                                                            </div>

                                                            <div className="flex items-center font-light text-[13px]">
                                                                <label className="min-w-[90px]">
                                                                    Số lượng:
                                                                </label>
                                                                <span className="flex-1">{cart.quantity}</span>
                                                                <span className="float-right">
                                                                    {cart.price
                                                                        .toString()
                                                                        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                                                                    đ
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                );
                                            })
                                            .join('')
                                    )} */}
                                    </ul>
                                    <div className="flex items-center justify-between text-sm font-light mb-3">
                                        <span>Tổng tiền tạm tính</span>
                                        <span>
                                            {/* {totalPriceCart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} VND */}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm font-light">
                                        <span className="text-[15px] font-bold uppercase">Tổng hoá đơn</span>
                                        <span className="font-medium">
                                            {/* {totalPriceCart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} VND */}
                                        </span>
                                    </div>
                                    <a
                                        href="/pay"
                                        className="text-sm mt-4 block bg-[#444444] hover:opacity-80 transition-all duration-200 ease-linear text-white text-center py-2 font-medium"
                                    >
                                        ĐI TỚI ĐẶT HÀNG
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Menu />
                </div>
            </section>
        </header>
    );
};

export default Header;
