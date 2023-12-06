import { Navigate, Outlet } from "react-router-dom";
import { useMemberStore } from "@/store/store";

const PublicRoute = () => {
    const isSignIn = useMemberStore((state) => state.isSignIn);

    return isSignIn ? <Navigate to={"/"} /> : <Outlet />;
};

export default PublicRoute;
