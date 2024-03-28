import { Link } from 'react-router-dom';

const Button = ({ category, title = 'Button', center = false }) => {
    return (
        <Link
            to={category ? `/category/${category[0]?._id}` : '#!'}
            className={`h-[50px] w-[220px] bg-transparent flex justify-center items-center border-solid border-2 border-second mt-4 mb-10 uppercase font-bold text-base transition-all ease-in-out duration-200 hover:bg-second hover:text-primary ${
                center && 'mx-auto'
            }`}
        >
            {title}
        </Link>
    );
};

export default Button;
