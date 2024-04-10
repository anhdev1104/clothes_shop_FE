import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRef } from 'react';
import Input from '../components/Input';
import { addAccount } from '../services/account';
import Toast from '../components/Toast';
import { Link, useNavigate } from 'react-router-dom';

const schema = yup
  .object({
    fullname: yup.string().trim().required('Vui lòng nhập tên của bạn !'),
    email: yup
      .string()
      .trim()
      .required('Email đăng nhập không được để trống !')
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
        message: 'Email đăng nhập chưa đúng định dạng !',
      }),
    phonenumber: yup
      .string()
      .trim()
      .required('Vui lòng nhập số điện thoại của bạn !')
      .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, {
        message: 'Số điện thoại chưa đúng định dạng !',
      }),
    address: yup.string().trim().required('Vui lòng nhập vào địa chỉ đầy đủ của bạn !'),
    password: yup
      .string()
      .trim()
      .required('Mật khẩu không để trống !')
      .min(8, 'Mật khẩu ít nhất 8 kí tự trở lên !')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Mật khẩu có ít nhất một chữ số và một kí tự đặt biệt'
      ),
    passwordConfirm: yup
      .string()
      .trim()
      .oneOf([yup.ref('password'), null], 'Mật khẩu xác nhận phải trùng khớp với mật khẩu đã nhập')
      .required('Vui lòng xác nhập mật khẩu !'),
  })
  .required();

const Register = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = async (values, event) => {
    try {
      event.preventDefault();
      console.log(values);
      await addAccount(values);
      const { fullname, email, phonenumber, address } = values;
      const userData = {
        fullname,
        email,
        phonenumber,
        address,
      };
      localStorage.setItem('userData', JSON.stringify(userData));
      reset();
      navigate('/');
    } catch (error) {
      console.log(error);
      Toast(toastRef, {
        title: 'Thất bại !',
        message: 'Email tài khoản của bạn đã tồn tại trong hệ thống.',
        type: 'error',
        duration: 3000,
      });
    }
  };

  const toastRef = useRef();

  return (
    <>
      <div id="toast" className="fixed top-8 right-8 z-50" ref={toastRef}></div>
      <main className="flex w-full">
        <section className="w-[50%]">
          <img src="./src/assets/images/register.jpg" alt="" className="w-full h-full object-cover" />
        </section>
        <section className="w-[50%] px-[50px] py-[25px]">
          <h1 className="text-[36px] text-second text-center mb-4">ĐĂNG KÍ TÀI KHOẢN</h1>
          <form onSubmit={handleSubmit(onSubmitHandler)} encType="multipart/form-data" id="formRegister">
            <div className="form-group mb-[25px]">
              <label htmlFor="fullname" className="block cursor-pointer text-base">
                Họ và tên
              </label>
              <Input type="text" name="fullname" id="fullname" placeholder="Nhập tên đầy đủ" control={control} />
              {errors.fullname && (
                <span className="form-message text-red-500 text-[13px] mt-2 block">{errors.fullname.message}</span>
              )}
            </div>
            <div className="form-group mb-[25px]">
              <label htmlFor="email" className="block cursor-pointer text-base">
                Email
              </label>
              <Input type="email" id="email" name="email" placeholder="Email đăng nhập" control={control} />
              {errors.email && (
                <span className="form-message text-red-500 text-[13px] mt-2 block">{errors.email.message}</span>
              )}
            </div>
            <div className="form-group mb-[25px]">
              <label htmlFor="phonenumber" className="block cursor-pointer text-base">
                Số điện thoại
              </label>
              <Input
                type="tel"
                id="phonenumber"
                name="phonenumber"
                placeholder="Số điện thoại của bạn"
                control={control}
              />
              {errors.phonenumber && (
                <span className="form-message text-red-500 text-[13px] mt-2 block">{errors.phonenumber.message}</span>
              )}
            </div>
            <div className="form-group mb-[25px]">
              <label htmlFor="address" className="block cursor-pointer text-base">
                Địa chỉ
              </label>
              <Input
                type="text"
                name="address"
                id="address"
                placeholder="Ex: 575 Tôn Đức Thắng, Hoà Khánh Nam, Liên Chiểu, Đà Nẵng"
                control={control}
              />
              {errors.address && (
                <span className="form-message text-red-500 text-[13px] mt-2 block">{errors.address.message}</span>
              )}
            </div>
            <div className="form-group mb-[25px]">
              <label htmlFor="password" className="block cursor-pointer text-base">
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
            <div className="form-group mb-[25px]">
              <label htmlFor="passwordConfirm" className="block cursor-pointer text-base">
                Nhập lại mật khẩu
              </label>
              <Input
                type="password"
                id="passwordConfirm"
                name="passwordConfirm"
                placeholder="Xác nhận mật khẩu"
                control={control}
              />
              {errors.passwordConfirm && (
                <span className="form-message text-red-500 text-[13px] mt-2 block">
                  {errors.passwordConfirm.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="w-full block mb-5 cursor-pointer py-3 outline-none border border-[#dbdbdb] bg-second text-primary font-medium text-base transition-all duration-400 ease-linear hover:opacity-80"
            >
              ĐĂNG KÝ
            </button>
            <div className="flex gap-5 items-center justify-center">
              <Link to="/login" className="block leading-5 font-light text-center hover:font-bold">
                Bạn đã có tài khoản ?
              </Link>
              <Link to="/" className="block leading-5 font-light text-center hover:font-bold">
                Quay lại trang chủ
              </Link>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default Register;
