import { useHomeData } from '../contexts/homeContext';

const Insta = () => {
    const { instagram } = useHomeData();

    return (
        <section className="container-page border-t border-[#e3ddbb]">
            <h1 className="text-3xl text-center mt-[30px]">INSTAGRAM</h1>
            <p className="text-xl text-center mb-[30px] font-light">@sixdo.vn</p>
            <div className="flex flex-wrap mx-[-10px]">
                {instagram.map(ins => (
                    <div className="mb-5 w-full max-w-[33.3333333333%] px-[10px] select-none" key={ins._id}>
                        <img
                            src={`./src/assets/images/${ins.instaImage}`}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Insta;
