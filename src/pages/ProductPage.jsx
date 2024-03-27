import { Link, useParams } from 'react-router-dom';
import Sidebar from '../layouts/Sidebar';
import ProductList from '../components/ProductList';
import ProductOfCate from '../utils/ProductOfCate';
import useQuery from '../utils/useQuery';

const ProductPage = () => {
    const { id } = useParams();
    const query = useQuery();
    const page = query.get('page') || 1;
    const limit = 6;
    const skip = (page - 1) * limit;

    const { productID: products, _id } = ProductOfCate(id);
    const pageNumber = [];
    const totalPage = Math.ceil(products?.length / limit);
    for (let i = 1; i <= totalPage; i++) {
        pageNumber.push(i);
    }

    return (
        <>
            <section className="container-page mt-[113px]">
                <div className="block select-none">
                    <img loading="lazy" src="../src/assets/images/banner1.webp" alt="" className="max-w-full" />
                </div>
            </section>
            <main className="container-page">
                <section className="mt-[50px] flex">
                    <Sidebar />
                    <div className="flex-grow pl-[30px]">
                        <ProductList id={_id} limit={limit} skip={skip} />
                    </div>
                </section>
                <section className="pagination flex items-center justify-end mt-5 gap-5">
                    {pageNumber?.map(number => (
                        <Link
                            key={number}
                            to={`/category/${_id}?page=${number}`}
                            className={`w-10 h-10 bg-white flex items-center justify-center font-semibold hover:border-2 hover:border-[#666] ${
                                +page === number
                                    ? '!bg-[#333] text-white'
                                    : '' || (!page && number === 1)
                                    ? '!bg-[#333] text-white'
                                    : ''
                            }`}
                        >
                            {number}
                        </Link>
                    ))}
                </section>
            </main>
        </>
    );
};

export default ProductPage;
