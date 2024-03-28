import { useEffect, useState } from 'react';
import getAllShowFashion from '../services/showFashion';
import Button from '../components/Button';

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
            <Button title="view more +" />
        </section>
    );
};

export default ShowFashion;
