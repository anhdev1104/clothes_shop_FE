import { useHomeData } from '../contexts/homeContext';

const Menu = () => {
    const { category } = useHomeData();

    return (
        <nav>
            <ul className="flex justify-end items-center gap-8 font-medium">
                {category.map(category => (
                    <li key={category._id}>
                        <a
                            href={`/category/${category._id}`}
                            className="block py-4 transition-all hover:duration-500 border-[#f6f3e4] hover:border-black hover:border-b-2 border-b-2 uppercase"
                        >
                            {category.name}
                        </a>
                    </li>
                ))}
                <li>
                    <a
                        href="/collection"
                        className="block py-4 transition-all hover:duration-500 border-[#f6f3e4] hover:border-black hover:border-b-2 border-b-2"
                    >
                        BỘ SƯU TẬP
                    </a>
                </li>
                <li>
                    <a
                        href="/showFashion"
                        className="block py-4 transition-all hover:duration-500 border-[#f6f3e4] hover:border-black hover:border-b-2 border-b-2"
                    >
                        TRÌNH DIỄN THỜI TRANG
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
