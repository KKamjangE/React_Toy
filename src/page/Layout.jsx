import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="flex justify-center mt-10">
            <Outlet />
        </div>
    );
};

export default Layout;
