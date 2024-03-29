import SidebarAdmin from './components/SidebarAdmin';

const DashboardPage = () => {
    return (
        <main className="bg-gray-200 ml-[256px]">
            <div className="flex h-screen bg-gray-200">
                <SidebarAdmin />
                <div className="flex flex-col flex-1 overflow-hidden">
                    <div className="flex items-center justify-between h-20 px-6 bg-white border-b">
                        <span className="text-xl font-semibold px-4">Bảng điều khiển</span>
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
                                <h2 className="text-xl font-semibold mb-4">Quản lý sản phẩm</h2>
                                <p className="text-gray-700 mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan turpis vitae
                                    justo blandit dapibus.
                                </p>
                                <a
                                    href="#"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Đến quản lý sản phẩm
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <div className="bg-white rounded-lg p-8">
                                <h2 className="text-xl font-semibold mb-4">Quản lý đơn hàng</h2>
                                <p className="text-gray-700 mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan turpis vitae
                                    justo blandit dapibus.
                                </p>
                                <a
                                    href="#"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Đến quản lý đơn hàng
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DashboardPage;
