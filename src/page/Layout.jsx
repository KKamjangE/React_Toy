import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="flex justify-center mt-10">
            <section className="px-12 py-5 bg-white shadow-lg">
                <Outlet />
            </section>
        </div>
    );
};

export default Layout;
