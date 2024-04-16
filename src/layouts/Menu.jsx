import { Link } from 'react-router-dom';
import { useHomeData } from '../contexts/homeContext';

const Menu = () => {
  const { category } = useHomeData();
  const categories = category.sort((a, b) => a.position - b.position);

  return (
    <nav>
      <ul className="flex justify-end items-center gap-8 font-medium">
        {categories.map(category => (
          <li key={category._id}>
            <Link
              to={`/category/${category._id}`}
              className="block py-4 transition-all hover:duration-500 border-[#f6f3e4] hover:border-black hover:border-b-2 border-b-2 uppercase"
            >
              {category.name}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to="/collection"
            className="block py-4 transition-all hover:duration-500 border-[#f6f3e4] hover:border-black hover:border-b-2 border-b-2"
          >
            BỘ SƯU TẬP
          </Link>
        </li>
        <li>
          <Link
            to="/showfashion"
            className="block py-4 transition-all hover:duration-500 border-[#f6f3e4] hover:border-black hover:border-b-2 border-b-2"
          >
            TRÌNH DIỄN THỜI TRANG
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
