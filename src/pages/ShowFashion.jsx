import { useEffect, useState } from 'react';
import getAllShowFashion from '../services/showFashion';

const ShowFashion = () => {
    const [showFashion, setShowFashion] = useState([]);

    useEffect(() => {
        (async () => {
            setShowFashion(await getAllShowFashion());
        })();
    }, []);

    return (
        <section className="w-full max-w-[1350px] mx-auto px-4 mt-[93px] select-none">
            <div className="w-full py-[30px] flex flex-wrap mx-auto">
                {showFashion.map(item => (
                    <div
                        key={item._id}
                        className="px-[10px] mb-5 max-w-[33.3333333333%] w-full flex-shrink-0 flex-grow-0"
                    >
                        <img
                            loading="lazy"
                            src={`./src/assets/images/${item.showFashionImage}`}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
            <a
                href="#!"
                className="h-[50px] w-[220px] bg-transparent flex justify-center items-center border-solid border-2 border-second ml-[10px] mb-10 uppercase font-bold text-base transition-all ease-in-out duration-200 hover:bg-second hover:text-primary"
            >
                VIEW MORE +
            </a>
        </section>
    );
};

export default ShowFashion;
