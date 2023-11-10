import { Navigate, Outlet } from "react-router-dom";
import { useMemberStore } from "../store/store";

const PrivateRoute = () => {
    const isSignIn = useMemberStore((state) => state.isSignIn);

    if (!isSignIn) {
        alert("로그인이 필요합니다.");
    }

    return isSignIn ? <Outlet /> : <Navigate to="/sign" />;
};

export default PrivateRoute;
