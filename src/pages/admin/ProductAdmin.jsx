import { useEffect, useState } from 'react';
import SidebarAdmin from './components/SidebarAdmin';
import { getAllProduct } from '../../services/products';
import { Link } from 'react-router-dom';
import { getAllCategory } from '../../services/category';
import { API_URL } from '../../api/config';

const ProductAdmin = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    images: '',
    priceOrgin: '',
    price: '',
    description: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(newProduct);
  };

  useEffect(() => {
    (async () => {
      const data = await getAllProduct();
      const sortProduct = data.reverse();
      setProducts(sortProduct);
      setCategory(await getAllCategory());
    })();
  }, []);

  return (
    <>
      <div id="toast" className="fixed top-8 right-8 z-50"></div>
      <main className="bg-gray-200">
        <div className="flex h-screen bg-gray-200 ml-[256px]">
          <SidebarAdmin />
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between h-20 px-6 bg-white border-b flex-shrink-0">
              <span className="text-xl font-semibold px-4">Quản lý sản phẩm</span>
              <div className="rounded-[100rem] w-11 h-11 overflow-hidden">
                <img
                  loading="lazy"
                  src="https://avatars.githubusercontent.com/u/121429011?v=4"
                  alt=""
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-1 px-6 py-8 bg-gray-200">
              <div className="w-full md:w-1/2 px-4">
                <div className="bg-white rounded-lg p-8">
                  <h2 className="text-xl font-semibold mb-4">Thêm sản phẩm mới</h2>
                  <form
                    onSubmit={handleSubmit}
                    action={`${API_URL}/products`}
                    encType="multipart/form-data"
                    id="addProduct"
                  >
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nameProduct">
                        Tên sản phẩm
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="nameProduct"
                        name="name"
                        type="text"
                        placeholder="Nhập tên sản phẩm"
                        onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagesProduct">
                        Hình ảnh (giữ Ctrl để chọn nhiều ảnh)
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="imagesProduct"
                        name="images"
                        type="file"
                        placeholder="Nhập hình ảnh sản phẩm"
                        multiple
                        onChange={e => setNewProduct({ ...newProduct, images: [e.target.value] })}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="priceProduct">
                        Giá sản phẩm
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="priceProduct"
                        name="priceOrigin"
                        type="text"
                        placeholder="Nhập giá sản phẩm"
                        onChange={e => setNewProduct({ ...newProduct, priceOrgin: e.target.value })}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="priceSaleProduct">
                        Giá sale sản phẩm
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="priceSaleProduct"
                        name="price"
                        type="text"
                        placeholder="Nhập giá sale sản phẩm"
                        onChange={e => setNewProduct({ ...newProduct, price: e.target.value })}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descriptionProduct">
                        Mô tả sản phẩm
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="descriptionProduct"
                        name="description"
                        type="text"
                        placeholder="Nhập mô tả sản phẩm"
                        onChange={e => setNewProduct({ ...newProduct, description: e.target.value })}
                      />
                    </div>

                    <div className="mb-4">
                      <label className="text-gray-700 text-sm font-bold mb-2 block">
                        <span>Size</span>
                      </label>
                      <div className="flex flex-col gap-3 mt-2">
                        <div className="flex items-center justify-evenly gap-5">
                          <label className="inline-flex items-center" htmlFor="sizeS">
                            <input type="checkbox" className="form-checkbox text-blue-500" id="sizeS" name="sizeS" />
                            <span className="ml-2">S</span>
                          </label>
                          <input
                            className="shadow appearance-none border rounded min-w-fit py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Nhập số lượng"
                            id="quantitySizeS"
                          />
                        </div>
                        <div className="flex items-center justify-evenly gap-5">
                          <label className="inline-flex items-center" htmlFor="sizeM">
                            <input type="checkbox" className="form-checkbox text-blue-500" id="sizeM" />
                            <span className="ml-2">M</span>
                          </label>
                          <input
                            className="shadow appearance-none border rounded min-w-fit py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline translate-x-[-2px]"
                            type="text"
                            placeholder="Nhập số lượng"
                            id="quantitySizeM"
                          />
                        </div>
                        <div className="flex items-center justify-evenly gap-5">
                          <label className="inline-flex items-center" htmlFor="sizeL">
                            <input type="checkbox" className="form-checkbox text-blue-500" id="sizeL" />
                            <span className="ml-2">L</span>
                          </label>
                          <input
                            className="shadow appearance-none border rounded min-w-fit py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Nhập số lượng"
                            id="quantitySizeL"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 relative">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                        Danh mục sản phẩm
                      </label>
                      <select
                        className="block appearance-none w-full border rounded px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="category"
                        name="categoryID"
                      >
                        <option value="">Chọn danh mục</option>
                        {category?.map(category => (
                          <option key={category._id} value={category._id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-4 relative">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="statusProduct">
                        Trạng thái sản phẩm
                      </label>
                      <select
                        className="block appearance-none w-full border rounded px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="statusProduct"
                        name="isActive"
                      >
                        <option value="">Chọn trạng thái</option>
                        <option value="1">Hiển thị sản phẩm</option>
                        <option value="0">Ẩn sản phẩm</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        type="submit"
                        id="btnAdd"
                      >
                        Thêm sản phẩm
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="bg-white rounded-lg p-8 mr-[-4px]">
                  <h2 className="text-xl font-semibold mb-4">Danh sách sản phẩm</h2>
                  <div className="overflow-auto max-h-[813px] cart-scroll">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="text-center">Ảnh sản phẩm</th>
                          <th className="text-center">Tên sản phẩm</th>
                          <th className="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products?.map(product => (
                          <tr key={product._id}>
                            <td className="border p-2 w-[120px] h-[140px]">
                              <img
                                loading="lazy"
                                src={`../../src/assets/images/${product.images[0]}`}
                                alt=""
                                className=""
                              />
                            </td>
                            <td className="border p-2">{product.name}</td>
                            <td className="border p-2 w-24">
                              <Link
                                to={`/admin/products/${product._id}`}
                                className="block p-2 rounded-md bg-blue-500 hover:bg-blue-700 text-white text-center mb-1"
                              >
                                Chi tiết
                              </Link>
                              <button
                                data-id={`${product._id}`}
                                className="btn-delete min-w-24 p-2 rounded-md bg-red-500 hover:bg-red-600 text-white text-center"
                              >
                                Xoá
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductAdmin;
