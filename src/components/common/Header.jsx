import { Link } from "react-router-dom";
import { useMemberStore } from "../../store/store";

const Header = () => {
    const memberInfo = useMemberStore((state) => state.memberInfo);
    return (
        <div className="flex justify-center items-center gap-5 p-4 shadow-lg bg-white sticky top-0">
            <h1>Toy Project</h1>
            <Link
                to="/"
                className="text-sm text-teal-700 hover:text-teal-500 transition"
            >
                Home
            </Link>
            <Link
                to="/list"
                className="text-sm text-teal-700 hover:text-teal-500 transition"
            >
                List
            </Link>
            {memberInfo.memberName ? (
                <span className="text-sm text-teal-500 font-bold">
                    {memberInfo.memberName}
                </span>
            ) : (
                <Link
                    to="/sign"
                    className="text-sm text-teal-700 hover:text-teal-500 transition"
                >
                    Sign
                </Link>
            )}
        </div>
    );
};

export default Header;
