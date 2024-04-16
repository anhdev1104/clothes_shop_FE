import { Link, useNavigate } from 'react-router-dom';
import Menu from './Menu';
import { useEffect, useState } from 'react';
import Input from '../components/Input';
import { useForm } from 'react-hook-form';

const Header = () => {
  const [userData, setUserData] = useState([]);
  const [isShowCart, setIsShowCart] = useState(false);
  const [isShowSearch, setIsShowSearch] = useState(false);

  useEffect(() => {
    const storedUserDataJSON = localStorage.getItem('userData');
    let storedUserData = false;
    if (storedUserData !== null) {
      storedUserData = JSON.parse(storedUserDataJSON);
      setUserData(storedUserData);
    }
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('accessToken');
    navigate('/login');
  };

  // localStorage get Cart
  const carts = JSON.parse(localStorage.getItem('cart')) || [];
  let totalPriceCart = 0;

  const handleRemoveCartItem = e => {
    const isRemoveCart = confirm('Bạn muốn xoá sản phẩm này khỏi giỏ hàng ?');
    if (!isRemoveCart) return;
    const cartIndex = +e.target.parentElement.dataset.index;
    if (!isNaN(cartIndex)) {
      let carts = JSON.parse(localStorage.getItem('cart')) || [];
      carts.splice(cartIndex, 1);
      localStorage.setItem('cart', JSON.stringify(carts));
    }
  };

  const { handleSubmit, control, reset } = useForm();
  const onSubmitHandler = async values => {
    const { search } = values;
    if (search === '') return;
    reset();
    navigate(`/search?name=${search}`);
  };

  return (
    <header className="w-full bg-primary border-b border-solid border-[#e3ddbb] py-[1px] fixed top-0 left-0 right-0 z-10">
      <section className="container-page flex justify-between items-center gap-5">
        <Link to="/" className="block select-none">
          <img src="../src/assets/images/logo.svg" alt="" />
        </Link>
        <div className="flex-1">
          <div className="flex justify-end items-center gap-8 mt-1">
            <div className="flex items-center gap-2 hover:text-slate-500 transition-all">
              <i className="fa-regular fa-user"></i>
              {userData ? (
                <div className="block-user cursor-pointer ml-1 pt-1 relative group">
                  <span>{userData?.fullname}</span>
                  <div
                    className="signout absolute shadow-md bg-white top-full mt-3 left-1/2 min-w-[150px] -translate-x-1/2 text-center text-sm font-light py-2 px-5 hover:text-red-400 hover:font-bold hidden group-hover:block transition-all"
                    onClick={handleLogout}
                  >
                    Đăng xuất
                  </div>
                </div>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </div>
            <span className="text-gray-300 text-lg">|</span>
            <div className="relative">
              <div
                className="cursor-pointer flex items-center gap-2 hover:text-slate-500 transition-all duration-300 select-none"
                id="search"
                onClick={() => {
                  setIsShowSearch(!isShowSearch);
                }}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
                <span>Tìm kiếm</span>
              </div>
              <form
                onSubmit={handleSubmit(onSubmitHandler)}
                className={`absolute top-full -right-8 mt-2 z-20 transition-all duration-300 ease-linear ${
                  isShowSearch ? 'w-[300px] h-10 opacity-100 visible shadow-xl' : 'opacity-0 w-0 h-0 invisible'
                }`}
                autoComplete="off"
              >
                {isShowSearch && (
                  <Input
                    type="text"
                    name="search"
                    placeholder="Gõ từ khoá tìm kiếm ... "
                    control={control}
                    className="pl-5 pr-[60px] py-2 outline-none bg-[#444] text-white w-full h-full text-sm transition-all"
                  />
                )}
                <button
                  type="submit"
                  className="absolute top-0 right-0 flex justify-center items-center p-[11px] text-white"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
            <span className="text-gray-300 text-lg">|</span>
            <div className="relative">
              <div
                data-cart={carts.length}
                className={`${carts.length > 0 ? 'notifiCart' : ''} text-xl transition-all relative`}
                title="giỏ hàng"
              >
                <i
                  className="fa-solid fa-cart-shopping cursor-pointer hover:text-slate-500 hover:transition-all duration-700"
                  id="cartIcon"
                  onClick={() => setIsShowCart(!isShowCart)}
                ></i>

                <div
                  className={`fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-40 z-20 items-center justify-center overlay ${
                    !isShowCart && 'hidden'
                  }`}
                  id="overlayCart"
                  onClick={() => setIsShowCart(!isShowCart)}
                >
                  <div
                    className="absolute top-11 right-[75px] p-[30px] bg-white transition-all duration-200 ease-in"
                    id="cart"
                  >
                    <span className="uppercase text-base font-medium text-second">Giỏ hàng</span>

                    <div
                      className="absolute top-0 right-0 text-2xl cursor-pointer py-[10px] px-6 text-gray-500 transition-all ease-in duration-200 hover:text-[#a9a9a9]"
                      id="close-icon-cart"
                      onClick={() => setIsShowCart(!isShowCart)}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </div>

                    <ul className="mx-[-10px] mt-1 mb-3 overflow-y-auto max-h-[40vh] pr-3 cart-scroll">
                      {carts.length === 0 ? (
                        <span className="text-sm text-center font-light ml-5">Chưa có sản phẩm nào được thêm.</span>
                      ) : (
                        carts?.map((cart, index) => {
                          const totalPriceQuantityItem = cart.price * cart.quantity;
                          totalPriceCart += totalPriceQuantityItem;
                          return (
                            <li
                              className="flex justify-between pb-2 pt-[10px] border-b border-borderColor "
                              key={index}
                            >
                              <div className="block w-[110px] px-[10px] select-none">
                                <img src={`../src/assets/images/${cart.images}`} alt="" />
                              </div>
                              <div className="px-[10px] flex flex-col justify-between flex-1">
                                <div className="flex mb-3 justify-between items-center">
                                  <h3 className="font-light text-sm pr-5 uppercase">{cart.name}</h3>
                                  <div
                                    data-index={index}
                                    className="close-icon cursor-pointer text-gray-500 transition-all ease-in duration-200 hover:text-[#a9a9a9]"
                                    onClick={handleRemoveCartItem}
                                  >
                                    <i className="fa-solid fa-xmark"></i>
                                  </div>
                                </div>

                                <div className="flex font-light text-[13px]">
                                  <span className="min-w-[90px]">Size:</span>
                                  <span>{cart.size}</span>
                                </div>

                                <div className="flex items-center font-light text-[13px]">
                                  <label className="min-w-[90px]">Số lượng:</label>
                                  <span className="flex-1">{cart.quantity}</span>
                                  <span className="float-right">
                                    {cart.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ
                                  </span>
                                </div>
                              </div>
                            </li>
                          );
                        })
                      )}
                    </ul>
                    <div className="flex items-center justify-between text-sm font-light mb-3">
                      <span>Tổng tiền tạm tính</span>
                      <span>{totalPriceCart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} VND</span>
                    </div>
                    <div className="flex items-center justify-between text-sm font-light">
                      <span className="text-[15px] font-bold uppercase">Tổng hoá đơn</span>
                      <span className="font-medium">
                        {totalPriceCart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} VND
                      </span>
                    </div>
                    <Link
                      href="/pay"
                      className="text-sm mt-4 block bg-[#444444] hover:opacity-80 transition-all duration-200 ease-linear text-white text-center py-2 font-medium"
                    >
                      ĐI TỚI ĐẶT HÀNG
                    </Link>
                  </div>
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
