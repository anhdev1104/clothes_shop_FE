import { useEffect, useState } from 'react';
import getAllCollection from '../services/collection';

const Collection = () => {
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        (async () => {
            setCollection(await getAllCollection());
        })();
    }, []);

    console.log(collection);

    return (
        <section className="container-page mt-[93px] select-none">
            <div className="w-full py-[30px] flex flex-wrap mx-auto">
                {collection.map(item => (
                    <div
                        key={item._id}
                        className="px-[10px] mb-5 max-w-[33.3333333333%] w-full flex-shrink-0 flex-grow-0"
                    >
                        <img
                            loading="lazy"
                            src={`./src/assets/images/${item.collectionImage}`}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
            <a
                href="#!"
                className="h-[50px] w-[220px] bg-transparent flex justify-center items-center border-solid border-2 border-second mx-auto mb-10 uppercase font-bold text-base transition-all ease-in-out duration-200 hover:bg-second hover:text-primary"
            >
                VIEW MORE +
            </a>
        </section>
    );
};

export default Collection;
