import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { getAccountDetails, loginAccount } from '../services/account';
import Toast from '../components/Toast';
import { useRef } from 'react';

const schema = yup
  .object({
    email: yup
      .string()
      .trim()
      .required('Email đăng nhập không được để trống !')
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
        message: 'Email đăng nhập chưa đúng định dạng !',
      }),
    password: yup.string().trim().required('Mật khẩu không để trống !').min(8, 'Mật khẩu ít nhất 8 kí tự trở lên !'),
  })
  .required();

const LoginPage = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const handleSubmitLogin = async (values, event) => {
    try {
      event.preventDefault();
      const { accessToken } = await loginAccount(values);
      localStorage.setItem('accessToken', accessToken);
      const { email } = values;
      const userLogin = await getAccountDetails(email);

      const { fullname, role } = userLogin;
      const userData = {
        fullname,
      };
      localStorage.setItem('userData', JSON.stringify(userData));
      reset();
      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
      Toast(toastRef, {
        title: 'Thất bại !',
        message: 'Tài khoản hoặc mật khẩu không đúng, vui lòng kiểm tra lại.',
        type: 'error',
        duration: 3000,
      });
    }
  };

  const toastRef = useRef();
  return (
    <>
      <div id="toast" className="fixed top-8 right-8 z-50" ref={toastRef}></div>

      <main className="flex w-full h-[100vh]">
        <section className="w-[50%] h-full">
          <img src="./src/assets/images/login2.jpg" alt="" className="w-full h-full object-cover" />
        </section>
        <section className="w-[50%] px-[50px] py-[25px]">
          <h1 className="text-[36px] text-second text-center mb-[35px]">ĐĂNG NHẬP TÀI KHOẢN</h1>
          <form onSubmit={handleSubmit(handleSubmitLogin)} encType="multipart/form-data" id="formLogin">
            <div className="form-group mb-[25px]">
              <label htmlFor="email" className="block cursor-pointer text-base mb-1">
                Email
              </label>
              <Input type="email" name="email" id="email" placeholder="Email đăng nhập" control={control} />
              {errors.email && (
                <span className="form-message text-red-500 text-[13px] mt-2 block">{errors.email.message}</span>
              )}
            </div>
            <div className="form-group mb-[25px]">
              <label htmlFor="password" className="block cursor-pointer text-base mb-1">
                Mật khẩu
              </label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Nhập tối thiểu 8 kí tự"
                control={control}
              />
              {errors.password && (
                <span className="form-message text-red-500 text-[13px] mt-2 block">{errors.password.message}</span>
              )}
            </div>
            <div className="flex items-center justify-center gap-6 py-2 mb-5">
              <Link to="" className="leading-5 font-light text-center hover:font-bold">
                Đổi mật khẩu
              </Link>
              <Link to="/register" className="leading-5 font-light text-center hover:font-bold">
                Đăng ký tài khoản
              </Link>
              <Link to="/" className="leading-5 font-light text-center hover:font-bold">
                Quay lại trang chủ
              </Link>
            </div>
            <button
              type="submit"
              className="w-full block mb-[30px] cursor-pointer py-[15px] outline-none border border-[#dbdbdb] bg-second text-primary font-medium text-base transition-all duration-400 ease-linear hover:opacity-80"
            >
              ĐĂNG NHẬP
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default LoginPage;
